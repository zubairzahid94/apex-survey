"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { InstantQuote, Service } from "@prisma/client";
import {
  LucideChevronDown,
  LucideChevronLeft,
  LucideChevronRight,
} from "lucide-react";
import Image from "next/image";
import React from "react";

interface QuotesProps {
  quotes: InstantQuote & { services: Service };
  countQoutes: string
}

const DetailsTable = ({ quotes, countQoutes }: QuotesProps) => {
  console.log("quotes", quotes);

  return (
    <section className="w-full px-4 py-6 flex flex-col gap-4 rounded-xl bg-white">
      <div className="flex items-center justify-between w-full">
        <p className="text-btn">{countQoutes} Results</p>
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

      <table className="w-full mx-auto space-y-4">
        {/* Center the table using CSS */}
        <style jsx>{`
          .table {
            margin: 0 auto; /* Center horizontally */
          }
        `}</style>

        <thead className="w-full mb-2">
          <tr className="grid grid-cols-9 gap-2">
            <Checkbox className="size-4 mx-auto" />
            <th className="text-center">Type</th>
            <th className="text-center">Property</th>
            <th className="text-center">Area</th>
            <th className="text-center">Bedrooms</th>
            <th className="text-center">Floors</th>
            <th className="text-center">Units</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>

        <tbody className="space-y-2">
          {quotes.map((order) => (
            <tr key={order.id} className="grid grid-cols-9 gap-2 items-center">
              <Checkbox className="size-4 mx-auto" />
              <td className="text-center">
                {order.propertyType}
              </td>
              <td className="text-center">
                {order.property}
              </td>
              <td className="text-center">
                {order.propertyArea}
              </td>
              <td className="text-center">
                {order.noOfBedrooms}
              </td>
              <td className="text-center">
                {order.noOfFloors}
              </td>
              <td className="text-center">
                {order.consumerUnits}
              </td>
              <td className="text-center">
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
