import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type BannerProps = {
  children: React.ReactNode;
  image: string;
  className?: string;
};

const Banner = ({ image, children, className }: BannerProps) => {
  return (
    <div className="relative w-full h-auto min-h-96">
      <div className="absolute inset-0">
        <Image
          src={image}
          width={1000}
          height={1000}
          quality={100}
          alt="BannerImage"
          className="object-cover size-full"
        />
      </div>
      <div
        className={cn(
          "absolute flex flex-col gap-4 left-10 bottom-10 xl:left-96 max-w-screen-xl",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Banner;
