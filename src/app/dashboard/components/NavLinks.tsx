"use client";

import Link from "next/link";
import React from "react";
import { dashboardLinks } from "@/lib/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-2 items-center">
      {dashboardLinks.map((link) => (
        <li className="mb-2 w-full" key={link.name}>
          <Link
            href={link.href}
            className={cn(
              "flex items-center gap-3 p-2 hover:bg-blue-200/50 rounded rounded-r-none transition-colors",
              pathname === link.href && "bg-blue-200/50"
            )}
          >
            <Image
              src={link.icon}
              alt={link.name}
              width={16}
              height={16}
              color="black"
              className="text-black"
            />
            <p className="text-para font-semibold">{link.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
