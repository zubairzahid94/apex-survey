"use client";

import { Input } from "@/components/ui/input";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { checkoutSchema } from "../page";
import { cn } from "@/lib/utils";
import Error from "@/components/Error";

type BankInfoFormProps = {
  form: UseFormReturn<z.infer<typeof checkoutSchema>>;
};

const BankInfoForm = ({ form }: BankInfoFormProps) => {
  return (
    <div className="space-y-3">
      <h5 className="text-btn">Bank Information</h5>
      <div className="flex flex-col gap-3">
        <p className="text-para">Account Information</p>
        <Input
          placeholder="Bank Name"
          className={cn(
            form.formState.errors.payment?.bankInformation?.bankName
              ? "!border-red-500"
              : ""
          )}
          {...form.register("payment.bankInformation.bankName")}
        />
        {form.formState.errors.payment?.bankInformation?.bankName && (
          <Error
            message={
              form.formState.errors.payment?.bankInformation?.bankName
                ?.message ?? ""
            }
          />
        )}
        <Input
          placeholder="Enter IBAN"
          className={cn(
            form.formState.errors.payment?.bankInformation?.IBANNumber
              ? "!border-red-500"
              : ""
          )}
          {...form.register("payment.bankInformation.IBANNumber")}
        />
        {form.formState.errors.payment?.bankInformation?.IBANNumber && (
          <Error
            message={
              form.formState.errors.payment?.bankInformation?.IBANNumber
                ?.message ?? ""
            }
          />
        )}
        <Input
          placeholder="Enter Account Type"
          {...form.register("payment.bankInformation.accountType")}
          className={cn(
            form.formState.errors.payment?.bankInformation?.accountType
              ? "!border-red-500"
              : ""
          )}
        />
        {form.formState.errors.payment?.bankInformation?.accountType && (
          <Error
            message={
              form.formState.errors.payment?.bankInformation?.accountType
                ?.message ?? ""
            }
          />
        )}
        <Input
          placeholder="Enter Account Name"
          {...form.register("payment.bankInformation.accountName")}
          className={cn(
            form.formState.errors.payment?.bankInformation?.accountName
              ? "!border-red-500"
              : ""
          )}
        />
        {form.formState.errors.payment?.bankInformation?.accountName && (
          <Error
            message={
              form.formState.errors.payment?.bankInformation?.accountName
                ?.message ?? ""
            }
          />
        )}
        <Input
          placeholder="GOVT ID"
          className={cn(
            form.formState.errors.payment?.bankInformation?.govtId
              ? "!border-red-500"
              : ""
          )}
          {...form.register("payment.bankInformation.govtId")}
        />
        {form.formState.errors.payment?.bankInformation?.govtId && (
          <Error
            message={
              form.formState.errors.payment?.bankInformation?.govtId?.message ??
              ""
            }
          />
        )}
      </div>
    </div>
  );
};

export default BankInfoForm;
