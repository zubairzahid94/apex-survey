import { PricingCard } from "@/components/PricingCard";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Reviews from "@/components/Reviews";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ServiceProcedure from "@/components/ServiceProcedure";

export default async function Home() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero />
      <About />
      <Services />
      <section className="px-6 flex flex-col gap-4 mb-4">
        <div className="space-y-1">
          <p className="text-para">Pricing</p>
          <h3 className="text-h3">Prices of Services We Offer</h3>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <PricingCard key={index} />
          ))}
        </div>
      </section>
      <Team />
      <Reviews />
      <ServiceProcedure />
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
    </div>
  );
}
