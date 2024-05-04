"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "Is it accessible?",
    answer: (
      <div className="w-full flex flex-col gap-2">
        <h6 className="text-btn text-apex-blue">
          What type of surveying services do you offer?
        </h6>
        <p className="text-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit
          voluptates reiciendis.
        </p>
      </div>
    ),
  },
  {
    question: "What is the process?",
    answer: (
      <div className="w-full flex flex-col gap-2">
        <h6 className="text-btn text-apex-blue">
          What type of surveying services do you offer?
        </h6>
        <p className="text-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit
          voluptates reiciendis.
        </p>
      </div>
    ),
  },
  {
    question: "Do you have a team?",
    answer: (
      <div className="w-full flex flex-col gap-2">
        <h6 className="text-btn text-apex-blue">
          What type of surveying services do you offer?
        </h6>
        <p className="text-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit
          voluptates reiciendis.
        </p>
      </div>
    ),
  },
  {
    question: "Can I request Additional Services?",
    answer: (
      <div className="w-full flex flex-col gap-2">
        <h6 className="text-btn text-apex-blue">
          What type of surveying services do you offer?
        </h6>
        <p className="text-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sit
          voluptates reiciendis.
        </p>
      </div>
    ),
  },
];

const FaqsAccordian = () => {
  const [activeFaqs, setActiveFaqs] = React.useState(["item-1"]);

  const handleChangeInFaqs = (value: string[]) => {
    setActiveFaqs(value);
  };

  return (
    <Accordion
      type="multiple"
      defaultValue={["item-1"]}
      value={activeFaqs}
      onValueChange={handleChangeInFaqs}
      className="w-full lg:shadow-md lg:rounded-xl lg:p-6 lg:border lg:border-gray-200 lg:px-11 px-7"
    >
      {faqs.map((faq, index) => (
        <AccordionItem value={`item-${index + 1}`} key={index}>
          <AccordionTrigger>
            <h5 className="text-btn text-start">{faq.question}</h5>
            {!activeFaqs.find((faq) => faq === `item-${index + 1}`) ? (
              <PlusCircleIcon className="size-6 shrink-0 transition-transform duration-200" />
            ) : (
              <MinusCircleIcon className="size-6 shrink-0 text-apex-blue transition-transform duration-200" />
            )}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqsAccordian;
