"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import { slideFromLeft, slideFromRight } from "@/utils/animations";

interface HowItWorksStepProps {
  index: number;
  title: string;
  description: string;
  image: string;
  scrollDir: "up" | "down";
}

export default function HowItWorksStep({
  index,
  title,
  description,
  image,
  scrollDir,
}: HowItWorksStepProps) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "-120px 0px -120px 0px",
    once: false,
  });

  const isImageLeft = index % 1 === 0;

  // 👇 DIRECTION-BASED SHINE
  const shineMotion =
    scrollDir === "down"
      ? { initial: { y: "-30%" }, animate: { y: "130%" } }
      : { initial: { y: "130%" }, animate: { y: "-30%" } };

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_auto_1fr] gap-14 my-40 items-start"
    >
      {/* LEFT */}
      <div className="flex justify-end">
        {isImageLeft ? (
          <motion.div
            variants={slideFromLeft}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="hiw-card"
          >
            {/* <div className="hiw-step-number top-10 left-20">{index + 1}</div> */}
            <Image
              src={image}
              alt={title}
              width={520}
              height={320}
              className="rounded-xl"
            />
          </motion.div>
        ) : (
          <motion.div
            variants={slideFromLeft}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="hiw-text text-right"
          >
            <h3 className="text-2xl">{title}</h3>
            <p className="text-subdescription">{description}</p>
          </motion.div>
        )}
      </div>

      {/* CENTER SPINE */}
      <div className="relative flex justify-center self-stretch">
        {isInView && (
          <motion.div
            key={`${index}-${scrollDir}-${isInView}`}
            className="hiw-spine-shine"
            initial={shineMotion.initial}
            animate={shineMotion.animate}
            transition={{
              duration: 1.8, // 👈 slower & visible
              ease: "easeInOut",
            }}
          />
        )}

        <div className="hiw-sparkle">
          <motion.div
            animate={{ scale: isInView ? 1.4 : 0.9 }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={35} fill="white" className="py-2 bg-black" />
          </motion.div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex justify-start">
        {!isImageLeft ? (
          <motion.div
            variants={slideFromRight}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="hiw-card"
          >
            {/* <div className="hiw-step-number top-10 right-20">{index + 1}</div> */}
            <Image
              src={image}
              alt={title}
              width={520}
              height={320}
              className="rounded-xl"
            />
          </motion.div>
        ) : (
          <motion.div
            variants={slideFromRight}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="hiw-text text-left"
          >
            <h3 className="text-2xl">{title}</h3>
            <p className="text-subdescription">{description}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
