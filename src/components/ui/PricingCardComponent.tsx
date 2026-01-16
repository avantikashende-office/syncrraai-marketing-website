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
  onClick?: () => void;
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
  onClick,
}) => {
  return (
    <div
      className={`price-card-bg ${
        highlight ? "border-green-500" : "border-[#404040]"
      } `}
    >
      {/* Top right background pattern */}
      {bgPattern && (
        <Image
          src={bgPattern}
          alt="pattern"
          width={200}
          height={200}
          className="price-card-top-img "
        />
      )}

      {/* Badge */}
      {badgeText && (
        <div className="absolute text-sm -top-4 left-1/2 -translate-x-1/2 bg-[#005F24] text-white px-6 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
          {badgeText} {badgeIcon}
        </div>
      )}

      {/* TOP SECTION */}
      <div className="price-card-top-section">
        <p className="text-lg">{title}</p>
        <p className="text-subdescription">Starts at</p>

        <div className="price-amount-sec">
          <span className="text-5xl">{price}</span>
          <span className="text-xs text-[#A3A3A3]">{priceSuffix}</span>
        </div>

        <p className="price-description">{description}</p>
      </div>

      {/* MIDDLE CONTENT */}
      <div className="price-card-mid-section">
        <ul className="price-ul">
          {features.map((feat, idx) => (
            <li key={idx} className="price-li">
              <Check className="price-li-icon " size={18} />
              <p className="price-li-feature ">{feat}</p>
            </li>
          ))}
        </ul>

        {/* BOTTOM BUTTON */}
        <button
          onClick={onClick}
          className={`
                        price-card-btn 
                        ${
                          buttonVariant === "primary"
                            ? "price-card-btn-primary"
                            : "price-card-btn-not-primary "
                        }
                    `}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
