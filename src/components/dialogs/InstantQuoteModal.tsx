"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "../ui/checkbox";
import { Building, HomeIcon } from "lucide-react";
import Counter from "../Counter";
import { InstantQuoteSchema } from "@/lib/schema";

export const propertyType = [
  {
    id: "residential",
    label: "Residential",
    icon: <HomeIcon className="size-8" />,
  },
  {
    id: "commercial",
    label: "Commercial",
    icon: <Building className="size-8" />,
  },
];

export const services = [
  {
    id: "gas-safety-service",
    label: "Gas Safety Service",
  },
  {
    id: "electrical-maintenance",
    label: "Electrical Maintenance",
  },
  {
    id: "electrical-ppm",
    label: "Electrical PPM",
  },
  {
    id: "building-survey-report",
    label: "Building Survey Report",
  },
  {
    id: "digital-mapping-report",
    label: "Digital Mapping Report",
  },
];

export const properties = [
  {
    id: "mid-terraced-house",
    label: "Mid Terraced House",
  },
  {
    id: "detached-house",
    label: "Detached House",
  },
  {
    id: "townhouse",
    label: "Townhouse",
  },
  {
    id: "flat",
    label: "Flat",
  },
];

export const bedroomOptions = [
  {
    id: "1",
    label: "Single Bedroom",
  },
  {
    id: "2",
    label: "2 Bedrooms",
  },
  {
    id: "3",
    label: "3 Bedrooms",
  },
  {
    id: "5+",
    label: "5+ Bedrooms",
  },
];

const InstantQuoteModal = () => {
  const [open, setOpen] = React.useState(false);
  const form = useForm<z.infer<typeof InstantQuoteSchema>>({
    resolver: zodResolver(InstantQuoteSchema),
    defaultValues: {
      noOfFuseBoxes: 1,
    },
  });

  function onSubmit(data: z.infer<typeof InstantQuoteSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    console.log(data);
    alert(JSON.stringify(data, null, 2));
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="w-1/2 text-center text-btn text-white bg-apex-blue hover:bg-apex-blue"
        >
          Quote Now
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100vw-2rem)] sm:max-w-md max-h-[90vh] overflow-y-auto rounded-sm no-scrollbar">
        <DialogHeader>
          <DialogTitle className="text-h4">Get Instant Quote</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full flex flex-col gap-4">
            <Label htmlFor="propertyType" className="text-btn">
              Select Property Type:
            </Label>
            {form.getFieldState("propertyType").error && (
              <p className="text-red-500 text-small">
                {form.getFieldState("propertyType").error?.message}
              </p>
            )}
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
                className="bg-transparent data-[state=checked]:text-white data-[state=checked]:bg-apex-blue border border-gray-200 flex items-center justify-between p-3"
              >
                <Label
                  className="w-full flex flex-row gap-2 items-center"
                  htmlFor={item.id}
                >
                  {item.icon}
                  <p className="text-small font-bold">{item.label}</p>
                </Label>
              </Checkbox>
            ))}
          </div>
          <div className="w-full flex flex-col gap-4">
            <Label htmlFor="services" className="text-btn">
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
                      form
                        .watch("services")
                        ?.filter((value) => value !== item.id)
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
            <Label htmlFor="property" className="text-btn">
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
            <Label htmlFor="noOfBedrooms" className="text-btn">
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
            <Label htmlFor="fuseBoxes" className="text-btn">
              Number of Fuse Box or Distribution Board:
            </Label>
            {form.getFieldState("noOfFuseBoxes").error && (
              <p className="text-red-500 text-small">
                {form.getFieldState("noOfFuseBoxes").error?.message}
              </p>
            )}
            <div className="w-full flex items-center flex-row gap-2 justify-between">
              <p className="text-small self-start md:self-auto">
                No of fuse boxes
              </p>
              <Counter
                value={form.watch("noOfFuseBoxes")}
                onChange={(value) => form.setValue("noOfFuseBoxes", value)}
                className="w-max"
              />
            </div>
            <p className="text-para">
              Fuse Box or Distribution Board is the main controller and
              distributor of electricity supply in your property. Most
              properties normally have one Fuse Box but some properties can have
              more than one.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <Label htmlFor="postcode" className="text-btn">
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
              value={form.watch("postCode")}
              onChange={(event) =>
                form.setValue("postCode", event.target.value)
              }
              className="w-full border border-apex-grey-light"
            />
          </div>
          <Button
            type="submit"
            className="w-full text-white p-2 bg-apex-blue hover:bg-apex-blue"
          >
            Get Instant Quote
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InstantQuoteModal;
