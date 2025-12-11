"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const items = [
  "manual reports",
  "slow approvals",
  "data chaos",
  "guesswork",
  "misaligned teams",
  "human errors",
];

const ROW_H = 75;

export default function BusinessChallengesSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const [activeIdx, setActiveIdx] = useState(0);

  // --- FRAMER MOTION SETUP ---
  const y = useMotionValue(187); // initial offset
  const smoothY = useSpring(y, {
    stiffness: 60,
    damping: 18,
    mass: 0.3,
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
        const idx = Math.min(Math.max(progress * maxSteps, 0), maxSteps);

        setActiveIdx(Math.round(idx));

        // Update framer motion value instead of CSS transform
        y.set(187 - Math.round(idx) * ROW_H);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="challenges-wrapper"
      style={{ height: `${items.length * 100}vh` }}
    >
      <section className="challenges-section">
        <div className="glow-background" />

        <div className="challenges-content">
          <span className="challenges-text">
            Time to ditch
          </span>

          <div className="challenges-scroll-wrapper">

            {/* FRAMER MOTION WRAPPER (UI unchanged) */}
            <motion.div
              ref={innerRef}
              className="will-change-transform"
              style={{ y: smoothY }}
            >
              {items.map((text, i) => (
                <div
                  key={i}
                  className="challenges-scroll-item"
                  style={{
                    color: activeIdx === i ? "#000000" : "#373739ff",
                    opacity: activeIdx === i ? 1 : 0.4,
                  }}
                >
                  {text}
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
