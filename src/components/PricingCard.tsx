import { CardHeader, CardContent, Card } from "@/components/ui/card";
import Image from "next/image";

const perks = [
  "Survey Construction report",
  "Digital Mapping Report",
  "Engineering Support Report",
  "Survey Construction Report",
  "Digital Mapping Report",
  "Survey Construction report",
];

export function PricingCard() {
  return (
    <Card className="w-80 h-auto px-6 mx-auto border-apex-grey-dark border-t-apex-grey-light border-t-[24px] rounded-xl">
      <CardHeader className="text-center border-t-apex-dark">
        <h3 className="text-2xl font-bold">Starter Plan</h3>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="text-center">
          <span className="text-5xl font-bold">$19</span>
          <span className="text-gray-500 dark:text-gray-400">/month</span>
        </div>
        <div className="space-y-3">
          {perks.map((perk, index) => (
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
  );
}
