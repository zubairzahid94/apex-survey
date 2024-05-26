// @ts-nocheck 
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PricingForm from '../components/PricingForm';
import DetailsTable from '../components/DetailsTable';
import { prisma } from '../../../../lib/db';
import ServicesTable from '../components/ServicesTable';
import {
  LucidePlus
} from "lucide-react";
import Link from 'next/link';


const ServicesPage = async () => {
  const services = await prisma.pricing.findMany({

  })



  const countServices = services.length.toString();
  return (
    <div className="h-full overflow-y-scroll space-y-4 no-scrollbar pr-4">
      <Card className="flex-1 p-4 flex items-center justify-between gap-2 shadow-none">
        <div className="space-y-2">
          <h5 className="text-btn">Services</h5>
          <p className="text-para">Add Pricing</p>
        </div>
        <Link href={'/dashboard/addpricing'}>
          <Button className="flex flex-row justify-around items-center bg-blue-400 hover:bg-blue-500 px-6 py-2 text-btn text-white rounded-lg"
          >

            Add Services
            <LucidePlus size="20" className='text white' />
          </Button>
        </Link>
      </Card>

      <ServicesTable services={services} countServices={countServices} />

    </div>
  );
};

export default ServicesPage;
