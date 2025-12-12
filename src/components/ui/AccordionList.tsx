"use client";

import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Item = {
  key: string;
  title: string;
  description: string;
};

type AccordionListProps = {
  items: Item[];
  active: string;
  onSelect: (key: string) => void;

  // OPTIONAL OVERRIDES
  itemPaddingY?: string;           // default py-6
  titleClassName?: string;         // default text-2xl
  descriptionClassName?: string;   // default text-description
  icon?: React.ComponentType<{ className?: string; size?: number }>; // optional icon override

  containerClassName?: string;     // NEW → override container wrapper
};

export default function AccordionList({
  items,
  active,
  onSelect,
  itemPaddingY = "py-6",
  titleClassName = "text-2xl",
  descriptionClassName = "text-description",
  icon: Icon = ChevronRight,
  containerClassName = "flex flex-col max-w-xl pl-26", // default
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
            className={`accordion-item group ${itemPaddingY}`}
          >
            <div className="accordion-item-content">
              <p className={`${titleClassName}`}>{item.title}</p>

              <motion.span
                animate={{ rotate: isActive ? 90 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <Icon />
              </motion.span>
            </div>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.28,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <p className={`accordion-description ${descriptionClassName}`}>
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
