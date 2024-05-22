import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const DashboardHeader = () => {
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 rounded-b-xl bg-white sticky top-0">
      <h3 className="text-btn text-black">Dashboard</h3>
      <div className="flex items-center gap-1">
        <Button className="bg-transparent hover:bg-transparent rounded-full w-fit px-3 py-2">
          <Image
            src={"/icons/mail.svg"}
            alt="mail icon"
            width={16}
            height={16}
          />
        </Button>
        <Button className="bg-transparent hover:bg-transparent rounded-full px-3 py-2">
          <Image
            src={"/icons/bell.svg"}
            alt="bell icon"
            width={16}
            height={16}
          />
        </Button>
        <Button className="relative bg-transparent w-12 h-auto p-0 hover:bg-transparent rounded-full">
          <span className="absolute top-2 left-2 bg-green-500 rounded-full size-2"></span>
          <Image
            src={"/dashboard/active-user-avatar.png"}
            alt="avatar"
            width={100}
            height={100}
            className="size-full object-cover rounded-full"
          />
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;
