import Banner from "@/components/Banner";
import Link from "next/link";
import React from "react";

const termsAndConditions = [
  {
    title: "Scope of Work:",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam, quae totam tempore quibusdam minus vitae dolorem. Tempora, illo dolorem.",
  },
  {
    title: "Client Responsibilities:",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam, quae totam tempore quibusdam minus vitae dolorem. Tempora, illo dolorem.",
  },
  {
    title: "Contract Duration:",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam, quae totam tempore quibusdam minus vitae dolorem. Tempora, illo dolorem.",
  },
  {
    title: "Payment:",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    title: "Warranty:",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    title: "Liability:",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    title: "Disclaimer:",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam numquam, quae totam tempore quibusdam minus vitae dolorem. Tempora, illo dolorem.",
  },
];

const TermsAndConditions = () => {
  return (
    <>
      <Banner image="/banner-image.png" className="gap-2">
        <Link href="/">
          <p className="text-para text-white">/home</p>
        </Link>
        <h5 className="text-h5 text-white">Terms & Conditions</h5>
      </Banner>
      <section className="flex flex-col gap-10 items-center px-6 my-10 w-full md:w-9/12 mx-auto">
        <div className="w-full md:w-1/2 space-y-2">
          <h5 className="text-btn text-center">Terms and Conditions</h5>
          <p className="text-para text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            repellendus ipsam porro dolore illo quod, et, cumque doloremque,
            officia nostrum totam veritatis voluptatum consequuntur eos id fuga
            voluptates unde a.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {termsAndConditions.map((term, index) => (
            <div key={index} className="space-y-2">
              <h5 className="text-h5">{term.title}</h5>
              <p className="text-para">{term.description}</p>
            </div>
          ))}
        </div>
        <p className="text-para text-center">
          By signing up you agree to our terms and conditions.
        </p>
      </section>
    </>
  );
};

export default TermsAndConditions;
