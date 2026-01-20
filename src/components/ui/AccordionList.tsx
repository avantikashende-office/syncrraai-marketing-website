"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  key: string;
  title: string;
  description: string;
  cta?: React.ReactNode;
  image?: string;
  imageAlt?: string;
};

type AccordionListProps = {
  items: Item[];
  active: string;
  onSelect: (key: string) => void;
  itemPaddingY?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  icon?: React.ComponentType<{ className?: string; size?: number }>;
  containerClassName?: string;
  showImage?: boolean;
  imageClassName?: string;
  wrapperClassName?: string;
  autoNext?: boolean;
  autoNextDuration?: number;
  showRunnerLine?: boolean;
};

export default function AccordionList({
  items,
  active,
  onSelect,
  itemPaddingY = "py-4",
  titleClassName = "text-lg sm:text-xl",
  descriptionClassName = "my-3",
  icon: Icon = ChevronRight,
  containerClassName = "",
  showImage = false,
  imageClassName = "",
  wrapperClassName = "",
  autoNext = false,
  autoNextDuration = 3000,
  showRunnerLine = false,
}: AccordionListProps) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [inView, setInView] = React.useState(false);

  const handleClick = (key: string) => {
    if (active === key) {
      onSelect(items[0]?.key || key);
      return;
    }
    onSelect(key);
  };

  const activeItem = items.find((i) => i.key === active);
  const activeImage = activeItem?.image;

  useEffect(() => {
    if (!autoNext || items.length <= 1 || !inView) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      const currentIndex = items.findIndex((i) => i.key === active);
      if (currentIndex === -1) return;

      const nextIndex = (currentIndex + 1) % items.length;
      onSelect(items[nextIndex].key);
    }, autoNextDuration);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active, autoNext, autoNextDuration, items, onSelect, inView]);

  return (
    <motion.div
      className={wrapperClassName}
      viewport={{ amount: 0.35, once: false }}
      onViewportEnter={() => setInView(true)}
      onViewportLeave={() => setInView(false)}
    >
      {/* If showImage => split layout like Journey */}
      {showImage ? (
        <div className="split-block">
          {/* LEFT – Accordion (split-pane) */}
          <div className="split-pane-left-aligned">
            <div className={containerClassName}>
              {items.map((item) => {
                const isActive = active === item.key;

                return (
                  <div
                    key={item.key}
                    onClick={() => handleClick(item.key)}
                    className={`accordion-item relative ${itemPaddingY}`}
                    style={{
                      ["--sweep-height" as any]: "3px",
                      ["--sweep-offset" as any]: "-4px",
                      ["--sweep-blur" as any]: "0px",
                    }}
                  >
                    {showRunnerLine && (
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            key="progress-border"
                            className="accordion-animation"
                          >
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{
                                duration: autoNextDuration / 1000,
                                ease: "easeInOut",
                              }}
                              className="accordion-circle-line-container"
                            >
                              <div className="accordion-line" />
                              {/* <span className="accordion-circle" /> */}
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {/* HEADER */}
                    <div className="accordion-item-content">
                      <p className={` ${titleClassName}`}>{item.title}</p>

                      <motion.span
                        animate={{ rotate: isActive ? 90 : 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="shrink-0 mt-1"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.span>
                    </div>

                    {/* CONTENT */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                          className="overflow-hidden space-y-6"
                        >
                          <p
                            className={`text-subdescription ${descriptionClassName}`}
                          >
                            {item.description}
                          </p>

                          {/* MOBILE IMAGE (below description) */}
                          {item.image && (
                            <div className="block lg:hidden">
                              <AnimatePresence mode="wait">
                                <motion.div
                                  key={item.image}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                  }}
                                  className="w-full"
                                >
                                  <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl">
                                    <Image
                                      src={item.image}
                                      alt={
                                        item.imageAlt ||
                                        item.title ||
                                        "Accordion image"
                                      }
                                      fill
                                      className={imageClassName}
                                      sizes="100vw"
                                    />
                                  </div>
                                </motion.div>
                              </AnimatePresence>
                            </div>
                          )}

                          {item.cta && item.cta}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT – Dynamic Image (split-media) */}
          <div className="media hidden lg:block">
            <div className="media-frame">
              <AnimatePresence mode="wait">
                {activeImage && (
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeImage}
                      alt={
                        activeItem?.imageAlt ||
                        activeItem?.title ||
                        "Accordion image"
                      }
                      fill
                      className={`media-img rounded-xl ${imageClassName}`}
                      sizes="(max-width: 1024px) 100vw, 600px"
                      priority
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      ) : (
        <div className={containerClassName}>
          {items.map((item) => {
            const isActive = active === item.key;

            return (
              <div
                key={item.key}
                onClick={() => handleClick(item.key)}
                className={`accordion-item relative ${itemPaddingY}`}
                style={{
                  ["--sweep-height" as any]: "3px",
                  ["--sweep-offset" as any]: "-4px",
                  ["--sweep-blur" as any]: "0px",
                }}
              >
                {showRunnerLine && (
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key="progress-border"
                        className="accordion-animation"
                      >
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: autoNextDuration / 1000,
                            ease: "easeInOut",
                          }}
                          className="accordion-circle-line-container"
                        >
                          <div className="accordion-line" />
                          {/* <span className="accordion-circle" /> */}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* HEADER */}
                <div className="accordion-item-content">
                  <p className={` ${titleClassName}`}>{item.title}</p>

                  <motion.span
                    animate={{ rotate: isActive ? 90 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="shrink-0 mt-1"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.span>
                </div>

                {/* CONTENT */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden space-y-6"
                    >
                      <p
                        className={`text-subdescription ${descriptionClassName}`}
                      >
                        {item.description}
                      </p>

                      {item.cta && item.cta}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
}
