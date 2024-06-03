// @ts-nocheck
"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import type { Checkout, InstantQuote, Service } from "@prisma/client";
import { Card } from '@/components/ui/card';
import axios from 'axios';
import { toast } from "react-hot-toast"
import { update } from "@/lib/action";
import LoadingBounce from "@/components/loading";
import './print.css';

interface CheckoutProps {
    checkouts: (Checkout & { quote: InstantQuote & { services: Service[] } })[];
}

const UserDetails = ({ checkouts }: CheckoutProps) => {
    const route = useRouter()
    const [status, setStatus] = useState(checkouts.status);
    const [loading, setLoading] = useState(false);

    const handleStatus = async (id: string, newStatus: string) => {
        try {
            setLoading(true);
            const response = await axios.put(`/api/checkout/status/${id}`, { status: newStatus });
            setStatus(newStatus);
            toast.success(`Status ${newStatus}`);
            update(["/dashboard/quotes"]);
            route.push("/dashboard/quotes");
        } catch (error) {
            console.error('Error updating status:', error);
        } finally {
            setLoading(false); // Set loading to false when API request finishes
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="print-container h-full overflow-y-scroll space-y-4 no-scrollbar pr-4">
            {loading ? (
                <LoadingBounce />
            ) : (
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    <Card className=" flex-1 p-4 shadow-none">
                        <div className="space-y-4">
                            <h5 className="text-btn">User Details</h5>
                            {checkouts && (
                                <div className="flow-root">
                                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">Email</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{checkouts.email}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">Full Name</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{checkouts.fullName}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">Phone</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{checkouts.phone}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">Address</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{checkouts.address}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">Postal Code</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{checkouts.postCode}</dd>
                                        </div>

                                        {checkouts.paymentMethod === 'card' && (
                                            <>
                                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">Name on Card</dt>
                                                    <dd className="text-gray-700 sm:col-span-2">{checkouts.nameOnCard}</dd>
                                                </div>

                                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">Card Number</dt>
                                                    <dd className="text-gray-700 sm:col-span-2">{checkouts.cardNumber}</dd>
                                                </div>
                                            </>
                                        )}

                                        {checkouts.paymentMethod === 'bank' && (
                                            <>
                                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">Bank Name</dt>
                                                    <dd className="text-gray-700 sm:col-span-2">{checkouts.bankName}</dd>
                                                </div>

                                                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                                    <dt className="font-medium text-gray-900">IBAN Number</dt>
                                                    <dd className="text-gray-700 sm:col-span-2">{checkouts.IBANNumber}</dd>
                                                </div>
                                            </>
                                        )}
                                    </dl>
                                </div>
                            )}
                        </div>
                    </Card>

                    {checkouts && (
                        <Card className="flex-1 p-4 shadow-none">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h5 className="text-btn">Quote Details</h5>
                                    <Button variant={"secondary"} onClick={handlePrint} className=" print-hide text-sm px-4 py-2">
                                        Print
                                    </Button>
                                </div>
                                <div className="flow-root">
                                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">Property Type</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{checkouts.quote?.propertyType}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">Services</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{checkouts.quote?.services.map(service => service.label).join(', ')}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">No. of Bedrooms</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{checkouts.quote?.noOfBedrooms}</dd>
                                        </div>

                                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">Consumer Units</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{checkouts.quote?.consumerUnits}</dd>
                                        </div>
                                        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                                            <dt className="font-medium text-gray-900">Status</dt>
                                            <dd className="text-gray-700 sm:col-span-2">{status === 'Accepted' ? (
                                                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-md">Accepted</span>
                                            ) : status === 'Declined' ? (
                                                <span className="px-2 py-1 bg-red-200 text-red-800 rounded-md">Declined</span>
                                            ) : (
                                                <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md">Pending</span>
                                            )}</dd>
                                        </div>
                                    </dl>
                                    <div className="flex justify-center space-x-4 mt-4">
                                        <Button variant={"default"} onClick={() => handleStatus(checkouts.id, 'Accepted')} className="bg-green-500 print-hide text-white hover:bg-green-600">
                                            Accept
                                        </Button>
                                        <Button variant={"destructive"} onClick={() => handleStatus(checkouts.id, 'Declined')} className="bg-red-500 print-hide text-white hover:bg-red-600">
                                            Decline
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </Card>
                    )}
                </div>
            )}
        </div>
    )
};

export default UserDetails;
