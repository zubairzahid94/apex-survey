import Banner from "@/components/Banner";
import EmailNewsLetter from "@/components/EmailNewsLetter";
import ServiceProcedure from "@/components/ServiceProcedure";
import React from "react";
import FaqsAccordian from "./components/FaqsAccordian";

const Faqs = () => {
  return (
    <>
      <Banner image="/banner-image.png" className="gap-2">
        <p className="text-para text-white">Contact Us</p>
        <h5 className="text-h5 text-white">For Any Queries</h5>
      </Banner>
      <section className="flex flex-col gap-10 items-center lg:px-11 px-7 my-6">
        <div className="w-full md:w-1/2 space-y-2">
          <h5 className="text-h5 text-center">Frequently Asked Questions</h5>
          <p className="text-para text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            repellendus ipsam porro dolore illo quod, et, cumque doloremque,
            officia nostrum totam veritatis voluptatum consequuntur eos id fuga
            voluptates unde a.
          </p>
        </div>
        <FaqsAccordian />
        <ServiceProcedure />
        <EmailNewsLetter />
      </section>
    </>
  );
};

export default Faqs;
