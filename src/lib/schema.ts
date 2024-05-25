import { z } from "zod";

export const checkoutSchema = z.object({
	contactAccess: z.object({
		type: z.union([
			z.literal("me"),
			z.literal("Seller"),
			z.literal("Buyer"),
			z.literal("Tenant"),
			z.literal("LandLord"),
			z.literal("Agent"),
			z.literal("Other"),
		]),
		name: z
			.string({
				required_error: "Please enter your name",
			})
			.min(4, {
				message: "Name should be at least 4 characters",
			})
			.optional(),
		email: z
			.string({ required_error: "Please enter your email" })
			.email({ message: "Please enter a valid email" })
			.optional(),
		phoneNumber1: z
			.string({ required_error: "Please enter your phone number" })
			.regex(
				/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g,
				"Please Enter a valid Phone Number",
			)
			.optional(),
		phoneNumber2: z
			.string({ required_error: "Please enter your phone number" })
			.regex(
				/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g,
				"Please Enter a valid Phone Number",
			)
			.optional(),
	}),
	payment: z.object({
		method: z.union([z.literal("card"), z.literal("bank")]),
		cardInformation: z
			.object({
				nameOnCard: z.string({
					required_error: "Please enter Card Holder Name",
				}),
				cardNumber: z
					.string({
						required_error: "Please enter your card number",
					})
					.regex(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/g, {
						message: "Please enter a valid card number",
					})
					.max(16, {
						message: "Please enter a valid card number",
					}),
				expiryDate: z
					.string({ required_error: "Please enter expiry date" })
					.regex(/^(0[1-9]|1[0-2])\/\d{2}$/g, {
						message: "Please enter a valid expiry date",
					}),
				CVVCode: z
					.string({
						required_error: "Please enter CVV code",
					})
					.regex(/^[0-9]{3,4}$/g, {
						message: "Please enter a valid CVV code",
					})
					.max(4, {
						message: "Please enter a valid CVV code",
					}),
			})
			.optional(),
		bankInformation: z
			.object({
				bankName: z
					.string({
						required_error: "Please enter Bank Name",
					})
					.min(5, {
						message: "Name should be at least 5 characters",
					}),
				IBANNumber: z
					.string({
						required_error: "Please enter IBAN Number",
					})
					.regex(
						/^[A-Z]{2}[0-9]{2}\s?[0-9]{4}(\s?[0-9]{4}){2}(\s?[0-9]{2})?$/g,
						{
							message: "Please enter a valid IBAN Number",
						},
					),
				accountType: z.string({
					required_error: "Please enter Account Type",
				}),
				accountName: z
					.string({
						required_error: "Please enter Account Name",
					})
					.min(4, {
						message: "Name should be at least 4 characters",
					}),
				govtId: z
					.string({
						required_error: "Please enter Government ID",
					})
					.min(8, {
						message: "ID should be at least 8 characters",
					}),
			})
			.optional(),
	}),
	fullName: z.string({ required_error: "Please enter your full name" }).min(4, {
		message: "Name should be at least 4 characters",
	}),
	email: z
		.string({ required_error: "Please enter your email" })
		.email("Please enter a valid email address"),
	postCode: z
		.string({ required_error: "Please enter your postcode" })
		.regex(
			/^(?:\d{4}|\d{3}-\d{4}|[A-Z]{1}\d{2}\s?\d{3}|[A-Za-z]{2}-\d{7}|A-PR-UWYZ: [1-9]|[A-HJKSTUW]\d{2}|[Gg][Ii][Rr] 0AA\d{1,2}|[Ii][Mm][Ss] \d{5}|(?:[A-CEPTZ][\d{2,4}])(?:\s(?:[ABCDEFGHIJKLMNOPQZSTUVWXY]\d{2,4}))?|\d{5}(?:[-\ ]\d{4})?|[A-HJ-NPR-Z\d]{2}\d{1,2})$/g,
			{
				message: "Please enter a valid postcode",
			},
		),
	address: z.string({ required_error: "Please enter your address" }).min(10, {
		message: "Address should be at least 10 characters",
	}),
	phone: z
		.string({ required_error: "Please enter your phone number" })
		.regex(
			/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g,
			"Please Enter a valid Phone Number",
		),
	acceptTos: z.boolean({
		required_error: "Please accept the terms and conditions",
	}),
});

export const FormSchema = z.object({
	items: z.array(z.string()).refine((value) => value.some((item) => item), {
		message: "You have to select at least one item.",
	}),
});

export const InstantQuoteSchema = z.object({
	propertyType: z.union(
		[z.literal("residential"), z.literal("commercial"), z.literal("")],
		{
			required_error: "Please select a property type",
		},
	),
	services: z
		.array(
			z.object({
				// id: z.string(),
				label: z.string(),
				servicePropertyType: z.array(
					z.union([
						z.literal("residential"),
						z.literal("commercial"),
						z.literal(""),
					]),
				),
				subFields: z.array(z.string()),
			}),
		)
		.min(1, {
			message: "Please select at least one service",
		}),
	property: z
		.string()
		.min(1, {
			message: "Please select a property",
		})
		.optional(),
	propertyArea: z.string().min(1, {
		message: "Please select property area",
	}),
	noOfBedrooms: z
		.string()
		.min(1, {
			message: "Please select number of bedrooms",
		})
		.optional(),
	propertyAge: z
		.string()
		.min(1, {
			message: "Please select property age",
		})
		.optional(),
	propertyPrice: z
		.string()
		.min(1, {
			message: "Please select property price",
		})
		.optional(),
	noOfElectricalAppliances: z
		.string()
		.min(1, {
			message: "Please select number of electrical appliances",
		})
		.optional(),
	noOfGasAppliances: z
		.string()
		.min(1, {
			message: "Please select number of gas appliances",
		})
		.optional(),
	noOfFloors: z
		.string()
		.min(1, {
			message: "Please select number of floors",
		})
		.optional(),
	consumerUnits: z
		.string()
		.min(1, {
			message: "Please select consumer units",
		})
		.optional()
		.default("1"),
	noOfCircuits: z
		.string()
		.min(1, {
			message: "Please select number of circuits",
		})
		.optional(),
	typeOfSupply: z
		.string()
		.min(1, {
			message: "Please select type of supply",
		})
		.optional(),
	postCode: z
		.string()
		.min(1, {
			message: "Please enter your postcode",
		})
		.optional(),
});

export const PricingSchema = z.object({
	serviceName: z.string().min(1, {
		message: "Please enter the service name",
	}),
	pricing: z.string().min(0, {
		message: "Please enter a valid price",
	}),
	// surveyType: z.array(
	// 	z.string().min(1, {
	// 		message: "Please select a survey type",
	// 	}),
	// ),
	surveyType: z.string(),
});
// export const PricingSchema = z.object({
// 	serviceName: z.string(),
// 	pricing: z.string(),
// 	surveyType: z.array(z.string()),
// });
