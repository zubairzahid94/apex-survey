"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { LucideChevronDown, LucideChevronLeft, LucideChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import type { Checkout, InstantQuote, Service } from "@prisma/client";

interface CheckoutProps {
  checkouts: (Checkout & { quote: InstantQuote & { services: Service[] } })[];
  countCheckouts: string;
}

const DetailsTable = ({ checkouts, countCheckouts }: CheckoutProps) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleDetailClick = (id: string) => {
    router.push(`/dashboard/quotes/${id}`);
  };

  const totalPages = Math.ceil(checkouts.length / itemsPerPage);
  const currentCheckouts = checkouts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <section className="w-full px-4 py-6 flex flex-col gap-4 rounded-xl bg-white">
      <div className="flex items-center justify-between w-full">
        <p className="text-btn">{countCheckouts} Results</p>
        <div className="flex gap-3 items-center">
          <p className="text-btn">{currentPage} of {totalPages}</p>
          <Button
            className="bg-transparent hover:bg-transparent p-2 text-btn text-black rounded-lg"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <LucideChevronLeft className="size-6" />
          </Button>
          <Button
            className="bg-transparent hover:bg-transparent p-2 text-btn text-black rounded-lg"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
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
            <tr className="grid grid-cols-12 md:grid-cols-12 gap-2">
              <th className="text-center col-span-1">
                <Checkbox className="size-4 mx-auto" />
              </th>
              <th className="text-center col-span-2 md:col-span-2">Full Name</th>
              <th className="text-center col-span-4 md:col-span-4 lg:col-span-3">Email</th>
              <th className="text-center col-span-2 md:col-span-2 lg:col-span-2">Phone</th>
              <th className="text-center col-span-2 md:col-span-2 lg:col-span-2">Contact Type</th>
              <th className="text-center col-span-1">Action</th>
            </tr>
          </thead>

          <tbody className="space-y-2">
            {currentCheckouts.map((order) => (
              <tr key={order.id} className="grid grid-cols-12 md:grid-cols-12 gap-2 items-center">
                <td className="text-center col-span-1">
                  <Checkbox className="size-4 mx-auto" />
                </td>
                <td className="text-center col-span-2 md:col-span-2">{order.fullName}</td>
                <td className="text-center col-span-4 md:col-span-4 lg:col-span-3">
                  <span className="block overflow-hidden text-ellipsis whitespace-pre-wrap">{order.email}</span>
                </td>
                <td className="text-center col-span-2 md:col-span-2 lg:col-span-2">{order.phone}</td>
                <td className="text-center col-span-2 md:col-span-2 lg:col-span-2">{order.contactType}</td>
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
