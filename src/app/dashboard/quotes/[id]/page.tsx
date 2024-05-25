import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
    console.log('chec', checkouts)
    return (
        <div className="h-full overflow-y-scroll space-y-4 no-scrollbar pr-4">
            <Card className="flex-1 p-4 flex items-center justify-between gap-2 shadow-none">
                <div className="space-y-2">
                    <h5 className="text-btn">User Details</h5>
                </div>
            </Card>
            {checkouts && (
                <Card className="flex-1 p-4 flex items-center justify-between gap-2 shadow-none">
                    <div className="space-y-2">
                        <h5 className="text-btn">User Details</h5>
                        <p>Email: {checkouts.email}</p>
                        <p>Full Name: {checkouts.fullName}</p>
                        <p>Phone: {checkouts.phone}</p>
                        {/* Display other checkouts details */}
                    </div>
                </Card>
            )}
            {checkouts && (
                <Card className="flex-1 p-4 flex items-center justify-between gap-2 shadow-none">
                    <div className="space-y-2">
                        <h5 className="text-btn">Quote Details</h5>
                        <p>Property Type: {checkouts.quote?.propertyType}</p>
                        {/* Display other checkouts details */}
                    </div>
                </Card>
            )}


        </div>
    );
};

export default CheckoutDetails;
