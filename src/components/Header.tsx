import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contact US",
    path: "/contact-us",
  },
  {
    name: "FAQ",
    path: "/faqs",
  },
];

export const servicesDropdownLinks = [
  {
    name: "Electrical Maintenance/PPM",
    path: "/services/electrical-maintenance",
  },
  {
    name: "Energy Performance Certificate",
    path: "/services/energy-performance-certificate",
  },
  {
    name: "Gas Safety Certificate",
    path: "/services/gas-safety-certificate",
  },
  {
    name: "Fire Alarm Test Report",
    path: "/services/fire-alarm-test-report",
  },
  {
    name: "Electrical Installation Report",
    path: "/services/electrical-installation-report",
  },
  {
    name: "Building Survey Report",
    path: "/services/building-survey-report",
  },
  {
    name: "Fire Risk Assesment",
    path: "/services/fire-risk-assesment",
  },
];
const Header = () => {
  const contactLinks = [
    {
      web_link: "info@apexsurveyors.org.pk",
      web_text: "info@apexsurveyors.org.pk",
      web_iconPath: "/icons/web.svg",
    },
    {
      phone_link: "0800 048 7474",
      phone_text: "Call Us Free: +0800 048 7474",
      phone_iconPath: "/icons/phone.svg",
    },
  ];

  return (
    <header className="flex flex-col w-full sticky top-0">
      <div className="flex flex-col md:flex-row w-full items-center justify-between px-16 py-2 bg-apex-dark h-max">
        <Link href="/">
          <h4 className="text-h4 text-white">
            Apex<span className="text-apex-blue">Survey</span>
          </h4>
        </Link>
        <div className="flex md:flex-row flex-col items-center gap-x-8 gap-y-2 my-4">
          {contactLinks.map((link) => (
            <Link
              href={
                link.web_link
                  ? `mailto:${link.web_link}`
                  : `tel:+${link.phone_link}`
              }
              target="_blank"
              key={link.web_link || link.phone_link}
              className="flex flex-row items-center gap-4"
            >
              <Image
                src={link.web_iconPath || link.phone_iconPath || ""}
                alt={link.web_text || link.phone_text || ""}
                width={20}
                height={20}
              />
              <p className="text-para text-white">
                {link.web_text || link.phone_text}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <nav className="h-max bg-apex-grey-bluish flex flex-col md:flex-row items-center justify-between px-16 py-4 gap-4">
        <div className="flex gap-6 w-max items-center">
          {navLinks.map((link) => (
            <Link href={link.path} key={link.path}>
              <p className="text-para text-white">{link.name}</p>
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-row gap-2 items-center">
              <p className="text-para text-white">Our Services</p>
              <Image
                src={"/icons/chevron-down.svg"}
                alt={"Chevron Down"}
                width={12}
                height={12}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-sm min-w-80 flex gap-2 flex-col p-2">
              {servicesDropdownLinks.map((link) => (
                <Link href={link.path} key={link.path}>
                  <DropdownMenuItem className="hover:bg-apex-blue hover:text-white cursor-pointer">
                    {link.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex w-max gap-4 items-center">
          <Image src={"/icons/cart.svg"} alt={"Cart"} width={20} height={20} />
          <Button
            className="bg-apex-blue rounded-sm"
            size="sm"
            variant="secondary"
          >
            <p className="text-small font-bold text-white">Order Online</p>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
