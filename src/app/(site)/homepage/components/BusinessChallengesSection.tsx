"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
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

export default function BusinessChallengesSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const INITIAL_INDEX = 3;
  const [activeIdx, setActiveIdx] = useState(INITIAL_INDEX);

  const rawIndex = useMotionValue(INITIAL_INDEX);

  useSpring(rawIndex, {
    stiffness: 60,
    damping: 18,
    mass: 0.4,
  });

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
        const maxSteps = items.length - 1;
        const idx = progress * maxSteps;

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
              const y = distance * ROW_H;

              const normalizedDistance = distance / 3;
              const curveStrength = 100;

              const x = Math.max(
                0,
                -curveStrength * (1 - Math.pow(normalizedDistance, 2))
              );

              const scale = Math.max(0.6, 1 - Math.abs(distance) * 0.2);
              const opacity = Math.max(0.25, 1 - Math.abs(distance) * 0.8);

              return (
                <motion.span
                  key={i}
                  className="challenges-scroll-item"
                  animate={{ y, x, scale, opacity }}
                  transition={{ type: "spring", stiffness: 80, damping: 22 }}
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
