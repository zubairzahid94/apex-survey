// @ts-nocheck
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { prisma } from '../../../../../lib/db';


import UserDetails from '../../components/UserDetails';


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
        <UserDetails checkouts={checkouts} />
    );
};

export default CheckoutDetails;
