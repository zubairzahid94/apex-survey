import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const serviceSteps = [
  {
    icon: "/icons/cart.svg",
    heading: "Place Order Online",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore ducimus quidem doloremque vel quisquam possimus aliquid obcaecati enim, assumenda modi quod atque maxime laborum!",
  },
  {
    icon: "/icons/clipboard-check.svg",
    heading: "Survey Booked",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore ducimus quidem doloremque vel quisquam possimus aliquid obcaecati enim, assumenda modi quod atque maxime laborum!",
  },
  {
    icon: "/icons/search.svg",
    heading: "Start Land Survey",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore ducimus quidem doloremque vel quisquam possimus aliquid obcaecati enim, assumenda modi quod atque maxime laborum!",
  },
  {
    icon: "/icons/certificate.svg",
    heading: "Certificate Issued",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore ducimus quidem doloremque vel quisquam possimus aliquid obcaecati enim, assumenda modi quod atque maxime laborum!",
  },
];

const ServiceProcedure = () => {
  return (
    <section className="px-7 lg:px-11 flex flex-col gap-6 mb-20">
      <div className="w-full md:w-4/6 space-y-2 flex flex-col items-center justify-center self-center">
        <h3 className="text-h3 text-center">Four Steps to Get Our Services</h3>
        <p className="text-para text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          voluptate sint eaque ratione error saepe facere? Officia expedita
          deserunt nam?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-24 gap-x-4 items-center justify-between">
        {serviceSteps.map((step, index) => (
          <div
            key={index}
            className="w-full md:w-1/4 flex flex-col items-center gap-4 p-4 relative"
          >
            <div
              className={cn(
                "size-14 flex items-center justify-center p-2",
                index % 2 === 0 ? "bg-apex-blue" : "bg-apex-dark"
              )}
            >
              <Image
                src={step.icon}
                alt={step.heading}
                width={50}
                height={50}
                className="object-contain size-full"
              />
            </div>
            <h5 className="text-h5 text-center">{step.heading}</h5>
            <p className="text-para text-center">{step.description}</p>
            {/*Write logic So that If index becomes equal to the length, then donot show arrow for that iteration and forward. */}

            {index < serviceSteps.length - 1 && (
              <div className="absolute -bottom-24 right-1/3 lg:top-0 lg:-right-10 size-24">
                <Image
                  src={"/icons/curvy-arrow.svg"}
                  alt="Curvy Arrow"
                  width={50}
                  height={50}
                  className="object-contain size-full rotate-90 lg:rotate-0"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceProcedure;
