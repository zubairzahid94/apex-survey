//@ts-nocheck
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PricingForm from '../../components/PricingForm';
import { prisma } from '../../../../../lib/db';
import EditPricingForm from '../../components/EditPricingForm';

const EditPricingPage = async ({ params }: { params: { id: string } }) => {
    const Pricing = await prisma.pricing.findUnique({
        where: {
            id: params.id
        },

    })
    return (
        <div className="h-full overflow-y-scroll space-y-4 no-scrollbar pr-4">
            <Card className="flex-1 p-4 flex items-center justify-between gap-2 shadow-none">
                <div className="space-y-2">
                    <h5 className="text-btn">Pricing</h5>
                    <p className="text-para">Add Pricing</p>
                </div>
                <Button className="bg-gray-400 hover:bg-gray-400 px-8 py-2 text-btn text-black rounded-lg">
                    Refresh
                </Button>
            </Card>

            <Card className="flex-1 p-4 shadow-none">
                <div className="space-y-2">
                    <h5 className="text-btn">Add Pricing</h5>
                    <EditPricingForm pricing={Pricing} />
                </div>
            </Card>

        </div>
    );
};

export default EditPricingPage;
