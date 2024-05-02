"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { checkoutSchema } from "../page";
import { Label } from "@/components/ui/label";
import Error from "@/components/Error";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CardInfoFormProps = {
  form: UseFormReturn<z.infer<typeof checkoutSchema>>;
};

const cardsProviders = [
  {
    name: "Visa",
    image: "/visa.png",
  },
  {
    name: "MasterCard",
    image: "/mastercard.png",
  },
  {
    name: "Eco Bank",
    image: "/ecobank.png",
  },
  {
    name: "Visa Mastercard",
    image: "/visa-mastercard.png",
  },
];

const CardInfoForm = ({ form }: CardInfoFormProps) => {
  return (
    <div className="space-y-3">
      <h5 className="text-btn">Add a Credit or Debit card</h5>
      <div className="flex flex-col gap-3">
        <p className="text-para">Card Information</p>
        <Input
          placeholder="Name on Card"
          className={cn(
            form.formState.errors.payment?.cardInformation?.nameOnCard
              ? "!border-red-500"
              : ""
          )}
          {...form.register("payment.cardInformation.nameOnCard")}
        />
        {form.formState.errors.payment?.cardInformation?.nameOnCard && (
          <Error
            message={
              form.formState.errors.payment?.cardInformation?.nameOnCard
                ?.message ?? ""
            }
          />
        )}
        <Input
          placeholder="Card Number (without spaces)"
          className={cn(
            form.formState.errors.payment?.cardInformation?.cardNumber
              ? "!border-red-500"
              : ""
          )}
          {...form.register("payment.cardInformation.cardNumber")}
        />
        {form.formState.errors.payment?.cardInformation?.cardNumber && (
          <Error
            message={
              form.formState.errors.payment?.cardInformation?.cardNumber
                ?.message ?? ""
            }
          />
        )}
        <div className="w-full flex flex-row gap-4 items-center">
          {cardsProviders.map((provider, index) => (
            <Image
              src={provider.image}
              alt={provider.name}
              width={100}
              key={index}
              height={100}
              className="object-contain size-10"
            />
          ))}
        </div>
        <div className="w-full flex gap-2 items-start">
          <div className="w-1/2 space-y-1 h-max">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input
              id="expiryDate"
              placeholder="MM/YY"
              className={cn(
                form.formState.errors.payment?.cardInformation?.expiryDate
                  ? "!border-red-500"
                  : ""
              )}
              {...form.register("payment.cardInformation.expiryDate")}
            />
            {form.formState.errors.payment?.cardInformation?.expiryDate && (
              <Error
                message={
                  form.formState.errors.payment?.cardInformation?.expiryDate
                    ?.message ?? ""
                }
              />
            )}
          </div>
          <div className="w-1/2 space-y-1 h-max">
            <Label htmlFor="cvv">CVV Code</Label>
            <Input
              id="cvv"
              className={cn(
                form.formState.errors.payment?.cardInformation?.CVVCode
                  ? "!border-red-500"
                  : ""
              )}
              {...form.register("payment.cardInformation.CVVCode")}
              placeholder="CVV"
            />
            {form.formState.errors.payment?.cardInformation?.CVVCode && (
              <Error
                message={
                  form.formState.errors.payment?.cardInformation?.CVVCode
                    ?.message ?? ""
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfoForm;
