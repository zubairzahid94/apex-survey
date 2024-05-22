import { Button } from "@/components/ui/button";
import React from "react";

const DashboardFooter = () => {
  return (
    <footer className="flex justify-between items-center w-full px-4 py-3">
      <p className="text-para font-semibold text-apex-grey-dark">
        &copy; 2024 Apex Survey - All Rights Reserved
      </p>
      <Button className="bg-white px-4 py-2 w-max text-para hover:bg-white">
        Software Latest Version
      </Button>
    </footer>
  );
};

export default DashboardFooter;
