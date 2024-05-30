// @ts-nocheck
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { dashboardQuotes } from "@/lib/constants";
import { BuildingIcon } from "lucide-react";
import Image from "next/image";

import React, { Suspense } from "react";
import DetailsTable from "../components/DetailsTable";
import { prisma } from "../../../../lib/db";
import Link from "next/link";
import LoadingBounce from "@/components/loading";
import { update } from "@/lib/action";

const Quotes = async () => {

  const checkouts = await prisma.checkout.findMany({
    include: {
      quote: {
        include: {
          services: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc"
    }

  });
  const handleRefresh = async () => {
    "use server"
    update(["/quotes"]);
  }

  const countCheckouts = checkouts.length.toString();
  const pendingCheckouts = checkouts.filter(checkout => checkout.status === 'Pending');
  const countPendingCheckouts = pendingCheckouts.length.toString();

  return (
    <div className="h-full overflow-y-scroll space-y-4 no-scrollbar pr-4">
      <Card className="flex-1 p-4 flex items-center justify-between gap-2 shadow-none">
        <div className="space-y-2">
          <h5 className="text-btn">Quotes</h5>
          <p className="text-para">Quotes List</p>
        </div>
        {/* <Link href={"/dashboard/quotes"}> */}
        <form>
          <input type="submit" formAction={handleRefresh} id="button" className="hidden" />
          <Button className="bg-gray-400 hover:bg-gray-400 px-8 py-2 text-btn text-black rounded-lg">
            Refresh
          </Button>
        </form>
        {/* </Link> */}

      </Card>

      <div className="flex gap-2">
        <div className="grid grid-cols-2 gap-2 w-full">
          <Card className="flex-1 flex items-center justify-between px-4 py-8 shadow-none">
            <div className="space-y-1">
              <p className="text-btn">{countCheckouts}</p>
              <p className="text-para">Total Customers</p>
            </div>
            <div className="flex items-center justify-center size-10 bg-apex-blue p-2">
              <Image
                src={"/icons/person-white.svg"}
                alt="person icon"
                width={50}
                height={50}
                className="size-full object-contain"
              />
            </div>
          </Card>
          <Card className="flex-1 flex items-center justify-between px-4 py-8 shadow-none">
            <div className="space-y-1">
              <p className="text-btn">{countPendingCheckouts}</p>
              <p className="text-para">Pending Checkouts</p>
            </div>
            <div className="flex items-center justify-center size-10 bg-apex-blue p-2">
              <Image
                src={"/icons/clipboard-white.svg"}
                alt="clipboard check icon"
                width={50}
                height={50}
                className="size-full object-contain"
              />
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <Card className="p-4 shadow-none flex items-center gap-2 bg-apex-blue">
            <BuildingIcon className="size-16 text-white" />
            <div>
              <h5 className="text-btn text-white">Information</h5>
              <p className="text-para text-white">
                This dashboard is auto-generated. All information is displayed
                accurately as entered. If you have any queries, contact the
                admin.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <Suspense fallback={<div><LoadingBounce /></div>}>
        <DetailsTable checkouts={checkouts} countCheckouts={countCheckouts} />
      </Suspense>
    </div>
  );
};

export default Quotes;
