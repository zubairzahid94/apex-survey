import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

const Customers = () => {
  return (
    <div className="h-full overflow-y-scroll space-y-4 no-scrollbar pr-4">
      <Card className="flex-1 p-4 flex items-center justify-between gap-2 shadow-none">
        <div className="space-y-2">
          <h5 className="text-btn">Customers</h5>
          <p className="text-para">Customers List</p>
        </div>
        <Button className="bg-gray-400 hover:bg-gray-400 px-8 py-2 text-btn text-black rounded-lg">
          Refresh
        </Button>
      </Card>
    </div>
  );
};

export default Customers;
