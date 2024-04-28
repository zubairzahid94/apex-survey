import Banner from "@/components/Banner";
import { serviceSteps } from "@/components/ServiceProcedure";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowItWorks = () => {
  return (
    <>
      <Banner image="/banner-image.png" className="gap-2">
        <Link href="/">
          <p className="text-para text-white">/home</p>
        </Link>
        <h5 className="text-h5 text-white">How it Works</h5>
      </Banner>
      <section className="flex flex-col gap-8 px-6 my-10">
        {serviceSteps.map((step, index) => (
          <div key={index} className="w-full flex gap-8 p-4 relative">
            <div
              className={cn(
                "w-32 h-10 md:size-max flex items-center justify-center p-2 md:p-3",
                index % 2 === 0 ? "bg-apex-blue" : "bg-apex-dark"
              )}
            >
              <Image
                src={step.icon}
                alt={step.heading}
                width={100}
                height={100}
                className="object-cover size-min"
              />
            </div>
            <div className="flex flex-col gap-2 items-start w-max">
              <h5 className="text-h5">{step.heading}</h5>
              <p className="text-para">{step.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HowItWorks;
