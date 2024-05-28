//@ts-nocheck
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/db";
import { update } from "@/lib/action";

export async function PUT(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const { id } = params;
		const requestData = await req.json();
		const { status } = requestData;

		const updatedPricing = await prisma.pricing.update({
			where: { id },
			data: { status },
		});
		update(["/dashboard/pricing"]);
		update(["/"]);
		return NextResponse.json(updatedPricing);
	} catch (error) {
		console.error("Error updating status:", error);
		return new NextResponse("Internal server error", { status: 500 });
	}
}
