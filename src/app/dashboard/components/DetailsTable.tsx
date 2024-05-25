"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { InstantQuote, Service, Checkout } from "@prisma/client";
import {
  LucideChevronDown,
  LucideChevronLeft,
  LucideChevronRight,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { useRouter } from 'next/navigation';

interface CheckoutProps {
  checkouts: (Checkout & { quote: InstantQuote & { services: Service[] } })[];
  countCheckouts: string;
}

const DetailsTable = ({ checkouts, countCheckouts }: CheckoutProps) => {
  const router = useRouter();

  const handleDetailClick = (id: string) => {
    router.push(`/dashboard/quotes/${id}`);
  };

  return (
    <section className="w-full px-4 py-6 flex flex-col gap-4 rounded-xl bg-white">
      <div className="flex items-center justify-between w-full">
        <p className="text-btn">{countCheckouts} Results</p>
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

      <div className="overflow-x-auto">
        <table className="w-full mx-auto space-y-4">
          <thead className="w-full mb-2">
            <tr className="grid grid-cols-12 md:grid-cols-10 gap-2">
              <Checkbox className="size-4 mx-auto" />
              <th className="text-center col-span-3 md:col-span-2">Full Name</th>
              <th className="text-center col-span-3 md:col-span-2">Email</th>
              <th className="text-center col-span-3 md:col-span-2">Phone</th>
              <th className="text-center col-span-2 md:col-span-2">Contact Type</th>
              <th className="text-center col-span-1">Action</th>
            </tr>
          </thead>

          <tbody className="space-y-2">
            {checkouts.map((order) => (
              <tr key={order.id} className="grid grid-cols-12 md:grid-cols-10 gap-2 items-center">
                <Checkbox className="size-4 mx-auto" />
                <td className="text-center col-span-3 md:col-span-2">{order.fullName}</td>
                <td className="text-center col-span-3 md:col-span-2">{order.email}</td>
                <td className="text-center col-span-3 md:col-span-2">{order.phone}</td>
                <td className="text-center col-span-2 md:col-span-2">{order.contactType}</td>
                <td className="text-center col-span-1">
                  <Button
                    className="text-btn text-black bg-gray-200 rounded-md p-2 hover:bg-gray-200"
                    onClick={() => handleDetailClick(order.id)}
                  >
                    Detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DetailsTable;
