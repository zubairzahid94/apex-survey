import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full ">
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <Image
            alt="Empowering Your Property Journey"
            className="w-full h-full object-cover"
            height="1000"
            src="/Hero-Banner.png"
            width="1000"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative w-full md:w-3/4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 lg:py-20 md:flex-row flex-col-reverse">
            <div className="flex flex-col space-y-6 w-full md:w-1/2">
              <h3 className="text-h4 lg:text-h3 text-white">
                Empowering Your Property Journey with Insightful Surveys
              </h3>
              <h5 className="text-h5 text-white">
                From Only £79*
                <br />
              </h5>
              <p className="text-para text-white w-3/4">
                From residential dreams to commercial endeavors, we deliver
                precise assessments tailored to your needs.
              </p>
              <Button
                className="bg-apex-blue w-max px-10 py-2 text-btn text-white hover:bg-apex-blue"
                variant="default"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline-block bg-apex-grey-bluish relative md:absolute md:left-[40%] md:top-20 py-8 px-6 rounded-lg shadow-lg md:w-1/4">
          <h4 className="text-btn text-white mb-4">We provide</h4>
          <p className="text-para text-white mb-2">
            Accurate Survey <span className="float-right">93%</span>
          </p>
          <Progress
            className="w-full mb-4 bg-white text-apex-blue"
            value={93}
          />
          <p className="text-para text-white mb-2">
            Saving Your Time <span className="float-right">92%</span>
          </p>
          <Progress className="w-full  text-apex-blue" value={92} />
        </div>
        <div className="relative z-10 -bottom-10 md:absolute md:right-8 md:-bottom-24">
          <Image
            src={"/pngwing 1.png"}
            alt="Hero Image"
            width={1000}
            height={1000}
            quality={100}
            className="object-contain size-[70%] mx-auto lg:size-[90%]"
          />
          <div className="bg-apex-grey-bluish w-[90%] mx-auto lg:w-auto flex gap-8 items-center h-40 px-8">
            <div className="flex items-start gap-4 text-white">
              <Image
                src={"/icons/ribbon.svg"}
                alt="Ribbon"
                height={20}
                width={20}
              />
              <div className="space-y-1">
                <span className="text-h5">
                  25<sup>+</sup>
                </span>
                <p className="text-para">Years of Experience</p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-white">
              <Image
                src={"/icons/person.svg"}
                alt="Person"
                height={20}
                width={20}
              />
              <div className="space-y-1">
                <span className="text-h5">
                  2540<sup>+</sup>
                </span>
                <p className="text-para">Clients Satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-full h-max gap-4 lg:gap-12 items-end lg:items-center pt-14 pb-6 px-6 bg-apex-blue text-white">
        <div className="flex gap-4 w-full md:w-1/4">
          <Image
            src={"/icons/clipboard.svg"}
            alt="Clipboard"
            height={10}
            width={10}
            className="h-6 w-6 text-blue-400"
          />
          <div className="ml-4">
            <h4 className="text-btn">Accurate Survey</h4>
            <p className="text-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="flex gap-4 w-full md:w-1/4">
          <Image
            src={"/icons/ribbon.svg"}
            alt="Ribbon"
            height={10}
            width={10}
            className="h-6 w-6 text-blue-400"
          />
          <div className="ml-4">
            <h4 className="text-btn">Best Service</h4>
            <p className="text-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
