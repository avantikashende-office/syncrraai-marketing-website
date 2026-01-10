"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import ScrollingBadges from "@/components/ui/ScrollingBadges";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const onScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      setActiveIdx(Math.round(progress * (items.length - 1)));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const rawIndex = useMotionValue(0);
  const [activeIdx, setActiveIdx] = useState(0);

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
      style={{ height: isMobile ? "auto" : `${items.length * 100}vh` }}
    >
      <section className="challenges-section">
        {isMobile ? (
          <>
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black/30 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black/30 to-transparent" />
          </>
        ) : null}

        <div className="glow-background" />

        <div className="challenges-content">
          {!isMobile ? (
            <motion.span
              className="challenges-text"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              Time to ditch
            </motion.span>
          ) : (
            " "
          )}

          {!isMobile ? (
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
                    animate={{
                      y: y,
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
          ) : (
            <div className="mobile-view-wrapper">
              <ScrollingBadges
                itemsTop={items.slice(0, 3)}
                itemsBottom={items.slice(3)}
                variant="transparent"
                speed={40}
                rowGap={120} 
              />

              <motion.span
                className="challenges-text mobile-overlay-text"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Time to ditch
              </motion.span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
