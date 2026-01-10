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

export interface InlineNavVideo {
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
}

export interface InlineNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  content?: InlineNavContent;
  video?: InlineNavVideo;
}

interface InlineNavigationProps {
  items: InlineNavItem[];
}

export function InlineNavigation({ items }: InlineNavigationProps) {
  const [active, setActive] = useState(items[0].id);
  const activeIndex = items.findIndex((item) => item.id === active);
  const activeItem = items[activeIndex];

  return (
    <div className="inline-nav-wrapper">
      {/* NAV */}
      <div className="inline-nav">
        <div
          className="inline-nav-grid"
          style={{
            gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`,
          }}
        >
          {items.map((item) => {
            const isActive = item.id === active;

            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className="inline-nav-button"
              >
                <motion.div
                  animate={{ scale: isActive ? 1.06 : 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 28 }}
                  className="inline-nav-icon"
                >
                  <div>{item.icon}</div>
                </motion.div>

                <span className="inline-nav-label">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* INDICATOR */}
        <div className="inline-nav-indicator">
          <div className="inline-nav-divider" />

          <motion.div
            className="inline-nav-active-bar"
            style={{ width: `${100 / items.length}%` }}
            initial={false}
            animate={{ left: `${activeIndex * (100 / items.length)}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="inline-nav-content"
      >
        {activeItem.content && (
          <div className="inline-nav-content-inner">
            <h3 className="inline-nav-title gradient-gray-text">
              {activeItem.content.title}
            </h3>

            <div className="inline-nav-body">
              <ul className="inline-nav-features">
                {activeItem.content.features.map((feature) => (
                  <li key={feature} className="inline-nav-feature">
                    <div className="inline-nav-feature-icon">
                      <Check className="w-4 h-4" />
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
                className="inline-nav-image"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
