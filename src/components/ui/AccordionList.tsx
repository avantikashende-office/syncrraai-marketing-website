"use client";

import { ArrowUpRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

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
  itemPaddingY = "py-6",
  titleClassName = "text-2xl",
  descriptionClassName = "text-description",
  icon: Icon = ChevronRight,
  containerClassName = "flex flex-col max-w-lg",
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
                <motion.span
                  key="border-sweep"
                  initial={{
                    backgroundPositionX: "-50%",
                    opacity: 0,
                  }}
                  animate={{
                    backgroundPositionX: [
                      "-50%", 
                      "200%", 
                      "-50%", 
                    ],
                    opacity: [
                      0,
                      1, 
                      1, 
                    ],
                  }}
                  transition={{
                    duration: 1.6,
                    times: [0, 0.7, 1],
                    ease: "easeInOut",
                  }}
                  className="
        pointer-events-none
        absolute
        left-0
        right-0
        h-[2px]
      "
                  style={{
                    bottom: "0px",
                    backgroundImage:
                      "linear-gradient(90deg, transparent 0%, #22c55e 50%, transparent 100%)",
                    backgroundSize: "50% 100%",
                    backgroundRepeat: "no-repeat",
                    filter: "blur(1.5px)",
                  }}
                />
              )}
            </AnimatePresence>

            {/* HEADER */}
            <div className="accordion-item-content">
              <p className={titleClassName}>{item.title}</p>

              <motion.span
                animate={{ rotate: isActive ? 90 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <Icon />
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

                  {item.cta ? (
                    item.cta
                  ) : (
                    <Button variant="outline">
                      Learn More
                      <ArrowUpRight className="ml-2" size={20} />
                    </Button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
