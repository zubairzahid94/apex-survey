"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export type CounterProps = {
  value: string;
  onChange: (value: number) => void;
  className?: string;
};

const Counter = ({ value, onChange, className }: CounterProps) => {
  const numberValue = Number(value);
  return (
    <div
      className={cn(
        "px-4 py-2 h-10 flex items-center gap-3 border border-apex-grey-light rounded-full",
        className
      )}
    >
      <Button
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.preventDefault();
          onChange(numberValue > 1 ? numberValue - 1 : numberValue);
        }}
        className="text-2xl size-3 p-1"
      >
        -
      </Button>
      <p className="text-para font-bold">{numberValue}</p>
      <Button
        variant="ghost"
        size="sm"
        onClick={(e) => {
          e.preventDefault();
          onChange(numberValue + 1);
        }}
        className="text-2xl size-3 p-1"
      >
        +
      </Button>
    </div>
  );
};

export default Counter;
