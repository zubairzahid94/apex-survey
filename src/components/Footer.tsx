import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./Header";

export default function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      path: "https://www.facebook.com/",
      iconPath: "/icons/facebook.svg",
    },
    {
      name: "Mail",
      path: "https://twitter.com/",
      iconPath: "/icons/mail.svg",
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/",
      iconPath: "/icons/instagram.svg",
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/",
      iconPath: "/icons/linkedin.svg",
    },
  ];

  const footerNavLinks = [
    ...navLinks,
    {
      name: "Our Services",
      path: "/our-services",
    },
  ];

  const usefulLinks = [
    {
      name: "How it Works",
      path: "/how-it-works",
    },
    {
      name: "Who need Electrical Installation Report",
      path: "/electrical-installation-report",
    },
    {
      name: "Who need Energy Performance Certificate",
      path: "/energy-performance-certificate",
    },
    {
      name: "Terms and Conditions",
      path: "/terms-and-conditions",
    },
  ];

  return (
    <footer className="bg-apex-dark flex flex-col gap-12 w-full px-8 py-3 md:px-16 md:py-6">
      <div className="flex flex-col lg:flex-row justify-between gap-y-6">
        <div className="flex flex-col gap-4 w-full lg:w-min">
          <Link href="/">
            <h4 className="text-h4 text-white">
              Apex<span className="text-apex-blue">Survey</span>
            </h4>
          </Link>
          <p className="text-para text-white">
            Lorem ipsum dolor sit amet consectetur. Dui viverra nullam mauris
            enim tincidunt amet et quam. Sit nunc natoque vitae magnis quis sit
            vulputate diam. Pellentesque urna ullamcorper at vulputate leo dui
            id.{" "}
          </p>
        </div>
        <div className="flex flex-1 md:flex-row flex-col justify-between lg:justify-evenly gap-10">
          <nav className="flex flex-col gap-6 md:items-center">
            <h5 className="text-btn text-white">Quick Links</h5>
            <div className="flex flex-col gap-4">
              {footerNavLinks.map((link) => (
                <Link href={link.path} key={link.path}>
                  <p className="text-para text-white">{link.name}</p>
                </Link>
              ))}
            </div>
          </nav>
          <nav className="flex flex-col gap-6">
            <h5 className="text-btn text-white">Useful Links</h5>
            <div className="flex flex-col gap-4">
              {usefulLinks.map((link) => (
                <Link href={link.path} key={link.path}>
                  <p className="text-para text-white lg:w-fit">
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>
          </nav>
          <nav className="flex flex-col gap-6 w-full md:w-1/3">
            <div className="flex flex-col gap-6">
              <h5 className="text-btn text-white">Make an Appointment</h5>
              <p className="text-para text-white w-fit">
                Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                eiusmod tempor incididunt labor
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-apex-blue p-3 h-max self-start rounded-sm">
                <Image
                  src={"/icons/phone.svg"}
                  alt={"Phone"}
                  width={20}
                  height={20}
                />
              </div>
              <Link href={`tel:+0800 048 7474`}>
                <h4 className="text-h4 text-white">Call Us Today</h4>
                <p className="text-white text-para">0800 048 7474</p>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row items-center md:justify-between lg:justify-end gap-6 lg:gap-64">
        <p className="text-small text-center md:text-start md:text-para lg:text-btn text-white">
          Copyright © 2024 ApexSurvey. All Rights Reserved.
        </p>
        <div className="w-max flex gap-4 items-center self-center md:self-auto">
          {socialLinks.map((link) => (
            <Link href={link.path} key={link.name}>
              <Image
                src={link.iconPath}
                alt={link.name}
                width={12}
                height={12}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
