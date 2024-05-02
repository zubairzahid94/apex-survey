import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";
import { ProblemForm } from "./components/ProblemForm";

const contactInformation = [
  {
    type: "Client Support",
    icon: "/icons/phone.svg",
    details: "123-456-7890",
  },
  {
    type: "Email",
    icon: "/icons/mail.svg",
    details: "XsDfA@example.com",
  },
  {
    type: "Main Office",
    icon: "/icons/mail.svg",
    details: "123 Street, City, State, Zip",
  },
];

const ContactUs = () => {
  return (
    <>
      <Banner image="/banner-image.png" className="gap-2">
        <p className="text-para text-white">Contact Us</p>
        <h5 className="text-h5 text-white">For Any Queries</h5>
      </Banner>
      <section className="flex flex-col md:flex-row items-center m-10 min-h-screen">
        <div className="w-full h-full md:w-1/2 bg-apex-blue px-5 py-10 flex flex-col items-center justify-center gap-4 rounded-t-xl rounded-b-none md:rounded-l-xl md:rounded-r-none shadow-lg">
          <h4 className="text-h4 text-white">Contact Us</h4>
          <div className="flex flex-col gap-4 w-full md:w-max">
            {contactInformation.map((info, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 border-b border-b-white py-2"
              >
                <p className="text-btn text-white">{info.type}</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={info.icon}
                    alt={info.type}
                    width={14}
                    height={14}
                    className="object-contain size-fit text-white"
                  />
                  <p className="text-small text-white">{info.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-10 flex items-center justify-center rounded-b-xl rounded-t-none md:rounded-r-xl md:rounded-l-none border border-b border-t-0 md:border-r md:border-l-0 border-gray-50 shadow-lg h-full">
          <ProblemForm />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
