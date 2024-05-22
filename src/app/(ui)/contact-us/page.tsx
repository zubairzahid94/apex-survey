import Banner from "@/components/Banner";
import Image from "next/image";
import React from "react";
import { ProblemForm } from "./components/ProblemForm";

import { contactInformation } from "@/lib/constants";

const ContactUs = () => {
  return (
    <>
      <Banner image="/banner-image.png" className="gap-2">
        <p className="text-para text-white">Contact Us</p>
        <h5 className="text-h5 text-white">For Any Queries</h5>
      </Banner>
      <section className="flex flex-col gap-5 lg:gap-0 lg:flex-row items-center mx-9 lg:mx-11 mt-10 mb-20 max-w-screen-xl xl:mx-auto">
        <div className="w-full h-full lg:min-h-[520px] lg:w-1/2 bg-apex-blue px-8 py-10 flex flex-col items-center justify-center gap-4 rounded-xl lg:rounded-l-xl lg:rounded-r-none shadow-lg">
          <h4 className="text-h4 text-white">Contact Us</h4>
          <div className="flex flex-col gap-4 w-full md:w-max">
            {contactInformation.map((info, index) => (
              <div
                key={index}
                className="flex text-white flex-col gap-2 border-b border-b-white py-2"
              >
                <p className="text-btn text-white">{info.type}</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={info.icon}
                    alt={info.type}
                    width={14}
                    height={14}
                    style={{ color: "white" }}
                    className="object-contain size-fit text-white"
                  />
                  <p className="text-small text-white">{info.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:min-h-[520px] lg:w-1/2 p-10 flex items-center justify-center rounded-xl lg:rounded-r-xl lg:rounded-l-none border border-b border-t-0 lg:border-r lg:border-l-0 border-gray-50 shadow-lg h-full p-auto">
          <ProblemForm />
        </div>
      </section>
    </>
  );
};

export default ContactUs;
