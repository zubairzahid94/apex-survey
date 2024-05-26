// @ts-nocheck 
'use client'
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { PricingSchema } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Error from '@/components/Error';
import toast from 'react-hot-toast';
import axios from 'axios';

const predefinedSurveyTypes = [
    "Survey Construction Report",
    "Digital Mapping Report",
    "Engineering Support Report",
];

const PricingForm = () => {
    const [serviceName, setServiceName] = useState('');
    const [pricing, setPricing] = useState('');
    const [customSurveyType, setCustomSurveyType] = useState('');
    const [surveyTypes, setSurveyTypes] = useState<string[]>([]);

    const handleAddSurveyType = (type: string) => {
        if (type.trim() !== '' && !surveyTypes.includes(type.trim())) {
            setSurveyTypes((prev) => [...prev, type.trim()]);
        }
    };

    const handleRemoveSurveyType = (surveyType: string) => {
        setSurveyTypes((prev) => prev.filter((type) => type !== surveyType));
    };

    const onSubmit = async (e) => {
        try {
            e.preventDefault()

            const data = {
                serviceName,
                pricing,
                surveyType: surveyTypes,
            };

            const response = await axios.post('/api/services', data);
            toast.success("Service added");
            setServiceName('');
            setPricing('');
            setSurveyTypes([]);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <form onSubmit={(e) => onSubmit(e)} className="space-y-4">
            <div className="space-y-2">
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

            <div className="space-y-2">
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

            <div className="space-y-2">
                <Label htmlFor="surveyType" className="!text-para">
                    Survey Type
                </Label>
                <div className="flex flex-wrap items-center gap-2">
                    {surveyTypes.map((type) => (
                        <div key={type} className="rounded-full border border-gray-300 py-1 px-3 flex items-center justify-center">
                            <span>{type}</span>
                            <button
                                type="button"
                                className="ml-2 text-red-500 hover:text-red-700"
                                onClick={() => handleRemoveSurveyType(type)}
                            >
                                X
                            </button>
                        </div>
                    ))}
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
                </div>
                <div className="space-y-2">
                    <Label htmlFor="predefinedSurveyTypes" className="!text-para">
                        Predefined Survey Types
                    </Label>
                    <div className="flex flex-wrap items-center gap-2">
                        {predefinedSurveyTypes.map((type) => (
                            <Button
                                key={type}
                                type="button"
                                onClick={() => handleAddSurveyType(type)}
                                className="text-btn p-2 text-white bg-apex-blue hover:bg-apex-blue"
                            >
                                {type}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            <Button type="submit" className="text-btn p-2 text-white bg-apex-blue hover:bg-apex-blue w-full text-center">
                Submit
            </Button>
        </form>
    );
};

export default PricingForm;
