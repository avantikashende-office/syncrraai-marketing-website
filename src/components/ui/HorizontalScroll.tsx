"use client";

import { ReactNode } from "react";

interface HorizontalScrollProps {
  children: ReactNode;
}

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  return (
    <div className="horizontal-scroll-wrapper">
      <div className="horizontal-scroll-track">{children}</div>
    </div>
  );
};

export default HorizontalScroll;
