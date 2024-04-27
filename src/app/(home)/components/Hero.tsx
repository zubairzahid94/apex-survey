import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <Image
            alt="Empowering Your Property Journey"
            className="w-full h-full object-cover"
            height="718"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1299/718",
              objectFit: "cover",
            }}
            width="1299"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative w-3/4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-24 md:flex-row flex-col-reverse">
            <div className="flex flex-col space-y-6 md:w-1/2">
              <h3 className="text-h3 text-white">
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
      </div>

      <div className="flex w-full h-max gap-12 items-center py-14 px-6 bg-apex-blue text-white">
        <div className="flex gap-4 w-1/4">
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
        <div className="flex gap-4 w-1/4">
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

      <div className="absolute right-8 bottom-24">
        <Image
          src={"/pngwing 1.png"}
          alt="Hero Image"
          width={100}
          height={100}
          className="object-contain size-[90%]"
        />
        <div className="bg-apex-grey-bluish flex gap-8 items-center h-40 px-8">
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
      <div className="bg-apex-grey-bluish absolute left-[40%] top-20 py-8 px-6 rounded-lg shadow-lg md:w-1/4">
        <h4 className="text-btn text-white mb-4">We provide</h4>
        <p className="text-para text-white mb-2">
          Accurate Survey <span className="float-right">93%</span>
        </p>
        <Progress className="w-full mb-4 bg-white text-apex-blue" value={93} />
        <p className="text-para text-white mb-2">
          Saving Your Time <span className="float-right">92%</span>
        </p>
        <Progress className="w-full  text-apex-blue" value={92} />
      </div>
    </section>
  );
}
