"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface PricingCardProps {
    title: string;
    price: string;
    priceSuffix: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonVariant?: "outline" | "primary";
    badgeText?: string;
    badgeIcon?: React.ReactNode;
    highlight?: boolean;
    bgPattern?: string;
    onClick?: () => void; // ✅ NEW
}

export const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    priceSuffix,
    description,
    features,
    buttonText,
    buttonVariant = "outline",
    badgeText,
    badgeIcon,
    highlight = false,
    bgPattern,
    onClick
}) => {
    return (
        <div
            className={`
                relative rounded-lg border 
                ${highlight ? "border-green-500" : "border-[#404040]"} 
                bg-[#0f0f0f] text-white overflow-y-visible
                flex flex-col w-full max-w-[300px]
            `}
        >

            {/* Top right background pattern */}
            {bgPattern && (
                <Image
                    src={bgPattern}
                    alt="pattern"
                    width={200}
                    height={200}
                    className="absolute top-0 right-0 opacity-30 pointer-events-none select-none"
                />
            )}

            {/* Badge */}
            {badgeText && (
                <div className="absolute text-sm -top-4 left-1/2 -translate-x-1/2 bg-[#005F24] text-white px-6 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    {badgeText} {badgeIcon}
                </div>
            )}

            {/* TOP SECTION */}
            <div className="bg-[#222222] p-6 space-y-4 rounded-t-lg">
                <p className="text-lg">{title}</p>
                <p className="text-sm text-[#A3A3A3]">Starts at</p>

                <div className="flex items-end gap-1">
                    <span className="text-5xl">{price}</span>
                    <span className="text-xs text-[#A3A3A3]">{priceSuffix}</span>
                </div>

                <p className="text-[#A3A3A3] text-sm">{description}</p>
            </div>

            {/* MIDDLE CONTENT */}
            <div className="bg-[#171717] flex flex-col h-full rounded-b-lg">
                <ul className="space-y-4 p-4">
                    {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <Check className="mt-1" size={18} />
                            <p className="text-sm">{feat}</p>
                        </li>
                    ))}
                </ul>

                {/* BOTTOM BUTTON */}
                <button
                    onClick={onClick}
                    className={`
                        w-[calc(100%-2rem)] mx-4 mb-4 mt-auto 
                        py-3 rounded-md text-sm font-medium 
                        transition border cursor-pointer
                        ${
                            buttonVariant === "primary"
                                ? "bg-gradient-to-r from-green-800 to-green-700 border-green-700 hover:brightness-110"
                                : "border hover:bg-[#1c1c1c]"
                        }
                    `}
                >
                    {buttonText}
                </button>
            </div>

        </div>
    );
};
