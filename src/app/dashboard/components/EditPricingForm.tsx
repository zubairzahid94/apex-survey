//@ts-nocheck
'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Error from '@/components/Error';
import toast from 'react-hot-toast';
import axios from 'axios';
import type { Pricing } from '@prisma/client';
import { update } from '@/lib/action';
import { useRouter } from 'next/navigation';
import { PlusSquare } from 'lucide-react';


const predefinedSurveyTypes = [
    "Survey Construction Report",
    "Digital Mapping Report",
    "Engineering Support Report",
];

interface PricingProps {
    pricing: Pricing,
}

const EditPricingForm = ({ pricing: initialPricing }: PricingProps) => {
    const route = useRouter();
    const [serviceName, setServiceName] = useState(initialPricing.serviceName || '');
    const [pricing, setPricing] = useState(initialPricing.pricing || '');
    const [customSurveyType, setCustomSurveyType] = useState('');
    const [surveyType, setSurveyTypes] = useState<string[]>(initialPricing.surveyType || []);
    const [loading, setLoading] = useState(false);

    const handleAddSurveyType = (type: string) => {
        if (type.trim() !== '' && !surveyType.includes(type.trim())) {
            setSurveyTypes((prev) => [...prev, type.trim()]);
        }
    };

    const handleRemoveSurveyType = (surveyType: string) => {
        setSurveyTypes((prev) => prev.filter((type) => type !== surveyType));
    };

    const onSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const data = {
                serviceName,
                pricing,
                surveyType,
            };

            await axios.put(`/api/services/${initialPricing.id}`, data);
            update(["/dashboard/pricing"]);
            update(["/(ui)/(home)"]);
            toast.success("Service updated successfully");
            route.push("/dashboard/pricing")
        } catch (error) {
            console.error('Error updating service:', error);
            toast.error("Failed to update service");
        } finally {
            setLoading(false); // Set loading to false when API request finishes
        }
    };

    return (
        <form onSubmit={onSubmit} className="space-y-5">
            <div className="flex gap-4 items-start">
                <div className="relative flex-1">
                    <Label htmlFor="serviceName" className="!text-para block text-sm font-medium text-gray-700 mb-1">
                        Service Name
                    </Label>
                    <Input
                        id="serviceName"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        placeholder="Enter service name"
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {serviceName === '' && (
                        <Error message="Please enter the service name" className="absolute top-full mt-1 text-red-600" />
                    )}
                </div>

                <div className="relative flex-1 mb-2">
                    <Label htmlFor="pricing" className="!text-para block text-sm font-medium text-gray-700 mb-1">
                        Pricing
                    </Label>
                    <Input
                        id="pricing"
                        type="number"
                        value={pricing}
                        onChange={(e) => setPricing(e.target.value)}
                        placeholder="Enter price"
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    {pricing === '' && (
                        <Error message="Please enter a valid price" className="absolute top-full mt-1 text-red-600" />
                    )}
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="predefinedSurveyTypes" className="!text-para">
                    Survey Types
                </Label>
                <div className="flex flex-wrap items-center gap-2">
                    {predefinedSurveyTypes.map((type) => (
                        <Button
                            key={type}
                            type={"button"}
                            size={"lg"}
                            onClick={() => handleAddSurveyType(type)}
                            className={`px-4 bg-white py-2 border rounded-full ${surveyType.includes(type) ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                        >
                            {type}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <Label htmlFor="surveyType" className="!text-para">
                    Custom Survey Type
                </Label>
                <div className="flex flex-wrap items-center gap-2">
                    <Input
                        id="customSurveyType"
                        value={customSurveyType}
                        onChange={(e) => setCustomSurveyType(e.target.value)}
                        placeholder="Custom Survey Type"
                        className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                        type='button'
                        onClick={() => handleAddSurveyType(customSurveyType)}
                        className="text-btn p-2 text-gray-500 bg-white hover:text-blue-500 hover:bg-white"
                    >
                        <PlusSquare size={"30px"} />
                    </Button>
                    <br />
                </div>
                <ul className="list-none text-gray-700">
                    {surveyType.map((type) => (
                        <li key={type} className="mb-2 flex items-center">
                            <div className="w-4 h-0.5 bg-gray-400 mr-2" /> {/* Line element */}
                            <span>{type}</span>
                            <button
                                type="button"
                                className="text-gray text-md ml-2 hover:bg-gray-200"
                                onClick={() => handleRemoveSurveyType(type)}
                            >
                                &times;
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex space-x-4'>
                <Button disabled={loading} type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
                    {loading && ( // Show loader if loading is true
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex flex-row gap-2">
                                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce" />
                                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]" />
                                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]" />
                            </div>
                        </div>
                    )}
                    <span className={loading ? "opacity-0" : "opacity-100"}>
                        Update
                    </span>
                </Button>
                <Button onClick={() => route.push("/dashboard/pricing")} type='button' className='px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600'>Cancel</Button>
            </div>
        </form>
    );
};

export default EditPricingForm;
