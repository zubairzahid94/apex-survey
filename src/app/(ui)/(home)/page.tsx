// @ts-nocheck 
import { PricingCard } from "@/components/PricingCard";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Reviews from "@/components/Reviews";
import ServiceProcedure from "@/components/ServiceProcedure";
import EmailNewsLetter from "@/components/EmailNewsLetter";

export default async function Home() {
  return (
    <div className="w-full flex flex-col gap-10">
      <Hero />
      <About />
      <Services />
      <section className="px-7 lg:px-11 flex flex-col gap-4 mb-4  max-w-screen-xl mx-auto">
        <div className="space-y-1">
          <p className="text-para">Services</p>
          <h3 className="text-h3">Prices of Services We Offer</h3>
        </div>
        <div className="flex flex-wrap flex-row gap-2">
          {Array.from({ length: 1 }).map((_, index) => (
            <PricingCard key={index} />
          ))}
        </div>
      </section>
      <Team />
      <Reviews />
      <ServiceProcedure />
      <EmailNewsLetter />
    </div>
  );
}
