import Banner from "@/components/Banner";
import InstantQuoteModal from "@/components/dialogs/InstantQuoteModal";
import EmailNewsLetter from "@/components/EmailNewsLetter";
import { PricingCard } from "@/components/PricingCard";
import Reviews from "@/components/Reviews";
import ServiceProcedure from "@/components/ServiceProcedure";
import Image from "next/image";
import React from "react";

type ElectricalMaintenanceProps = {
  params: {
    serviceName?: string;
  };
};

const ElectricalMaintenance = ({ params }: ElectricalMaintenanceProps) => {
  console.log(params);
  return (
    <>
      <Banner
        image="/banner-image.png"
        className="size-full items-center justify-center inset-0 mx-auto"
      >
        <h2 className="text-h2 text-white text-center">
          {params.serviceName
            ?.split("-")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ")}
        </h2>
      </Banner>
      <section className="w-full flex flex-col gap-10">
        <div className="my-8 px-6 w-full h-auto flex flex-col md:flex-row gap-4 justify-between">
          <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
            <div className="space-y-6">
              <h4 className="text-h4">Electrical Maintenance/PPM</h4>
              <p className="text-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam asperiores repellendus inventore fugiat ipsa nemo
                obcaecati consectetur esse quis culpa dolorum aut accusamus
                dicta nulla nam, iure nobis neque molestias. Quod veniam
                voluptates numquam. Et ullam doloremque quod perspiciatis ex
                excepturi, voluptate est itaque ad similique? Adipisci fuga
                error voluptate?
              </p>
            </div>
            <InstantQuoteModal />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image
              src={"/electrical-ppm-image.png"}
              alt="Electrical PPM"
              height={1000}
              width={1000}
              quality={100}
              className="object-cover size-full"
            />
          </div>
        </div>
        <div className="px-6 flex flex-col gap-4 mb-4">
          <div>
            <p className="text-para">Pricing</p>
            <h3 className="text-h3">Prices of Services We Offer</h3>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row gap-2 gap-y-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <PricingCard key={index} />
            ))}
          </div>
        </div>
        <Reviews />
        <ServiceProcedure />
        <EmailNewsLetter />
      </section>
    </>
  );
};

export default ElectricalMaintenance;
