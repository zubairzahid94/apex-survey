import { BuildingIcon, LucideMoreHorizontal } from "lucide-react";
import React from "react";
import ViewChart from "../components/charts/ViewChart";
import { Button } from "@/components/ui/button";
import RevenueChart from "../components/charts/RevenueChart";
import Link from "next/link";

import DashboardReviewCard from "./components/DashboardReviewCard";
import RadialProgress from "./components/RadialProgress";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 w-full px-4 min-h-[60vh] overflow-y-scroll">
      <h5 className="text-para">Welcome to Apex Survey Admin</h5>
      <section className="grid grid-cols-7 gap-4 h-max">
        <div className="grid grid-cols-1 grid-rows-2 col-span-3 gap-4">
          <div className="bg-apex-blue rounded-xl flex w-full items-center p-4 gap-4">
            <BuildingIcon className="size-20 text-white" />
            <div className="space-y-2 flex-1">
              <h5 className="text-btn text-white">
                Total Properties for Survey
              </h5>
              <div className="flex gap-2 items-center">
                <span className="bg-white rounded-md w-full h-2" />
                <h5 className="text-btn text-white">4567</h5>
              </div>
              <p className="text-small text-white">
                431 more to break last month record
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 row-span-5">
            <div className="bg-white flex items-center justify-between rounded-xl px-3 py-4">
              <div className="flex flex-col gap-3 flex-1">
                <h5 className="text-h5">2356</h5>
                <p className="text-para font-bold">Total Survey</p>
                <p className="text-para text-apex-grey-dark">Target 3k/month</p>
              </div>
              <RadialProgress value={71} max={100} color="blue-200" />
            </div>
            <div className="bg-white flex items-center justify-between rounded-xl px-3 py-4">
              <div className="flex flex-col gap-3 flex-1">
                <h5 className="text-h5">2356</h5>
                <p className="text-para font-bold">No of Booked Survey</p>
                <p className="text-para text-apex-grey-dark">Target 3k/month</p>
              </div>
              <RadialProgress value={71} max={100} color="green-200" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 col-span-4 rounded-xl flex flex-col gap-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col gap-2">
              <h5 className="text-h5">Total Revenue</h5>
              <h5 className="text-h5">$ 3,000</h5>
            </div>
            <Button className="bg-transparent hover:bg-transparent p-2">
              <LucideMoreHorizontal className="size-8 text-black" />
            </Button>
          </div>
          <RevenueChart />
        </div>
      </section>
      <section className="grid grid-cols-7 gap-4 h-max">
        <div className="bg-white p-4 col-span-4 rounded-xl flex flex-col gap-2">
          <div className="flex w-full items-center justify-between">
            <h5 className="text-btn">Our View</h5>
            <Button className="bg-transparent hover:bg-transparent p-2">
              <LucideMoreHorizontal className="size-8 text-black" />
            </Button>
          </div>
          <ViewChart />
        </div>
        <div className="bg-white flex flex-col gap-2 justify-between col-span-3 rounded-xl p-4">
          <div className="flex w-full items-center justify-between">
            <h5 className="text-btn">Customer Review</h5>
            <Button className="bg-transparent hover:bg-transparent p-2">
              <LucideMoreHorizontal className="size-8 text-black" />
            </Button>
          </div>
          <div className="flex flex-col gap-2 p-2 w-[85%] h-full justify-between">
            <DashboardReviewCard />
            <DashboardReviewCard />
          </div>
          <Link
            href={"#"}
            className="w-full text-center text-white bg-apex-blue p-2 rounded-xl"
          >
            See More Reviews
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;