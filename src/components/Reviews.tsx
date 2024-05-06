import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Reviews = () => {
  return (
    <section className="px-7 lg:px-11 flex flex-col gap-8  max-w-screen-xl mx-auto">
      <div className="space-y-2 w-full md:w-1/2 mx-auto">
        <h3 className="text-h3 text-center w-full">What Our Customer Says</h3>
        <p className="text-small text-center">
          We are a team of building physicists and engineers, software
          developers, surveyors and business management specialists and for
          nearly 40 years we have been Making Buildings Better.
        </p>
      </div>

      <div className="flex flex-row gap-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 grid-row min-h-96 mb-12 lg:mb-0">
          {new Array<number>(2).fill(0).map((_, index) => (
            <ReviewCard
              key={index}
              className={index % 2 == 0 ? "self-start" : "self-end"}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-0 gap-2 grid-row min-h-96">
          {new Array<number>(2).fill(0).map((_, index) => (
            <ReviewCard
              key={index}
              className={index % 2 == 0 ? "self-start" : "self-end"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

export const ReviewCard = ({ className }: { className?: string }) => {
  return (
    <Card className={cn("p-0 shadow-lg border-0", className)}>
      <CardHeader className="p-3 lg:p-6">
        <div className="size-14 flex items-center justify-center">
          <Image
            src={"/Review-card.png"}
            alt="Review Card"
            width={100}
            height={100}
            className="object-contain size-full"
          />
        </div>
        <h4 className="text-btn text-apex-blue">Glyden Hykens</h4>
        <Image
          src={"/icons/review-stars.svg"}
          alt="Review Stars"
          width={40}
          height={40}
          className="object-contain size-fit"
        />
      </CardHeader>
      <CardContent className="p-3 lg:p-6">
        <p className="text-small text-apex-grey-dark">
          “Lorem ipsum dolor sit amet consectetur. Iaculis in ut porttitor
          vivamus et. Quis sem sit posuere egestas amet.
        </p>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-2 items-center justify-between w-full p-3 lg:p-6 pt-0">
        <p className="text-small self-start">
          {new Date().toLocaleDateString()}
        </p>
        <div className="flex flex-row gap-2 items-center self-end">
          <Image
            src={"/icons/check-icon.svg"}
            alt={"Check Icon"}
            width={20}
            height={20}
            className=""
          />
          <p className="text-apex-grey-dark text-small">Verified</p>
        </div>
      </CardFooter>
    </Card>
  );
};
