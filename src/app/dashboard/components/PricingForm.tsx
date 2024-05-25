'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PricingSchema } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Error from '@/components/Error';
import { cn } from '@/lib/utils';

const PricingForm = () => {
    const form = useForm({
        resolver: zodResolver(PricingSchema),
    });
    const [customSurveyType, setCustomSurveyType] = useState('');
    const [surveyTypes, setSurveyTypes] = useState<string[]>([]);

    const handleAddSurveyType = () => {
        if (customSurveyType.trim() !== '') {
            setSurveyTypes((prev) => [...prev, customSurveyType.trim()]);
            setCustomSurveyType('');
        }
    };

    const handleRemoveSurveyType = (surveyType: string) => {
        setSurveyTypes((prev) => prev.filter((type) => type !== surveyType));
    };

    const onSubmit = (data) => {
        console.log(data);
        alert(JSON.stringify(data, null, 2));
        form.reset();
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="serviceName" className="!text-para">
                    Service Name
                </Label>
                <Input
                    id="serviceName"
                    {...form.register("serviceName")}
                    className={cn(form.formState.errors.serviceName ? "!border-red-500" : "")}
                    placeholder="Enter service name"
                />
                {form.formState.errors.serviceName && (
                    <Error message={form.formState.errors.serviceName.message} />
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="pricing" className="!text-para">
                    Pricing
                </Label>
                <Input
                    id="pricing"
                    type="number"
                    {...form.register("pricing")}
                    className={cn(form.formState.errors.pricing ? "!border-red-500" : "")}
                    placeholder="Enter price"
                />
                {form.formState.errors.pricing && (
                    <Error message={form.formState.errors.pricing.message} />
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
                        onClick={handleAddSurveyType}
                        className="text-btn p-2 text-white bg-apex-blue hover:bg-apex-blue"
                    >
                        Add
                    </Button>
                </div>
            </div>

            <Button type="submit" className="text-btn p-2 text-white bg-apex-blue hover:bg-apex-blue w-full text-center">
                Submit
            </Button>
        </form>
    );
};

export default PricingForm;
