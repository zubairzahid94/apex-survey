//@ts-nocheck
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";
import { update } from "@/lib/action";

export async function POST(req: Request) {
	try {
		const data = await req.json();

		const pricing = await prisma.pricing.create({
			data: {
				...data,
			},
		});
		update(["/dashboard/pricing"]);
		update(["/"]);
		return NextResponse.json(pricing);
	} catch (error) {
		console.log("Order", error);
		return new NextResponse("Internal server error", { status: 500 });
	}
}
