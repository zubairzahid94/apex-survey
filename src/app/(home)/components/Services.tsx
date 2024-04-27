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
    <section className="px-6 flex flex-col gap-4 mb-20">
      <div className="space-y-1">
        <p className="text-para">Popular Services</p>
        <h3 className="text-h3">What Services We Offer</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-20 md:gap-2">
        {serviceCards.map((card, index) => (
          <article
            key={index}
            className="flex flex-col items-center gap-4 relative flex-nowrap w-full md:w-[25%]"
          >
            <div className="flex items-center justify-center w-full">
              <Image
                src={card.image}
                alt={card.title}
                width={200}
                height={200}
                className="object-cover size-full"
              />
            </div>
            <div className="bg-black p-4 pb-5 absolute -bottom-20 w-[90%] mx-auto min-h-36 flex flex-col items-center gap-2">
              <h5 className="text-btn text-center text-white">{card.title}</h5>
              <p className="text-small text-white">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
