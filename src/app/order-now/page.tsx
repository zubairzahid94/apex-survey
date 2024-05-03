"use client";

import Counter from "@/components/Counter";
import {
  bedroomOptions,
  properties,
  propertyType,
  services,
} from "@/components/dialogs/InstantQuoteModal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InstantQuoteSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

//TODO: This page is having a lot of repeated code from the instant Quote Modal. So try to reuse that code instead of just copying pasting it here

const OrderNow = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof InstantQuoteSchema>>({
    resolver: zodResolver(InstantQuoteSchema),
    defaultValues: {
      noOfFuseBoxes: 1,
    },
  });

  function onSubmit(data: z.infer<typeof InstantQuoteSchema>) {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
    form.reset();
    router.push("/checkout");
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-8 lg:px-11 px-7 w-full sm:w-3/4 lg:w-1/2 mx-auto my-8"
    >
      <div className="w-full flex flex-col gap-4">
        <Label htmlFor="propertyType" className="!text-h5 text-center">
          Select Property Type:
        </Label>
        {form.getFieldState("propertyType").error && (
          <p className="text-red-500 text-small">
            {form.getFieldState("propertyType").error?.message}
          </p>
        )}
        <div className="flex flex-row gap-4 items-center w-full">
          {propertyType.map((item) => (
            <Checkbox
              key={item.id}
              id={item.id}
              value={item.id}
              checked={form.watch("propertyType") === item.id}
              onCheckedChange={(checked) => {
                if (checked) {
                  form.setValue("propertyType", item.id);
                } else {
                  form.setValue("propertyType", "");
                }
              }}
              className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 flex items-center justify-between p-3 w-1/2"
            >
              <Label
                className="w-full flex flex-col gap-4 items-center p-4"
                htmlFor={item.id}
              >
                {item.icon}
                <h5 className="text-para sm:text-h5 font-bold">{item.label}</h5>
                <p className="text-small">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Quidem aut incidunt officiis ipsum pariatur nihil delectus
                  rerum, dolores magni sapiente?
                </p>
              </Label>
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <Label htmlFor="services" className="!text-h5 text-center">
          Select Your Services:
        </Label>
        {form.getFieldState("services").error && (
          <p className="text-red-500 text-small">
            {form.getFieldState("services").error?.message}
          </p>
        )}
        {services.map((item) => (
          <Checkbox
            key={item.id}
            id={item.id}
            value={item.id}
            checked={form.watch("services")?.includes(item.id)}
            onCheckedChange={(checked) => {
              if (checked) {
                form.setValue(
                  "services",
                  Array.isArray(form.watch("services"))
                    ? [...form.watch("services"), item.id]
                    : [item.id]
                );
              } else {
                form.setValue(
                  "services",
                  form.watch("services")?.filter((value) => value !== item.id)
                );
              }
            }}
            className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 flex items-center justify-between p-3"
          >
            <Label
              className="w-full flex flex-row gap-2 items-center"
              htmlFor={item.id}
            >
              <p className="text-small font-medium">{item.label}</p>
            </Label>
          </Checkbox>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4">
        <Label htmlFor="property" className="!text-btn">
          Property Type:
        </Label>
        {form.getFieldState("property").error && (
          <p className="text-red-500 text-small">
            {form.getFieldState("property").error?.message}
          </p>
        )}
        {properties.map((item) => (
          <div key={item.id} className="flex gap-2">
            <Checkbox
              key={item.id}
              id={item.id}
              value={item.id}
              checked={form.watch("property") === item.id}
              onCheckedChange={(checked) => {
                if (checked) {
                  form.setValue("property", item.id);
                } else {
                  form.setValue("property", "");
                }
              }}
              className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 size-4"
            />
            <Label
              className="w-full flex flex-row gap-2 items-center"
              htmlFor={item.id}
            >
              <p className="text-small font-medium">{item.label}</p>
            </Label>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4">
        <Label htmlFor="noOfBedrooms" className="!text-btn">
          Number of Bedrooms:
        </Label>
        {form.getFieldState("noOfBedrooms").error && (
          <p className="text-red-500 text-small">
            {form.getFieldState("noOfBedrooms").error?.message}
          </p>
        )}
        {bedroomOptions.map((item) => (
          <div key={item.id} className="flex gap-2">
            <Checkbox
              key={item.id}
              id={item.id}
              value={item.id}
              checked={form.watch("noOfBedrooms") === item.id}
              onCheckedChange={(checked) => {
                if (checked) {
                  form.setValue("noOfBedrooms", item.id);
                } else {
                  form.setValue("noOfBedrooms", "");
                }
              }}
              className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 size-4"
            />
            <Label
              className="w-full flex flex-row gap-2 items-center"
              htmlFor={item.id}
            >
              <p className="text-small font-medium">{item.label}</p>
            </Label>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col gap-4">
        <Label htmlFor="fuseBoxes" className="!text-btn">
          Number of Fuse Box or Distribution Board:
        </Label>
        {form.getFieldState("noOfFuseBoxes").error && (
          <p className="text-red-500 text-small">
            {form.getFieldState("noOfFuseBoxes").error?.message}
          </p>
        )}
        <div className="w-full flex items-center flex-row gap-2 justify-between">
          <p className="text-small self-start md:self-auto">No of fuse boxes</p>
          <Counter
            value={form.watch("noOfFuseBoxes")}
            onChange={(value) => form.setValue("noOfFuseBoxes", value)}
            className="w-max"
          />
        </div>
        <p className="text-para">
          Fuse Box or Distribution Board is the main controller and distributor
          of electricity supply in your property. Most properties normally have
          one Fuse Box but some properties can have more than one.
        </p>
      </div>
      <div className="w-full flex flex-col gap-3">
        <Label htmlFor="postcode" className="!text-btn">
          Property Postcode<sup>*</sup>
        </Label>
        {form.getFieldState("postCode").error && (
          <p className="text-red-500 text-small">
            {form.getFieldState("postCode").error?.message}
          </p>
        )}
        <Input
          id="postcode"
          type="text"
          placeholder="Enter postcode"
          {...form.register("postCode")}
          className="w-full border border-apex-grey-light"
        />
      </div>
      <Button
        type="submit"
        className="w-full text-white p-2 bg-apex-blue hover:bg-apex-blue"
      >
        Place Order
      </Button>
    </form>
  );
};

export default OrderNow;
