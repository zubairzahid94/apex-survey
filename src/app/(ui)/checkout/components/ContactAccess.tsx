"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, CircleAlert } from "lucide-react";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { checkoutSchema } from "@/lib/schema";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Error from "@/components/Error";

type ContactAccessProps = {
  form: UseFormReturn<z.infer<typeof checkoutSchema>>;
};

const ContactAccess = ({ form }: ContactAccessProps) => {
  const radioOptions: z.infer<
    typeof checkoutSchema
  >["contactAccess"]["type"][] = [
    "me",
    "Seller",
    "Buyer",
    "Tenant",
    "LandLord",
    "Agent",
    "Other",
  ];

  const [contactType, setContactType] = React.useState(radioOptions[0]);

  return (
    <Accordion type="multiple" defaultValue={[]} className="bg-white px-4 py-0">
      <AccordionItem value="item-1" className="border-b-0 justify-start py-0">
        <AccordionTrigger>
          <div className="flex flex-row gap-4 items-center  ">
            <CircleAlert className="size-6 shrink-0 transform-none" />
            <h5 className="text-para !font-semibold hover:no-underline text-start">
              Contact For Access
            </h5>
          </div>
          <ChevronDown className="size-4" />
        </AccordionTrigger>
        <AccordionContent className="space-y-4 px-2">
          {form.formState.errors.contactAccess && contactType !== "me" && (
            <Error message="Please fill in all fields" />
          )}
          <RadioGroup
            defaultValue={contactType}
            value={contactType}
            onValueChange={(e: (typeof radioOptions)[number]) => {
              setContactType(e);
              form.setValue("contactAccess.type", e);
            }}
            className="w-full flex flex-wrap gap-4 lg:justify-between items-center"
          >
            {radioOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option}
                  id={option}
                  className="border-gray-200"
                />
                <Label htmlFor={option} className="!text-para">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {contactType !== "me" ? (
            <section className="flex flex-col lg:flex-row gap-3">
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{`${form.getValues(
                    "contactAccess.type"
                  )} Name`}</Label>
                  <Input id="name" {...form.register("contactAccess.name")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone1">{`${form.getValues(
                    "contactAccess.type"
                  )} Phone number 1`}</Label>
                  <Input
                    id="phone1"
                    {...form.register("contactAccess.phoneNumber1")}
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{`${form.getValues(
                    "contactAccess.type"
                  )} Email`}</Label>
                  <Input id="email" {...form.register("contactAccess.email")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone2">{`${form.getValues(
                    "contactAccess.type"
                  )} Phone number 2`}</Label>
                  <Input
                    id="phone2"
                    {...form.register("contactAccess.phoneNumber2")}
                  />
                </div>
              </div>
            </section>
          ) : null}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ContactAccess;
