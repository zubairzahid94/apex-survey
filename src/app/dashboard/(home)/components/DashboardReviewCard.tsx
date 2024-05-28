import { ReviewCard } from "@/components/Reviews";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const DashboardReviewCard = ({ className }: { className?: string }) => {
    return (
        <Card className={cn("p-0 shadow-none border-0", className)}>
            <CardHeader className="flex flex-row gap-4 p-1">
                <div className="size-14 flex items-center justify-center">
                    <Image
                        src={"/Review-card.png"}
                        alt="Review Card"
                        width={100}
                        height={100}
                        className="object-contain size-full"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h4 className="text-btn text-apex-blue">Glyden Hykens</h4>
                    <Image
                        src={"/icons/review-stars.svg"}
                        alt="Review Stars"
                        width={40}
                        height={40}
                        className="object-contain size-fit"
                    />
                </div>
            </CardHeader>
            <CardContent className="p-1">
                <p className="text-small text-apex-grey-dark">
                    “Lorem ipsum dolor sit amet consectetur. Iaculis in ut porttitor
                    vivamus et. Quis sem sit posuere egestas amet.
                </p>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2 items-center justify-between w-full p-1 pt-0">
                <p className="text-small self-start">
                    {new Date().toLocaleDateString()}
                </p>
                <div className="flex flex-row gap-2 items-center self-end">
                    <Image
                        src={"/icons/check-icon.svg"}
                        alt={"Check Icon"}
                        width={20}
                        height={20}
                        className=""
                    />
                    <p className="text-apex-grey-dark text-small">Verified</p>
                </div>
            </CardFooter>
        </Card>
    );
};

export default DashboardReviewCard;