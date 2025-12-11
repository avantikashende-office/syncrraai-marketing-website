"use client";

import React from "react";

interface FeatureItem {
  icon?: React.ReactNode;
  text: string;
  showDivider?: boolean;
}

interface ComparisonCardProps {
  features: FeatureItem[];
  showGreenBorder?: boolean; 
  className?: string;
}

const ComparisonCard: React.FC<ComparisonCardProps> = ({
  features,
  showGreenBorder = false,
  className = "",
}) => {
  return (
    <div className={`comparison-card ${className}`}>

      {/* ---- BORDER WRAPPER ---- */}
      <div className={`comparison-border ${showGreenBorder ? 'comparison-border-green' : ''}`}>
        {/* Inner layer MUST NOT cover border = inset: 1px */}
        <div className="comparison-inner" />
      </div>

      {/* ---- CONTENT ---- */}
      <ul className="comparison-list">
        {features.map((item, idx) => (
          <li key={idx}>
            <div className="comparison-item">
              <p className="comparison-icon">{item.icon}</p>
              <p className="comparison-text">{item.text}</p>
            </div>

            {item.showDivider && (
              <div className="comparison-divider" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComparisonCard;
