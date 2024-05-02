"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Heading from "./components/Heading";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import BankInfoForm from "./components/BankInfoForm";
import CardInfoForm from "./components/CardInfoForm";
import { Checkbox } from "@/components/ui/checkbox";
import Error from "@/components/Error";
import { cn } from "@/lib/utils";
import ContactAccess from "./components/ContactAccess";

export const checkoutSchema = z.object({
  contactAccess: z.object({
    type: z.union([
      z.literal("me"),
      z.literal("Seller"),
      z.literal("Buyer"),
      z.literal("Tenant"),
      z.literal("LandLord"),
      z.literal("Agent"),
      z.literal("Other"),
    ]),
    name: z
      .string({
        required_error: "Please enter your name",
      })
      .min(4, {
        message: "Name should be at least 4 characters",
      })
      .optional(),
    email: z
      .string({ required_error: "Please enter your email" })
      .email({ message: "Please enter a valid email" })
      .optional(),
    phoneNumber1: z
      .string({ required_error: "Please enter your phone number" })
      .regex(
        /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g,
        "Please Enter a valid Phone Number"
      )
      .optional(),
    phoneNumber2: z
      .string({ required_error: "Please enter your phone number" })
      .regex(
        /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g,
        "Please Enter a valid Phone Number"
      )
      .optional(),
  }),
  payment: z.object({
    method: z.union([z.literal("card"), z.literal("bank")]),
    cardInformation: z
      .object({
        nameOnCard: z.string({
          required_error: "Please enter Card Holder Name",
        }),
        cardNumber: z
          .string({
            required_error: "Please enter your card number",
          })
          .regex(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/g, {
            message: "Please enter a valid card number",
          })
          .max(16, {
            message: "Please enter a valid card number",
          }),
        expiryDate: z
          .string({ required_error: "Please enter expiry date" })
          .regex(/^(0[1-9]|1[0-2])\/\d{2}$/g, {
            message: "Please enter a valid expiry date",
          }),
        CVVCode: z
          .string({
            required_error: "Please enter CVV code",
          })
          .regex(/^[0-9]{3,4}$/g, {
            message: "Please enter a valid CVV code",
          })
          .max(4, {
            message: "Please enter a valid CVV code",
          }),
      })
      .optional(),
    bankInformation: z
      .object({
        bankName: z
          .string({
            required_error: "Please enter Bank Name",
          })
          .min(5, {
            message: "Name should be at least 5 characters",
          }),
        IBANNumber: z
          .string({
            required_error: "Please enter IBAN Number",
          })
          .regex(
            /^[A-Z]{2}[0-9]{2}\s?[0-9]{4}(\s?[0-9]{4}){2}(\s?[0-9]{2})?$/g,
            {
              message: "Please enter a valid IBAN Number",
            }
          ),
        accountType: z.string({
          required_error: "Please enter Account Type",
        }),
        accountName: z
          .string({
            required_error: "Please enter Account Name",
          })
          .min(4, {
            message: "Name should be at least 4 characters",
          }),
        govtId: z
          .string({
            required_error: "Please enter Government ID",
          })
          .min(8, {
            message: "ID should be at least 8 characters",
          }),
      })
      .optional(),
  }),
  fullName: z.string({ required_error: "Please enter your full name" }).min(4, {
    message: "Name should be at least 4 characters",
  }),
  email: z
    .string({ required_error: "Please enter your email" })
    .email("Please enter a valid email address"),
  postCode: z
    .string({ required_error: "Please enter your postcode" })
    .regex(
      /^(?:\d{4}|\d{3}-\d{4}|[A-Z]{1}\d{2}\s?\d{3}|[A-Za-z]{2}-\d{7}|A-PR-UWYZ: [1-9]|[A-HJKSTUW]\d{2}|[Gg][Ii][Rr] 0AA\d{1,2}|[Ii][Mm][Ss] \d{5}|(?:[A-CEPTZ][\d{2,4}])(?:\s(?:[ABCDEFGHIJKLMNOPQZSTUVWXY]\d{2,4}))?|\d{5}(?:[-\ ]\d{4})?|[A-HJ-NPR-Z\d]{2}\d{1,2})$/g,
      {
        message: "Please enter a valid postcode",
      }
    ),
  address: z.string({ required_error: "Please enter your address" }).min(10, {
    message: "Address should be at least 10 characters",
  }),
  phone: z
    .string({ required_error: "Please enter your phone number" })
    .regex(
      /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g,
      "Please Enter a valid Phone Number"
    ),
  acceptTos: z.boolean({
    required_error: "Please accept the terms and conditions",
  }),
});

const Checkout = () => {
  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      payment: {
        method: "card",
        bankInformation: undefined,
      },
    },
  });
  const [paymentMethod, setPaymentMethod] = React.useState<"card" | "bank">(
    "card"
  );

  const submitHandler = (data: z.infer<typeof checkoutSchema>) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="px-6 py-4">
      <h5 className="text-h5">Check out</h5>
      <section className="w-2/3 my-8 mx-auto flex flex-col gap-4">
        <Heading
          primaryHeading="Your Property and Services"
          secondaryHeading="Price"
        />
        <div className="flex flex-col gap-4 py-2 px-4 bg-gray-200">
          <div className="flex flex-row items-center justify-between">
            <p className="text-para">your@gmail.com</p>
            <Button className="text-btn p-2 text-white bg-apex-blue">
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
            <RadioGroupItem
              value="card"
              id="card-payment"
              className="border-gray-200"
            />
            <Label htmlFor="card-payment" className="!text-para">
              Payment by Debit Card
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="bank"
              id="bank-transfer"
              className="border-gray-200"
            />
            <Label htmlFor="bank-transfer" className="!text-para">
              Payment by Bank Transfer
            </Label>
          </div>
        </RadioGroup>
        <Heading primaryHeading="Client Details" />
        <form
          onSubmit={form.handleSubmit(submitHandler)}
          className="w-full flex gap-4"
        >
          <fieldset className="w-1/2 flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="!text-para">
                Full Name
              </Label>
              <Input
                id="fullName"
                {...form.register("fullName")}
                className={cn(
                  form.formState.errors.fullName ? "!border-red-500" : ""
                )}
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
                className={cn(
                  form.formState.errors.email ? "!border-red-500" : ""
                )}
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
                className={cn(
                  form.formState.errors.postCode ? "!border-red-500" : ""
                )}
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
                className={cn(
                  form.formState.errors.address ? "!border-red-500" : ""
                )}
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
                className={cn(
                  form.formState.errors.phone ? "!border-red-500" : ""
                )}
              />
              {form.formState.errors.phone && (
                <Error message={form.formState.errors.phone.message ?? ""} />
              )}
            </div>
          </fieldset>
          <fieldset className="w-1/2 flex flex-col gap-4">
            {paymentMethod === "card" ? (
              <CardInfoForm form={form} />
            ) : (
              <BankInfoForm form={form} />
            )}
            <div className="space-y-4">
              <p className="text-para">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
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
                  I accept the{" "}
                  <span className="font-semibold">terms and conditions</span>
                </Label>
              </div>
              {form.formState.errors.acceptTos && (
                <Error
                  message={form.formState.errors.acceptTos.message ?? ""}
                  className="block w-full"
                />
              )}
              <Button
                className="text-btn p-2 text-white bg-apex-blue hover:bg-apex-blue w-full text-center"
                type="submit"
              >
                Place Order
              </Button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
