import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";

export async function POST(req: Request) {
	try {
		const data = await req.json();

		// Restructure the services array to match Prisma's nested create syntax
		const services = data.services.map((service) => ({
			id: service.id,
			label: service.label,
			servicePropertyType: { set: service.servicePropertyType },
			subFields: { set: service.subFields },
		}));

		const order = await prisma.instantQuote.create({
			data: {
				propertyType: data.propertyType,
				property: data.property,
				propertyArea: data.propertyArea,
				noOfBedrooms: data.noOfBedrooms,
				propertyAge: data.propertyAge,
				propertyPrice: data.propertyPrice,
				noOfElectricalAppliances: data.noOfElectricalAppliances,
				noOfGasAppliances: data.noOfGasAppliances,
				noOfFloors: data.noOfFloors,
				consumerUnits: data.consumerUnits,
				noOfCircuits: data.noOfCircuits,
				typeOfSupply: data.typeOfSupply,
				postCode: data.postCode,
				services: {
					create: services,
				},
			},
		});

		return NextResponse.json(order);
	} catch (error) {
		console.log("Order", error);
		return new NextResponse("Internal server error", { status: 500 });
	}
}
