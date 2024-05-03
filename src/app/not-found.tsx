import { SearchX } from "lucide-react";
import React from "react";

export const metadata = {
  title: "Apex Survey - Not Found",
};

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <SearchX className="size-32" />
      <h3 className="text-h3 text-center">Page not Found</h3>
    </div>
  );
};

export default NotFound;
