"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

const items = [
  "manual reports",
  "slow approvals",
  "data chaos",
  "guesswork",
  "misaligned teams",
  "human errors",
];

const ROW_H = 80;
const CURVE_DEPTH = 140;

export default function BusinessChallengesSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const rawIndex = useMotionValue(3);
  const [activeIdx, setActiveIdx] = useState(3);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const onScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const winH = window.innerHeight;
      const totalScrollable = rect.height - winH;

      let progress = 0;
      if (totalScrollable > 0) {
        progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      }

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const maxIdx = items.length - 1;
        const idx = progress * maxIdx;

        rawIndex.set(idx);
        setActiveIdx(Math.round(idx));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [rawIndex]);

  return (
    <div
      ref={wrapperRef}
      className="challenges-wrapper"
      style={{ height: `${items.length * 100}vh` }}
    >
      <section className="challenges-section">
        <div className="glow-background" />

        <div className="challenges-content">
          <motion.span
            className="challenges-text"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Time to ditch
          </motion.span>

          <div className="challenges-scroll-items">
            {items.map((text, i) => {
              const distance = i - activeIdx;
              const y = distance * ROW_H * 1.2;

              const t = Math.min(Math.abs(distance) / 4, 1);
              const eased = t * 0.7;

              return (
                <motion.span
                  key={i}
                  className="challenges-scroll-item"
                  style={{ translateY: "-50%" }}
                  animate={{
                    y,
                    x: CURVE_DEPTH * eased,
                    scale: 1 - eased * 1.2,
                    opacity: 1 - eased * 0.9,
                    filter: `blur(${eased * 20}px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 24,
                  }}
                >
                  {text}
                </motion.span>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
