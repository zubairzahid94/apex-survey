import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const EmailNewsLetter = () => {
  return (
    <div className="px-6 py-12 flex flex-col md:flex-row items-center gap-8 bg-apex-blue w-[96%] mx-auto rounded-md mb-20">
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <h5 className="text-btn text-white">
          Subscribe and Get More Information
        </h5>
        <p className="text-small text-white">
          Lorem ipsum dolor sit amet consectetur. Dapibus maecenas rutrum
          lobortis maecenas at. Eu nec eget habitant a at ut gravida auctor
          tellus. At donec purus justo blandit at et nisl.{" "}
        </p>
      </div>
      <form className="flex gap-2 w-full md:w-1/2 h-full items-center ">
        <Input
          className="flex-1"
          name="email"
          placeholder="Your Email"
          type="email"
        />
        <Button
          type="submit"
          className="text-white bg-apex-dark px-6 py-2 flex-[0.5]"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default EmailNewsLetter;
