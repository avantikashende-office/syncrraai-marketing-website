"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface SwitchChipProps {
  leftLabel: string;
  rightLabel: string;
  badgeText?: string;
  active: "left" | "right";
  onChange: (value: "left" | "right") => void;
  showBadge?: boolean; // ✅ optional toggle
}

export const SwitchChip: React.FC<SwitchChipProps> = ({
  leftLabel,
  rightLabel,
  badgeText,
  active,
  onChange,
  showBadge = true, // default enables badge
}) => {
  const { ref } = useInView({ threshold: 0.3 });

  const shouldShowBadge = showBadge && badgeText && active === "left";

  return (
    <div ref={ref} className="relative flex flex-col items-center w-fit">
      <AnimatePresence>
        {shouldShowBadge && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute -top-9 -right-0 bg-white text-black text-xs px-3 py-1 rounded-md shadow"
          >
            {badgeText}
            <div className="w-2 h-2 bg-white absolute left-1/2 -translate-x-1/2 rotate-45 -bottom-1" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center bg-transparent border border-[#404040] rounded-full px-1 py-1 relative transition-all w-fit overflow-hidden">
        <div
          className="
            absolute top-1 bottom-1 w-1/2 rounded-full 
            transition-all duration-300 
            bg-gradient-to-r from-green-800 to-green-700
          "
          style={{
            left: active === "left" ? "4px" : "calc(50% - 4px)",
          }}
        />

        <button
          onClick={() => onChange("left")}
          className={`
            relative z-10 text-sm font-medium px-5 py-2 rounded-full transition-all hover:cursor-pointer
            ${active === "left" ? "text-white" : "text-[#737373]"}
          `}
        >
          {leftLabel}
        </button>

        <button
          onClick={() => onChange("right")}
          className={`
            relative z-10 text-sm font-medium px-5 py-2 rounded-full transition-all hover:cursor-pointer
            ${active === "right" ? "text-white" : "text-[#737373]"}
          `}
        >
          {rightLabel}
        </button>
      </div>
    </div>
  );
};
