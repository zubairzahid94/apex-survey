"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { toast } from "@/components/ui/use-toast";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { FormSchema } from "@/lib/schema";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;



export function ProblemForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    alert(JSON.stringify(data, null, 2));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-btn font-bold">
                  Depending on the type and nature of your enquiry. Please
                  select one of the relevant option below.
                </FormLabel>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className={cn(
                          "flex flex-row items-start justify-between space-x-3 space-y-0 w-full p-3 border border-r-gray-50 rounded-md",
                          field.value?.includes(item.id) && "bg-apex-blue"
                        )}
                      >
                        <FormControl className="w-full flex flex-row items-center justify-between">
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                            className="data-[state=checked]:bg-transparent data-[state=checked]:text-white border-0 flex items-center justify-between"
                          >
                            <FormLabel
                              className={cn(
                                "text-para text-black",
                                field.value?.includes(item.id) && "text-white"
                              )}
                            >
                              {item.label}
                            </FormLabel>
                          </Checkbox>
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full flex justify-center bg-apex-blue text-white gap-2 hover:bg-apex-blue"
        >
          <span className="text-para font-medium">Go</span>{" "}
          <ArrowRightIcon className="size-5" />
        </Button>
      </form>
    </Form>
  );
}
