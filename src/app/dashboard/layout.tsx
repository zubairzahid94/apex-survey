import type React from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import DashboardFooter from "./components/DashboardFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Apex Survey",
};

const DashboardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-row gap-4 bg-blue-200/50 overflow-y-hidden">
      <Sidebar />
      <div className="w-full flex flex-col gap-4 h-screen">
        <DashboardHeader />
        {children}
        <DashboardFooter />
      </div>
    </div>
  );
};

export default DashboardLayout;
