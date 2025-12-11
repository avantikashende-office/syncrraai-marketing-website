import React from "react";
import { motion } from "framer-motion";
import CheckIcon from "../Icons/CheckIcons";
import CrossIcon from "../Icons/CrossIcon";
import InfoIcon from "../Icons/InfoIcon";

export default function FeatureRow({
  label,
  values,
}: {
  label: string;
  values: string[];
}) {
  return (
    <div className="grid grid-cols-5 text-sm">
      
      {/* Label column */}
      <div className="py-4 flex items-center justify-between mx-4 border-b border-[#404040]">
        <span>{label}</span>
        <InfoIcon />
      </div>

      {/* Value columns */}
      {values.map((value, index) => {
        const baseClass =
          " py-4 flex items-center  mx-4 border-b border-[#404040]";

        // ✔ Check icon
        if (value === "✓") {
          return (
            <motion.div 
              key={index} 
              className={baseClass}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <CheckIcon />
            </motion.div>
          );
        }

        // ✗ or —
        if (value === "—" || value === "✗") {
          return (
            <motion.div 
              key={index} 
              className={baseClass}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <CrossIcon />
            </motion.div>
          );
        }

        // Normal string value
        return (
          <motion.div 
            key={index} 
            className={`${baseClass} text-center`}
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
          >
            {value}
          </motion.div>
        );
      })}
    </div>
  );
}
