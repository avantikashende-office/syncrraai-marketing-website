"use client";

import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  key: string;
  title: string;
  description: string;
  cta?: React.ReactNode;
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
};

export default function AccordionList({
  items,
  active,
  onSelect,
  itemPaddingY = "py-4",
  titleClassName = "text-lg sm:text-xl",
  descriptionClassName = "text-sm sm:text-base",
  icon: Icon = ChevronRight,
  containerClassName = "flex flex-col",
}: AccordionListProps) {
  const handleClick = (key: string) => {
    onSelect(active === key ? "" : key);
  };

  return (
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
            <AnimatePresence>
              {isActive && (
                <motion.div
                  key="progress-border"
                  className="accordion-animation"
                >
                  {/* LINE + CIRCLE WRAPPER */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 4.4, 
                      ease: "easeInOut",
                    }}
                    className="accordion-circle-line-container "
                  >
                    {/* LINE */}
                    <div className="accordion-line" />

                    {/* LEADING CIRCLE */}
                    <span
                      className="accordion-circle"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* HEADER */}
            <div className="accordion-item-content ">
              <p className={`flex-1 ${titleClassName}`}>{item.title}</p>

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
                    className={`accordion-description ${descriptionClassName}`}
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
  );
}
