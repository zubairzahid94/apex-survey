"use client";

import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ChevronUp } from "lucide-react";

type MoblileNavbarMenuProps = {
  navLinks: {
    name: string;
    path: string;
  }[];
  serviceDropdownLinks: {
    name: string;
    path: string;
  }[];
};

const MobileNavbarMenu = ({
  navLinks,
  serviceDropdownLinks,
}: MoblileNavbarMenuProps) => {
  const [activeServiceLink, setActiveServiceLink] = React.useState<string[]>(
    []
  );

  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          className="bg-transparent inline-block lg:hidden items-center justify-center active:bg-transparent hover:bg-transparent"
          size="icon"
        >
          <Image
            src={"/icons/hamburger.svg"}
            alt="Hamburger"
            width={20}
            height={20}
            className="object-cover size-1/2"
          />
        </Button>
      </SheetTrigger>
      <SheetContent className="!p-0 !w-full">
        <SheetHeader>
          <div className="flex flex-row w-full items-center justify-between px-4 lg:px-16 py-2 bg-apex-dark h-max">
            <Link href="/">
              <h4 className="text-h4 text-white">
                Apex<span className="text-apex-blue">Survey</span>
              </h4>
            </Link>
          </div>
        </SheetHeader>
        <div className="flex flex-col w-full h-max gap-8 px-14 py-8">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              onClick={() => setOpen(false)}
            >
              <p className="text-btn font-normal text-black">
                {link.name.toUpperCase()}
              </p>
            </Link>
          ))}
          <Accordion
            type="multiple"
            value={activeServiceLink}
            onValueChange={(value) => setActiveServiceLink(value)}
          >
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="my-0 py-0 flex gap-3 items-center justify-start">
                <ChevronUp className="size-6" />
                <p className="text-btn font-normal text-black">Our Services</p>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 my-6 ml-10">
                  {serviceDropdownLinks.map((link) => (
                    <Link
                      href={link.path}
                      key={link.path}
                      onClick={() => setOpen(false)}
                    >
                      <p className="text-para font-normal text-black">
                        {link.name.toUpperCase()}
                      </p>
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbarMenu;
