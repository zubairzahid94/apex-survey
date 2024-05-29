//@ts-nocheck
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/db";
import { update } from "@/lib/action";

export async function PUT(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const data = await req.json();

		const updatePricing = await prisma.pricing.update({
			where: {
				id: params.id,
			},
			data: {
				...data,
			},
		});
		update(["/dashboard/pricing"]);
		update(["/"]);
		return NextResponse.json(updatePricing);
	} catch (error) {
		console.log("Pricing Update", error);
		return new NextResponse("Internal server error", { status: 500 });
	}
}
