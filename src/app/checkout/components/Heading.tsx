import { cn } from "@/lib/utils";
import React from "react";

type HeadingProps = {
  primaryHeading: string;
  secondaryHeading?: string;
  className?: string;
};

const Heading = ({
  primaryHeading,
  secondaryHeading,
  className,
}: HeadingProps) => {
  return (
    <div
      className={cn(
        "px-4 py-2 flex flex-row items-center w-full justify-between bg-apex-blue",
        className
      )}
    >
      <p className="text-para font-bold text-white">{primaryHeading}</p>
      {secondaryHeading && (
        <p className="text-para font-bold text-white">{secondaryHeading}</p>
      )}
    </div>
  );
};

export default Heading;
