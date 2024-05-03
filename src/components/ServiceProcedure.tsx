"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

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
  const [containerScrollPercentage, setContainerScrollPercentage] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setContainerScrollPercentage(scrollPercentage);
    };
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="px-7 lg:px-11 flex flex-col gap-6 mb-20">
      <div className="w-full lg:w-4/6 space-y-2 flex flex-col items-center justify-center self-center">
        <h3 className="text-h3 text-center">Four Steps to Get Our Services</h3>
        <p className="text-para text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          voluptate sint eaque ratione error saepe facere? Officia expedita
          deserunt nam?
        </p>
      </div>
      <div
        className="flex overflow-x-scroll scroll-smooth flex-row gap-y-24 gap-x-4 items-center justify-between no-scrollbar"
        ref={scrollContainerRef}
      >
        {serviceSteps.map((step, index) => (
          <div
            key={index}
            className="w-full min-w-[225px] lg:w-1/4 flex flex-col items-center gap-4 p-4 relative"
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
              <div className="absolute top-0 -right-10 size-24">
                <Image
                  src={"/icons/curvy-arrow.svg"}
                  alt="Curvy Arrow"
                  width={50}
                  height={50}
                  className="object-contain size-full rotate-0"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex lg:hidden w-full justify-center gap-3 items-center">
        <span
          onClick={() => {
            if (!scrollContainerRef.current) return;
            scrollContainerRef.current.scrollLeft = 0;
          }}
          className={cn(
            "w-3 h-3 bg-gray-200 rounded-full",
            containerScrollPercentage >= 0 &&
              containerScrollPercentage < 33 &&
              "bg-apex-blue"
          )}
        />
        <span
          onClick={() => {
            if (!scrollContainerRef.current) return;
            scrollContainerRef.current.scrollLeft =
              scrollContainerRef.current.scrollWidth / 4;
          }}
          className={cn(
            "w-3 h-3 bg-gray-200 rounded-full",
            containerScrollPercentage >= 33 &&
              containerScrollPercentage < 66 &&
              "bg-apex-blue"
          )}
        />
        <span
          onClick={() => {
            if (!scrollContainerRef.current) return;
            scrollContainerRef.current.scrollLeft =
              scrollContainerRef.current.scrollWidth;
          }}
          className={cn(
            "w-3 h-3 bg-gray-200 rounded-full",
            containerScrollPercentage >= 66 && "bg-apex-blue"
          )}
        />
      </div>
    </section>
  );
};

export default ServiceProcedure;
