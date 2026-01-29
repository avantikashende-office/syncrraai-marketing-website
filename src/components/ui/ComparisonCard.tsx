"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import React from "react";

interface FeatureItem {
  icon?: React.ReactNode;
  text: string;
  description?: string;
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
      {/* <div
        className={`comparison-border ${
          showGreenBorder ? "comparison-border-green" : ""
        }`}
      >
        <div className="comparison-inner" />
      </div> */}

      {showGreenBorder && (
        <div className="pointer-events-none absolute inset-0 rounded-[10px]">
          <div className="absolute inset-0 rounded-sm border border-neutral-700" />

          <motion.div
            className="absolute left-[2px] right-[2px] top-0 h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,255,140,0.9), transparent)",
            }}
            initial={{ x: "-100%", opacity: 1 }}
            animate={{ x: ["-100%", "100%", "100%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.25, 1],
            }}
          />

          <motion.div
            className="absolute right-0 top-[2px] bottom-[2px] w-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(0,255,140,0.9), transparent)",
            }}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: ["-100%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 1,
            }}
          />

          <motion.div
            className="absolute left-[2px] right-[2px] bottom-0 h-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(270deg, transparent, rgba(0,255,140,0.9), transparent)",
            }}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: ["100%", "-100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 2,
            }}
          />

          <motion.div
            className="absolute left-0 top-[2px] bottom-[2px] w-[2px] rounded-full"
            style={{
              background:
                "linear-gradient(0deg, transparent, rgba(0,255,140,0.9), transparent)",
            }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: ["100%", "-100%"], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: 3,
            }}
          />
        </div>
      )}

      {/* ---- CONTENT ---- */}
      <ul className="comparison-list">
        {features.map((item, idx) => (
          <motion.li
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            key={idx}
          >
            <div className="comparison-item">
              <p className="comparison-icon">{item.icon}</p>

              <div className="comparison-content">
                <p className="comparison-text">{item.text}</p>
                <p className="comparison-description">{item.description}</p>
              </div>
            </div>

            {item.showDivider && <div className="comparison-divider" />}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ComparisonCard;
