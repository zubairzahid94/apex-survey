// Assuming this file is named checkout.ts and located in pages/api/checkout.ts
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/db";

export async function POST(
	req: Request,
	{ params }: { params: { quoteId: string } },
) {
	try {
		const requestData = await req.json();
		const { quoteId } = params;

		const checkout = await prisma.checkout.create({
			data: {
				contactType: requestData.contactAccess.type,
				contactName: requestData.contactAccess.name,
				contactEmail: requestData.contactAccess.email,
				phoneNumber1: requestData.contactAccess.phoneNumber1,
				phoneNumber2: requestData.contactAccess.phoneNumber2,
				paymentMethod: requestData.payment.method,
				nameOnCard: requestData.payment.cardInformation?.nameOnCard,
				cardNumber: requestData.payment.cardInformation?.cardNumber,
				expiryDate: requestData.payment.cardInformation?.expiryDate,
				CVVCode: requestData.payment.cardInformation?.CVVCode,
				bankName: requestData.payment.bankInformation?.bankName,
				IBANNumber: requestData.payment.bankInformation?.IBANNumber,
				accountType: requestData.payment.bankInformation?.accountType,
				accountName: requestData.payment.bankInformation?.accountName,
				govtId: requestData.payment.bankInformation?.govtId,
				fullName: requestData.fullName,
				email: requestData.email,
				postCode: requestData.postCode,
				address: requestData.address,
				phone: requestData.phone,
				acceptTos: requestData.acceptTos,
				quoteId: quoteId,
			},
		});

		return NextResponse.json(checkout);
	} catch (error) {
		console.error("Checkout error:", error);
		return new NextResponse("Internal server error", { status: 500 });
	}
}
