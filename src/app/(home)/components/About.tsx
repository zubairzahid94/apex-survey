import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="px-6 flex flex-col md:justify-between md:flex-row gap-4 my-10">
      <div className="w-full md:w-[45%] flex items-center justify-center">
        <Image
          src={"/About-us-image.png"}
          alt={"About Us Image"}
          width={1000}
          height={1000}
          quality={100}
          className={"object-cover size-full"}
        />
      </div>
      <div className="w-full md:w-[45%] flex flex-col gap-8">
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-para text-apex-blue">ABOUT APEX SURVEY</p>
            <h4 className="text-h4">
              We offer top-tier land surveying and digital mapping services
            </h4>
            <p className="text-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              dolor similique doloremque?
            </p>
          </div>
          <ul className="flex flex-row gap-4 justify-between">
            <li className="flex flex-row gap-2">
              <Image
                src={"/icons/check-icon.svg"}
                alt={"Check Icon"}
                width={20}
                height={20}
                className="size-fit object-contain"
              />
              <div className="flex flex-col gap-2">
                <h5 className="text-btn">Best Quality Service</h5>
                <p className="text-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  velit.
                </p>
              </div>
            </li>
            <li className="flex flex-row gap-2">
              <Image
                src={"/icons/check-icon.svg"}
                alt={"Check Icon"}
                width={20}
                height={20}
                className="size-fit object-contain"
              />
              <div className="flex flex-col gap-2">
                <h5 className="text-btn">Affordable Prices</h5>
                <p className="text-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  velit.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-sm flex flex-col justify-center bg-gray-200 px-8 py-4 relative border-l-4 border-l-apex-blue min-h-32 w-full md:w-auto">
          <div className="w-3/4 flex flex-col gap-1">
            <p className="text-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              nobis?
            </p>
            <h5 className="text-btn">Zander Jones - Apex Survey</h5>
          </div>
          <div className="flex items-center justify-center size-10 absolute bottom-6 right-6">
            <Image
              src={"/icons/quote.svg"}
              alt="Quote"
              width={40}
              height={40}
              className="size-fit object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
