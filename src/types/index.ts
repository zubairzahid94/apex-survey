
export type SubField = {
    label: string,
    id: "property" | "propertyAge" | "propertyPrice" | "noOfBedrooms" | "noOfElectricalAppliances" | "noOfGasAppliances" | "noOfFloors" | "noOfCircuits" | "typeOfSupply" | "consumerUnits" | "propertyArea",
    options: {
        id: string,
        label: string,
        propertyType?: string
    }[],
    fieldType: "checkbox" | "counter" | "dropdown"
}