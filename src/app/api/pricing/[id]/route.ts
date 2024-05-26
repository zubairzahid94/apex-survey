import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/db";

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

		return NextResponse.json(updatedPricing);
	} catch (error) {
		console.error("Error updating status:", error);
		return new NextResponse("Internal server error", { status: 500 });
	}
}
