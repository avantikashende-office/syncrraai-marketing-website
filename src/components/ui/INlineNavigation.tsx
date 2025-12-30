"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export interface InlineNavContent {
  title: string;
  image: string;
  features: string[];
}

export interface InlineNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: InlineNavContent;
}

interface InlineNavigationProps {
  items: InlineNavItem[];
}

export function InlineNavigation({ items }: InlineNavigationProps) {
  const [active, setActive] = useState(items[0].id);
  const activeIndex = items.findIndex((item) => item.id === active);
  const activeItem = items[activeIndex];

  return (
    <div className="w-full flex flex-col items-center gap-[4%]">
      <div className="relative w-full">
        <div className="relative flex justify-center items-center gap-[25%] mb-[3%]">
          {items.map((item) => {
            const isActive = item.id === active;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="relative flex flex-col items-center gap-[20%] space-y-4 focus:outline-none"
              >
                {/* ICON */}
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="
    relative z-10
    w-15 h-15 aspect-square
    rounded-full
    flex items-center justify-center
    bg-gradient-to-tr
    from-[#1C984B]
    to-[#171717]
  "
                >
                  {item.icon}
                </motion.div>

                {/* LABEL */}
                <span
                  className={`text-xs sm:text-xl transition-colors text-white"
                  `}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative mx-[10%]">
          {/* Base gray line */}
          <div className="border-b border-[#404040]" />

          {/* Active green indicator */}
          <motion.div
            className="pointer-events-none absolute h-[3px]"
            style={{
              bottom: "0px",
              backgroundImage:
                "linear-gradient(90deg, transparent 0%, #16A34A 50%, transparent 100%)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            initial={false}
            animate={{
              width: `${100 / items.length}%`,
              left: `${activeIndex * (100 / items.length)}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>

      {/* ---------- CONTENT ---------- */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: "5%" }}
        animate={{ opacity: 1, y: "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full py-[4%]"
      >
        <div className="space-y-[2%]">
          <h3 className="text-5xl w-full max-w-[50%] gradient-gray-text text-center md:text-left">
            {activeItem.content.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-[5%] items-center">
            <ul className="space-y-[8%]">
              {activeItem.content.features.map((feature) => (
                <li key={feature} className="flex items-start gap-[4%]">
                  <div className="flex-shrink-0 aspect-square p-1 min-w-[1.5rem] rounded-md bg-[#404040] flex items-center justify-center">
                    <Check className="text-white text-sm" />
                  </div>
                  <p className="text-description">{feature}</p>
                </li>
              ))}
            </ul>

            <Image
              src={activeItem.content.image}
              alt={activeItem.content.title}
              width={650}
              height={650}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
