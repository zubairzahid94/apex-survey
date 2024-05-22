import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-80 bg-white">
      <div className=" p-4">
        <Link href="/">
          <h4 className="text-btn text-black">
            Apex<span className="text-apex-blue">Survey</span>
          </h4>
        </Link>
      </div>
      <nav className="flex-1 py-2 pl-4">
        <NavLinks />
      </nav>
      <div className="mt-auto p-4">
        <Button className="w-full bg-blue-500 text-white">Logout</Button>
      </div>
    </div>
  );
};

export default Sidebar;
