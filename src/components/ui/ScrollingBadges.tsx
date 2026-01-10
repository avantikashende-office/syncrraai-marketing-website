"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";

type ScrollingBadgesProps = {
  itemsTop: string[];
  itemsBottom: string[];
  speed?: number;
  rowGap?: number;
  variant?: "default" | "plain" | "outline" | "transparent";
};

export default function ScrollingBadges({
  itemsTop,
  itemsBottom,
  speed = 35,
  rowGap = 40,
  variant = "plain", 
}: ScrollingBadgesProps) {
  return (
    <div className="scrolling-container" style={{ gap: rowGap }}>
      <MarqueeRow
        items={itemsTop}
        direction="left"
        speed={speed}
        variant={variant}
      />
      <MarqueeRow
        items={itemsBottom}
        direction="right"
        speed={speed}
        variant={variant}
      />
    </div>
  );
}

type RowProps = {
  items: string[];
  direction: "left" | "right";
  speed: number;
  variant?: "default" | "plain" | "outline" | "transparent";
};

function MarqueeRow({ items, direction, speed, variant }: RowProps) {
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
          // Now using the variant prop passed from the parent
          <Badge key={i} label={text} variant={variant} />
        ))}
      </motion.div>
    </div>
  );
}
