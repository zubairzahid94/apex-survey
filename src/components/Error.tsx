import { cn } from "@/lib/utils";
import type React from "react";

type ErrorProps = {
  message: string;
  icon?: React.ReactNode;
  className?: string;
};

const Error = ({ message, icon, className }: ErrorProps) => {
  return (
    <div className={cn("flex flex-row gap-4 items-center", className)}>
      {icon}
      <p className="text-para text-red-500">{message}</p>
    </div>
  );
};

export default Error;
