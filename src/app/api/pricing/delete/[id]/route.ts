import { NextResponse } from "next/server";
import { prisma } from "../../../../../../lib/db";

export async function DELETE(
	req: Request,
	{ params }: { params: { id: string } },
) {
	try {
		const { id } = params;

		const deletepricing = await prisma.pricing.delete({
			where: {
				id: String(id),
			},
		});

		return NextResponse.json(deletepricing);
	} catch (error) {
		console.error("Error deleting status:", error);
		return new NextResponse("Internal server error", { status: 500 });
	}
}
