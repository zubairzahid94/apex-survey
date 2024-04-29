"use client";

import React from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

const QuoteModal = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="w-1/2 text-center text-btn text-white bg-apex-blue hover:bg-apex-blue"
        >
          Quote Now
        </Button>
      </DialogTrigger>
    </Dialog>
  );
};

export default QuoteModal;
