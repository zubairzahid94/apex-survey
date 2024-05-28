//@ts-nocheck
"use client";

import { Button } from "@/components/ui/button";
import React, { Suspense } from "react";
import Heading from "./components/Heading";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import BankInfoForm from "./components/BankInfoForm";
import CardInfoForm from "./components/CardInfoForm";
import { Checkbox } from "@/components/ui/checkbox";
import Error from "@/components/Error";
import { cn } from "@/lib/utils";
import ContactAccess from "./components/ContactAccess";
import { checkoutSchema } from "@/lib/schema";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useState } from "react";

const CheckoutContent = () => {
  const route = useRouter()
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  const orderId = searchParams.get('orderId');
  if (orderId == null) {
    toast.error("Please add quote first")
    route.push('/order-now')
  }
  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      payment: {
        method: "card",
        bankInformation: undefined,
      },
    },
  });
  const [paymentMethod, setPaymentMethod] = React.useState<"card" | "bank">("card");

  const submitHandler = async (data: z.infer<typeof checkoutSchema>) => {
    try {
      setLoading(true);
      const qouteId = orderId;

      const response = await axios.post(`/api/checkout/${qouteId}`, data);

      toast.success("Successfully Ordered");
      form.reset();
      route.push("/")
    } catch (error: any) {
      toast.error("Something went wrong");
    }
    finally {
      setLoading(false); // Set loading to false after API call
    }
  };

  return (
    <div className="lg:px-11 px-7 py-4  max-w-screen-xl mx-auto">
      <h5 className="text-h5">Check out</h5>
      <section className="w-full lg:w-2/3 my-8 mx-auto flex flex-col gap-4">
        <Heading primaryHeading="Your Property and Services" secondaryHeading="Price" />
        <div className="flex flex-col gap-4 py-2 px-4 bg-gray-200">
          <div className="flex flex-row items-center justify-between">
            <p className="text-para">your@gmail.com</p>
            <Button className="text-btn p-2 text-white bg-apex-blue hover:bg-apex-blue">
              Change Service
            </Button>
          </div>
          <div className="w-full flex flex-row items-center justify-between">
            <p className="text-para">Gas Security Certificate</p>
            <p className="text-para font-bold">129$</p>
          </div>
          <ContactAccess form={form} />
        </div>
        <Heading primaryHeading="Payment Option" />
        <RadioGroup
          defaultValue={paymentMethod}
          value={paymentMethod}
          onValueChange={(e: "card" | "bank") => {
            setPaymentMethod(e);
            form.setValue("payment.method", e);
            if (e === "card") {
              form.setValue("payment.bankInformation", undefined);
            } else {
              form.setValue("payment.cardInformation", undefined);
            }
          }}
          className="w-full px-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card-payment" className="border-gray-200" />
            <Label htmlFor="card-payment" className="!text-para">
              Payment by Debit Card
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="bank" id="bank-transfer" className="border-gray-200" />
            <Label htmlFor="bank-transfer" className="!text-para">
              Payment by Bank Transfer
            </Label>
          </div>
        </RadioGroup>
        <Heading primaryHeading="Client Details" />
        <form onSubmit={form.handleSubmit(submitHandler)} className="w-full flex lg:flex-row flex-col gap-4">
          <fieldset className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="!text-para">
                Full Name
              </Label>
              <Input
                id="fullName"
                {...form.register("fullName")}
                className={cn(form.formState.errors.fullName ? "!border-red-500" : "")}
                placeholder="John Doe"
              />
              {form.formState.errors.fullName && (
                <Error message={form.formState.errors.fullName.message ?? ""} />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="!text-para">
                Email
              </Label>
              <Input
                id="email"
                {...form.register("email")}
                className={cn(form.formState.errors.email ? "!border-red-500" : "")}
                placeholder="Email Address"
              />
              {form.formState.errors.email && (
                <Error message={form.formState.errors.email.message ?? ""} />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="postCode" className="!text-para">
                Postal Code
              </Label>
              <Input
                id="postCode"
                {...form.register("postCode")}
                placeholder="Post Code"
                className={cn(form.formState.errors.postCode ? "!border-red-500" : "")}
              />
              {form.formState.errors.postCode && (
                <Error message={form.formState.errors.postCode.message ?? ""} />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="address" className="!text-para">
                Address
              </Label>
              <Input
                id="address"
                {...form.register("address")}
                placeholder="House number and Street number"
                className={cn(form.formState.errors.address ? "!border-red-500" : "")}
              />
              {form.formState.errors.address && (
                <Error message={form.formState.errors.address.message ?? ""} />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="!text-para">
                Phone
              </Label>
              <Input
                id="phone"
                {...form.register("phone")}
                placeholder="Phone"
                className={cn(form.formState.errors.phone ? "!border-red-500" : "")}
              />
              {form.formState.errors.phone && (
                <Error message={form.formState.errors.phone.message ?? ""} />
              )}
            </div>
          </fieldset>
          <fieldset className="w-full lg:w-1/2 flex flex-col gap-4">
            {paymentMethod === "card" ? (
              <CardInfoForm form={form} />
            ) : (
              <BankInfoForm form={form} />
            )}
            <div className="space-y-4">
              <p className="text-para">
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
              </p>
              <div className="flex items-center w-full gap-4">
                <Checkbox
                  id="tos"
                  checked={form.watch("acceptTos")}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      form.setValue("acceptTos", true);
                    } else {
                      form.setValue("acceptTos", false);
                    }
                  }}
                  className={cn(
                    "bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 size-4",
                    form.formState.errors.acceptTos ? "!border-red-500" : ""
                  )}
                />
                <Label htmlFor="tos" className="!text-para">
                  I accept the <span className="font-semibold">terms and conditions</span>
                </Label>
              </div>
              {form.formState.errors.acceptTos && (
                <Error message={form.formState.errors.acceptTos.message ?? ""} className="block w-full" />
              )}
              <Button
                className="text-btn p-2 text-white bg-apex-blue hover:bg-apex-blue w-full text-center relative"
                type="submit"
                disabled={loading} // Disable button while loading
              >
                {loading && ( // Show loader if loading is true
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-row gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" />
                      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]" />
                      <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]" />
                    </div>
                  </div>
                )}
                <span className={loading ? "opacity-0" : "opacity-100"}>
                  Place Order
                </span>
              </Button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

const Checkout = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <CheckoutContent />
  </Suspense>
);

export default Checkout;
