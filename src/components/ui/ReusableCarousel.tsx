"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CenterZoomCarouselProps<T> {
  items: T[];
  renderItem: (item: T, isActive: boolean) => React.ReactNode;
  itemWidth?: string;
  itemHeight?: string;
  gap?: number;
  activeScale?: number;
  inactiveScale?: number;
}

export default function CenterZoomCarousel<T>({
  items,
  renderItem,
  itemWidth = "40%",
  itemHeight = "auto",
  gap = 24,
  activeScale = 1,
  inactiveScale = 0.9,
}: CenterZoomCarouselProps<T>) {
  const [activeIndex, setActiveIndex] = useState(1);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + items.length) % items.length);

  const next = () =>
    setActiveIndex((i) => (i + 1) % items.length);

  return (
    <div className="relative w-full overflow-hidden">
      {/* CENTERING WRAPPER */}
      <div className="relative mx-auto flex w-full justify-center overflow-hidden">
        <motion.div
          className="flex items-center"
          style={{ gap }}
          animate={{
            x: `calc(50% - ${itemWidth} / 2 - ${activeIndex} * (${itemWidth} + ${gap}px))`,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 30,
          }}
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={index}
                className="
                  shrink-0
                  min-w-[260px]
                  sm:min-w-[300px]
                  md:min-w-[360px]
                  max-w-[1020px]
                  min-h-[340px]
                  md:min-h-[380px]
                  max-h-[660px]
                  w-full
                "
                style={{ width: itemWidth, height: itemHeight }}
                animate={{
                  scale: isActive ? activeScale : inactiveScale,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ duration: 0.3 }}
              >
                {renderItem(item, isActive)}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* CONTROLS — ALWAYS CENTERED */}
      <div className="mt-8 flex w-full justify-center gap-3">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="rounded-md bg-[#171717] p-2 text-white hover:cursor-pointer"
        >
          <ChevronLeft />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="rounded-md bg-[#171717] p-2 text-white hover:cursor-pointer"
        >
          <ChevronRight />
        </motion.button>
      </div>
    </div>
  );
}
