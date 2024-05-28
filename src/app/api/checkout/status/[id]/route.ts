//@ts-nocheck
import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/db";
import { update } from "@/lib/action";
import { revalidatePath } from "next/cache";

export async function PUT(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const { id } = params;
		const requestData = await req.json();
		const { status } = requestData;

		const updatedStatus = await prisma.checkout.update({
			where: { id },
			data: { status },
		});
		update(["/dashboard/quotes"]);
		return NextResponse.json(updatedStatus);
	} catch (error) {
		console.error("Error updating status:", error);
		return new NextResponse("Internal server error", { status: 500 });
	}
}
