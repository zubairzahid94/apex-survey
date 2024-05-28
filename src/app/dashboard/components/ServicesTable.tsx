//@ts-nocheck
"use client";

import { Button } from "@/components/ui/button";
import type { Pricing } from "@prisma/client";
import {
    LucideChevronDown,
    LucideChevronLeft,
    LucideChevronRight,
    Trash
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import * as Switch from '@radix-ui/react-switch';
import axios from 'axios';
import { toast } from "react-hot-toast"
import LoadingBounce from "@/components/loading";
import { update } from "@/lib/action";
interface ServicesProps {
    services: Pricing[],
    countServices: string
}

const ServicesTable = ({ services: initialServices, countServices }: ServicesProps) => {
    const router = useRouter();
    const [services, setServices] = useState(initialServices);
    const [loading, setLoading] = useState(false); // State for managing loading

    const handleDeleteClick = async (id: string) => {
        try {
            setLoading(true); // Set loading to true when API request starts
            await axios.delete(`/api/pricing/delete/${id}`);
            setServices(services.filter(service => service.id !== id));

            toast.success("Service Deleted")

        } catch (error) {
            console.error('Error deleting pricing item:', error);
        } finally {
            setLoading(false); // Set loading to false when API request finishes
        }
    };

    const handleStatusChange = async (id: string, currentStatus: string) => {
        try {
            setLoading(true); // Set loading to true when API request starts
            const updatedStatus = currentStatus === "enabled" ? "disabled" : "enabled";
            await axios.put(`/api/pricing/${id}`, { status: updatedStatus });

            setServices(services.map(service =>
                service.id === id ? { ...service, status: updatedStatus } : service
            ));
            toast.success(`Service ${updatedStatus}`)
            update(["/dashboard/pricing"]);
        } catch (error) {
            console.error('Error updating status:', error);
        } finally {
            setLoading(false); // Set loading to false when API request finishes
        }
    };

    return (
        <section className="w-full px-4 py-6 flex flex-col gap-4 rounded-xl bg-white">
            <div className="flex items-center justify-between w-full">
                <p className="text-btn">{countServices} Results</p>
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
                {loading ? (
                    <LoadingBounce /> // Display loader when loading is true
                ) : (
                    <table className="w-full mx-auto space-y-4">
                        <thead className="w-full mb-2">
                            <tr className="grid grid-cols-12 md:grid-cols-10 gap-2">
                                <th className="text-center col-span-3 md:col-span-2">Service Name</th>
                                <th className="text-center col-span-3 md:col-span-2">Price</th>
                                <th className="text-center col-span-3 md:col-span-2">Description</th>
                                <th className="text-center col-span-2 md:col-span-2">Status</th>
                                <th className="text-center col-span-1">Action</th>
                            </tr>
                        </thead>

                        <tbody className="space-y-2">
                            {services.map((service) => (
                                <tr key={service.id} className="grid grid-cols-12 md:grid-cols-10 gap-2 items-center">
                                    <td className="text-center col-span-3 md:col-span-2">{service.serviceName}</td>
                                    <td className="text-center col-span-3 md:col-span-2">$ {service.pricing}</td>
                                    <td className="text-center col-span-3 md:col-span-2">{service.surveyType.join(', ')}</td>
                                    <td className="text-center col-span-2 md:col-span-2">
                                        <Switch.Root
                                            className="w-[42px] h-[25px] bg-blackA6 rounded-full relative data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-200 outline-none cursor-pointer"
                                            checked={service.status === "enabled"}
                                            onCheckedChange={() => handleStatusChange(service.id, service.status)}
                                        >
                                            <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                                        </Switch.Root>
                                    </td>
                                    <td className="text-center col-span-1">
                                        <Button
                                            className="text-btn text-black bg-white rounded-md p-2 hover:bg-gray-100"
                                            onClick={() => handleDeleteClick(service.id)}
                                        >
                                            <Trash className="size-5" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
};

export default ServicesTable;