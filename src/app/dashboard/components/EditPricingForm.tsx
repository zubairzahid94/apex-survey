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
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="flex gap-4 items-center">
                <div className="flex-1">
                    <Label htmlFor="serviceName" className="!text-para">
                        Service Name
                    </Label>
                    <Input
                        id="serviceName"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        placeholder="Enter service name"
                    />
                    {serviceName === '' && (
                        <Error message="Please enter the service name" />
                    )}
                </div>

                <div className="flex-1">
                    <Label htmlFor="pricing" className="!text-para">
                        Pricing
                    </Label>
                    <Input
                        id="pricing"
                        type="number"
                        value={pricing}
                        onChange={(e) => setPricing(e.target.value)}
                        placeholder="Enter price"
                    />
                    {pricing === '' && (
                        <Error message="Please enter a valid price" />
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
                            type="button"
                            size={"lg"}
                            onClick={() => handleAddSurveyType(type)}
                            className="text-btn p-2 rounded-3xl text-white bg-apex-blue hover:bg-apex-blue"
                        >
                            {type}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="surveyType" className="!text-para">
                    Custom Survey Type
                </Label>
                <div className="flex flex-wrap items-center gap-2">
                    <Input
                        id="customSurveyType"
                        value={customSurveyType}
                        onChange={(e) => setCustomSurveyType(e.target.value)}
                        placeholder="Custom Survey Type"
                        className="input"
                    />
                    <Button
                        type="button"
                        onClick={() => handleAddSurveyType(customSurveyType)}
                        className="text-btn p-2 text-white bg-apex-blue hover:bg-apex-blue"
                    >
                        Add
                    </Button>
                    <br />
                    {surveyType.map((type) => (
                        <div key={type} className="bg-blue-500 text-white rounded-full py-1 px-3 flex items-center justify-center">
                            <span>{type}</span>
                            <button
                                type="button"
                                className="ml-2 text-white hover:text-gray-200"
                                onClick={() => handleRemoveSurveyType(type)}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                </div>

            </div>

            <Button disabled={loading} type="submit" className="text-btn p-2 text-white bg-apex-blue hover:bg-apex-blue w-full text-center">
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
        </form>
    );
};

export default EditPricingForm;
