"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";

type ScrollingBadgesProps = {
  itemsTop: string[];
  itemsBottom: string[];
  speed?: number;
  rowGap?: number;
};

export default function ScrollingBadges({
  itemsTop,
  itemsBottom,
  speed = 35,
  rowGap = 40,
}: ScrollingBadgesProps) {
  return (
    <div className="scrolling-container" style={{ gap: rowGap }}>
      <MarqueeRow items={itemsTop} direction="left" speed={speed} />

      <MarqueeRow items={itemsBottom} direction="right" speed={speed} />
    </div>
  );
}


type RowProps = {
  items: string[];
  direction: "left" | "right";
  speed: number;
};

function MarqueeRow({ items, direction, speed }: RowProps) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="scrolling-row">
      <motion.div
        className="scrolling-content"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeated.map((text, i) => (
          <Badge key={i} label={text} variant="plain"/>
        ))}
      </motion.div>
    </div>
  );
}

