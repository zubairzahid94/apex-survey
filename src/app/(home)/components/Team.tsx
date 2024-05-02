import Image from "next/image";
import React from "react";

const teamCards = [
  {
    image: "/Team-member-1.png",
    name: "Andy Cambell",
    position: "Senior Software Engineer",
  },
  {
    image: "/Team-member-2.png",
    name: "Andy Cambell",
    position: "Senior Software Engineer",
  },
  {
    image: "/Team-member-3.png",
    name: "Andy Cambell",
    position: "Senior Software Engineer",
  },
  {
    image: "/Team-member-4.png",
    name: "Andy Cambell",
    position: "Senior Software Engineer",
  },
  {
    image: "/Team-member-5.png",
    name: "Andy Cambell",
    position: "Senior Software Engineer",
  },
];

const Team = () => {
  return (
    <section className="px-6 flex flex-col gap-6">
      <div className="space-y-2 w-full md:w-1/2">
        <h3 className="text-h3">Meat the Team</h3>
        <p className="text-small font-medium">
          We are a team of building physicists and engineers, software
          developers, surveyors and business management specialists and for
          nearly 40 years we have been Making Buildings Better.
        </p>
      </div>
      <div className="flex flex-col flex-wrap justify-between md:flex-row gap-3 w-full">
        {teamCards.map((member, index) => (
          <article
            key={index}
            className="flex flex-col items-center gap-4 w-full md:w-[220px]"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={1000}
              height={1000}
              quality={100}
              className="object-cover size-full"
            />
            <div className="flex flex-col items-center w-max gap-2">
              <h5 className="text-btn">{member.name}</h5>
              <p className="text-small font-medium">{member.position}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;
