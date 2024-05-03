"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const EmailNewsLetter = () => {
  const [email, setEmail] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Form submitted with email ${email}`);
    setEmail("");
  };

  return (
    <div className="px-7 lg:px-11 py-12 flex flex-col lg:flex-row items-center gap-8 bg-apex-blue w-[96%] mx-auto rounded-md mb-20">
      <div className="w-full lg:w-1/2 flex flex-col gap-2">
        <h5 className="text-btn text-white">
          Subscribe and Get More Information
        </h5>
        <p className="text-small text-white">
          Lorem ipsum dolor sit amet consectetur. Dapibus maecenas rutrum
          lobortis maecenas at. Eu nec eget habitant a at ut gravida auctor
          tellus. At donec purus justo blandit at et nisl.{" "}
        </p>
      </div>
      <form
        className="flex gap-2 flex-col lg:flex-row w-full lg:w-1/2 h-full items-center"
        onSubmit={handleSubmit}
      >
        <Input
          className="flex-1"
          name="email"
          placeholder="Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          className="text-white bg-apex-dark px-6 py-2 flex-[0.5] w-full lg:w-auto"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default EmailNewsLetter;
