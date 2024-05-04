import Image from "next/image";
import Link from "next/link";
import { usefulLinks, socialLinks, footerNavLinks } from "@/lib/constants";

export default function Footer() {
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
        <div className="flex flex-1 lg:flex-row flex-col justify-between lg:justify-evenly gap-10">
          <div className="flex flex-row gap-4 justify-between">
            <nav className="flex flex-col gap-6 flex-1 lg:flex-auto">
              <h5 className="text-btn text-white">Quick Links</h5>
              <div className="flex flex-col gap-4">
                {footerNavLinks.map((link) => (
                  <Link href={link.path} key={link.path}>
                    <p className="text-para text-white">{link.name}</p>
                  </Link>
                ))}
              </div>
            </nav>
            <nav className="flex flex-col gap-6 flex-1 lg:flex-auto">
              <h5 className="text-btn text-white">Useful Links</h5>
              <div className="flex flex-col gap-4">
                {usefulLinks.map((link) => (
                  <Link href={link.path} key={link.path}>
                    <p className="text-para text-white lg:w-fit">{link.name}</p>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <nav className="flex flex-col gap-6 w-full lg:w-1/3">
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
      <div className="flex w-full flex-col lg:flex-row items-center justify-between lg:justify-end gap-6 lg:gap-64">
        <p className="text-small text-center md:text-start order-last lg:order-first md:text-para lg:text-btn text-white">
          Copyright © 2024 ApexSurvey. All Rights Reserved.
        </p>
        <div className="flex lg:hidden flex-col gap-4 items-center">
          <div className="flex items-center gap-4">
            <Image
              src={"/icons/web.svg"}
              alt={"Web"}
              width={12}
              height={12}
              className="object-contain size-fit text-white"
            />
            <p className="text-para text-white">info@apexsurvey.org.pk</p>
          </div>
          <div className="flex items-center gap-4">
            <Image
              src={"/icons/phone.svg"}
              alt={"Phone"}
              width={12}
              height={12}
              className="object-contain size-fit text-white"
            />
            <p className="text-para text-white">Call Us Free:0800 048 7474</p>
          </div>
        </div>
        <div className="w-max flex gap-4 items-center self-center md:self-auto order-first lg:order-last">
          {socialLinks.map((link) => (
            <Link href={link.path} key={link.name}>
              <Image
                src={link.iconPath}
                alt={link.name}
                width={18}
                height={18}
                style={{ color: "white" }}
                className="object-contain size-fit text-white"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
