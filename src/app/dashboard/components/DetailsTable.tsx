"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  LucideChevronDown,
  LucideChevronLeft,
  LucideChevronRight,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const DetailsTable = () => {
  return (
    <section className="w-full px-4 py-6 flex flex-col gap-4 rounded-xl bg-white">
      <div className="flex items-center justify-between w-full">
        <p className="text-btn">10 Results</p>
        <div className="flex gap-3 items-center">
          <p className="text-btn">1 of 1</p>
          <Button className="bg-transparent hover:bg-transparent p-2 text-btn text-black rounded-lg">
            <LucideChevronLeft className="size-6" />
          </Button>
          <Button className="bg-transparent hover:bg-transparent p-2 text-btn text-black rounded-lg">
            <LucideChevronRight className="size-6" />
          </Button>
          <Button className="text-black text-btn flex gap-2 bg-transparent hover:bg-transparent">
            <Image
              src={"/icons/filter.svg"}
              alt="filter icon"
              width={16}
              height={16}
            />
            <p className="text-btn">Filter</p>
            <LucideChevronDown className="size-6" />
          </Button>
        </div>
      </div>
      <table className="w-full space-y-4">
        <thead className="w-full mb-2">
          <tr className="grid grid-cols-9 gap-2">
            <Checkbox className="size-4 mx-auto" />
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Postcode</th>
            <th>Survey Type</th>
            <th>Address</th>
            <th>Card Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <tr key={index} className="grid grid-cols-9 gap-2 items-center">
              <Checkbox className="size-4 mx-auto" />
              <td className="flex items-center justify-center flex-wrap w-fit text-center">
                Julian Martin
              </td>
              <td className="flex items-center justify-center flex-wrap w-fit text-center">
                WqGkE@example.com
              </td>
              <td className="flex items-center justify-center flex-wrap w-fit text-center">079 123 4567</td>
              <td className="flex items-center justify-center flex-wrap w-fit text-center">ABC 123</td>
              <td className="flex items-center justify-center flex-wrap w-fit text-center">
                Electrical Maintenance
              </td>
              <td className="flex items-center justify-center flex-wrap w-fit text-center">Lorem Ipsum</td>
              <td className="flex items-center justify-center flex-wrap w-fit text-center">Approved</td>
              <td className="flex items-center justify-center flex-wrap w-fit text-center">
                <Button className="text-btn text-black bg-gray-200 rounded-md p-2 hover:bg-gray-200">
                  Detail
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DetailsTable;
