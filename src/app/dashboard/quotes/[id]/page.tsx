import React from 'react';
import { Card } from '@/components/ui/card';
import { prisma } from '../../../../../lib/db';

const CheckoutDetails = async ({ params }: { params: { id: string } }) => {
    const checkouts = await prisma.checkout.findUnique({
        include: {
            quote: {
                include: {
                    services: true,
                },
            },
        },
        where: {
            id: params.id
        }
    });
    console.log('checkouts', checkouts)
    return (
        <div className="h-full overflow-y-scroll space-y-4 no-scrollbar pr-4">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                <Card className="flex-1 p-4 shadow-none">
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

                                    {/* Display other checkouts details */}
                                </dl>
                            </div>
                        )}
                    </div>
                </Card>

                {checkouts && (
                    <Card className="flex-1 p-4 shadow-none">
                        <div className="space-y-4">
                            <h5 className="text-btn">Quote Details</h5>
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

                                    {/* Display other quote details */}
                                </dl>
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
};

export default CheckoutDetails;
