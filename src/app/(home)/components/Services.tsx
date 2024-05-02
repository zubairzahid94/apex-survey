import Image from "next/image";
import React from "react";

const serviceCards = [
  {
    image: "/Services-1.png",
    title: "Survey Construction",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates",
  },
  {
    image: "/Services-2.png",
    title: "Digital Mapping",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates",
  },
  {
    image: "/Services-3.png",
    title: "Engineering Support",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates",
  },
  {
    image: "/Services-4.png",
    title: "Road Survey",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores voluptates",
  },
];

const Services = () => {
  return (
    <section className="px-6 flex flex-col gap-4 mb-auto lg:mb-20">
      <div className="space-y-1">
        <p className="text-para">Popular Services</p>
        <h3 className="text-h4 lg:text-h3">What Services We Offer</h3>
      </div>
      <div className="flex flex-row flex-wrap gap-2 justify-between">
        {serviceCards.map((card, index) => (
          <article
            key={index}
            className="flex flex-col items-center relative gap-4 mb-20 lg:mb-auto justify-center lg:justify-between flex-nowrap w-[48%] lg:w-[24%]"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={card.image}
                alt={card.title}
                width={1000}
                height={1000}
                className="object-cover size-full"
              />
            </div>
            <div className="bg-black p-2 lg:p-4 lg:pb-5 absolute -bottom-10 lg:-bottom-20 w-[90%] mx-auto h-max lg:min-h-36 flex flex-col items-center gap-2">
              <h5 className="text-small truncate font-semibold lg:text-btn text-center text-white">
                {card.title}
              </h5>
              <p className="text-caption lg:text-small text-white">
                {card.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
