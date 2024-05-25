import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Image from "next/image";
import { prisma } from "../../lib/db";

export async function PricingCard() {
  const pricing = await prisma.pricing.findMany({});

  // Determine the width of each card based on the number of cards
  let cardWidth;
  if (pricing.length === 1) {
    cardWidth = "full";
  } else if (pricing.length === 2) {
    cardWidth = "w-[48%]";
  } else if (pricing.length === 3) {
    cardWidth = "w-[32%]";
  } else if (pricing.length >= 4) {
    cardWidth = "w-[24%]";
  }

  return (
    <>
      {pricing.map((pricingItem, index) => (
        <Card key={index} className={`w-full xs:${cardWidth} lg:${cardWidth} h-auto p-3 mx-auto lg:border-apex-grey-dark lg:border-t-apex-grey-light lg:border-t-[24px] rounded-xl lg:float-left lg:clear-left ${index >= 4 && "mt-5 lg:mt-0"}`}>
          <CardHeader className="text-center lg:border-t-apex-dark !p-0">
            <h3 className="text-2xl font-bold">{pricingItem.serviceName}</h3>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <sup className="text-xs font-bold">$</sup>
              <span className="text-h4">{pricingItem.pricing}</span>
            </div>
            <div className="space-y-3">
              {pricingItem.surveyType.map((perk, index) => (
                <div className="flex items-center gap-3" key={index}>
                  <Image
                    src={"/icons/check-icon.svg"}
                    alt="CheckIcon"
                    width={10}
                    height={10}
                    className="h-5 w-5 text-green-500"
                  />
                  <span className="text-small text-apex-grey-dark">{perk}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
