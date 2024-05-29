// @ts-nocheck
"use client";

import Counter from "@/components/Counter";
import { propertyType } from "@/components/dialogs/InstantQuoteModal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  bedroomOptions,
  properties,
  services,
  subFields as renderSubFields,
} from "@/lib/constants";
import { InstantQuoteSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";
import type { SubField } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Error from "@/components/Error";

const OrderNow = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof InstantQuoteSchema>>({
    resolver: zodResolver(InstantQuoteSchema),
  });

  const [subFields, setSubFields] = useState<string[]>([]);
  const [loading, setLoading] = useState(false); // State for loading
  const [hasSubmitted, setHasSubmitted] = useState(false); // State to track if the form has been submitted

  async function onSubmit(data: z.infer<typeof InstantQuoteSchema>) {
    try {
      setLoading(true); // Set loading to true before API call
      const response = await axios.post("/api/order", data);
      const orderId = response.data.id;
      form.reset();
      setSubFields([]);
      toast.success("Quote Added moving to Checkout");
      router.push(`/checkout?orderId=${orderId}`);
    } catch (error: any) {
      console.error("Error submitting order:", error);
      toast.error("Unsuccessful");
    } finally {
      setLoading(false); // Set loading to false after API call
      setHasSubmitted(true); // Set hasSubmitted to true after form submission attempt
    }
  }

  const handleChangeInPropertyType = (checked: CheckedState, itemId: string) => {
    if (checked) {
      form.setValue("propertyType", itemId as z.infer<typeof InstantQuoteSchema>["propertyType"]);
      setSubFields([]);
      form.setValue("services", []);
    }
  };

  const handleChangeInService = (checked: CheckedState, item: z.infer<typeof InstantQuoteSchema>["services"][number]) => {
    if (checked) {
      form.setValue(
        "services",
        Array.isArray(form.watch("services"))
          ? [...form.watch("services"), item]
          : [item]
      );
      setSubFields([]);
    } else {
      form.setValue(
        "services",
        form.watch("services")?.filter((value) => value.id !== item.id)
      );
      setSubFields([]);
    }
  };

  const renderSubFieldsOptions = (item: SubField) => {
    if (item.fieldType === "checkbox") {
      return item.options
        .filter((subFieldItem) =>
          // filtering subfields based on property type If services selected contain property type field.
          item.id === "property"
            ? subFieldItem.propertyType === form.watch("propertyType")
            : true
        )
        .map((subFieldItem) => {
          return (
            <div key={subFieldItem.id} className="flex gap-2">
              <Checkbox
                key={subFieldItem.id}
                id={subFieldItem.id}
                value={subFieldItem.id}
                checked={form.watch(item.id) === subFieldItem.id}
                onCheckedChange={(checked) => {
                  if (checked) {
                    form.setValue(item.id, subFieldItem.id);
                  } else {
                    form.setValue(item.id, "");
                  }
                }}
                className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 size-4"
              />
              <Label
                className="w-full flex flex-row gap-2 items-center"
                htmlFor={subFieldItem.id}
              >
                <p className="text-small font-medium">{subFieldItem.label}</p>
              </Label>
            </div>
          );
        });
    }

    if (item.fieldType === "counter") {
      return (
        <div
          key={item.id}
          className="flex gap-2 items-center justify-between w-full"
        >
          <Label
            htmlFor={item.id}
            className="w-full flex flex-row gap-2 items-center"
          >
            <p className="text-small font-medium">{item.label}</p>
          </Label>
          <Counter
            value={form.watch(item.id) ?? "1"}
            onChange={(value) => {
              form.setValue(item.id, String(value));
            }}
            className="w-max"
          />
        </div>
      );
    }

    return (
      <div className="w-full flex items-center">
        <Select onValueChange={(value) => form.setValue(item.id, value)}>
          <SelectTrigger>
            <SelectValue placeholder="Area m²" />
          </SelectTrigger>
          <SelectContent>
            {item.options.map((subFieldItem) => (
              <SelectItem key={subFieldItem.id} value={`${subFieldItem.id}m²`}>
                {subFieldItem.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  useEffect(() => {
    setSubFields((prev) => {
      const newFields: string[] | undefined = form
        .watch("services")
        ?.flatMap((item) => item.subFields);

      // remove duplicates from newFields array
      const uniqueFields: string[] | undefined = newFields?.filter(
        (item, index) => newFields.indexOf(item) === index
      );

      if (uniqueFields?.length <= 0 || !uniqueFields) {
        return prev;
      }

      return [...prev, ...uniqueFields];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("services")]);

  const allErrors = () => {
    return Object.values(form.formState.errors).map((error) => (
      <Error key={error.message} message={error.message ?? ""} />
    ));
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-8 lg:px-11 px-7 w-full my-10 sm:w-3/4 lg:w-1/2 mx-auto mb-16 max-w-screen-md"
    >
      <div className="w-full flex flex-col gap-4">
        <Label htmlFor="propertyType" className="!text-h5 text-center">
          Select Property Type:
        </Label>
        <div className="space-y-2">
          {form.getFieldState("propertyType").error && (
            <Error message={form.getFieldState("propertyType").error?.message ?? ""} />
          )}
          {form.formState.errors.propertyType && (
            <Error message={form.formState.errors.propertyType.message ?? ""} />
          )}
          <div className="flex flex-col md:flex-row gap-4 items-center w-full">
            {propertyType.map((item) => (
              <Checkbox
                key={item.id}
                id={item.id}
                value={item.id}
                checked={form.watch("propertyType") === item.id}
                onCheckedChange={(checked) =>
                  handleChangeInPropertyType(checked, item.id)
                }
                className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 flex items-center justify-between p-3 w-full md:w-1/2"
              >
                <Label
                  className="w-full flex flex-col gap-2 items-center p-4"
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
      </div>
      {form.watch("propertyType") && (
        <div className="w-full flex flex-col gap-4">
          <Label htmlFor="services" className="!text-h5 text-center">
            Select Your Services:
          </Label>
          <div className="space-y-2">
            {form.formState.errors.services && (
              <Error message={form.formState.errors.services.message ?? ""} />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {services
                .filter((service) =>
                  service.servicePropertyType.includes(form.watch("propertyType"))
                )
                .map((item) => (
                  <Checkbox
                    key={item.id}
                    id={item.id}
                    value={item.id}
                    checked={form
                      .watch("services")
                      ?.some((value) => value.id === item.id)}
                    onCheckedChange={(checked) =>
                      handleChangeInService(checked, item)
                    }
                    className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 flex items-center justify-between p-3"
                  >
                    <Label
                      className="w-full flex flex-row gap-2 items-center"
                      htmlFor={item.id}
                    >
                      <p className="text-small font-medium text-start">
                        {item.label}
                      </p>
                    </Label>
                  </Checkbox>
                ))}
            </div>
          </div>
        </div>
      )}
      {renderSubFields
        .filter((item) => subFields.includes(item.id))
        .map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div className="w-full flex flex-col gap-4">
                <Label htmlFor={item.id} className="!text-btn">
                  Select {item.label}:
                </Label>
                <div className="space-y-2">
                  {form.getFieldState(item.id).error && (
                    <Error message={form.getFieldState(item.id).error?.message ?? ""} />
                  )}
                  <div
                    className={cn(
                      "grid gap-4 w-full",
                      item.fieldType === "counter" || item.fieldType === "dropdown"
                        ? "grid-cols-1"
                        : "grid-cols-1 md:grid-cols-2"
                    )}
                  >
                    {renderSubFieldsOptions(item)}
                  </div>
                </div>
              </div>
              <hr className="my-4 w-full bg-apex-grey-light" />
            </React.Fragment>
          );
        })}
      {hasSubmitted && allErrors()} {/* Show all errors above the button after form submission attempt */}
      {form.watch("propertyType") && form.watch("services") && (
        <Button
          type="submit"
          className="w-full text-white p-2 bg-apex-blue hover:bg-apex-blue relative"
          disabled={loading} // Disable button while loading
          onClick={() => { setHasSubmitted(true); }}
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
      )}
    </form>
  );
};

export default OrderNow;
