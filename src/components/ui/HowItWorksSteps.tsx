"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import {
  slideFromLeft,
  slideFromRight,
  spineGlow,
  spineShine,
} from "@/utils/animations";
interface HowItWorksStepProps {
  index: number;
  title: string;
  description: string;
  image: string;
}
export default function HowItWorksStep({
  index,
  title,
  description,
  image,
}: HowItWorksStepProps) {
  const isImageLeft = index % 1 === 0;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-120px 0px -120px 0px",
    once: false,
  });
  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_auto_1fr] gap-14 my-40  items-start"
    >
      {/* LEFT */}
      <div className="flex justify-end">
        {isImageLeft ? (
          <motion.div
            variants={slideFromLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="hiw-card"
          >
            <div className="hiw-step-number top-10 left-20">{index + 1}</div>
            <Image
              src={image}
              alt={title}
              width={520}
              height={320}
              className="rounded-xl object-cover"
            />
          </motion.div>
        ) : (
          <motion.div
            variants={slideFromLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
            className="hiw-text text-right"
          >
            <h3 className="text-2xl">{title}</h3>
            <p className="text-subdescription">{description}</p>
          </motion.div>
        )}
      </div>
      {/* CENTER */}
      <div className="relative flex justify-center self-stretch">
        <motion.div
          className="hiw-spine"
          variants={spineGlow}
          animate={isInView ? "active" : "inactive"}
        />
        <motion.div
          className="absolute top-0 h-24 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent"
          variants={spineShine}
          animate={isInView ? "active" : "inactive"}
        />
        <div className="hiw-sparkle">
          <motion.div
            animate={{ scale: isInView ? 1.5 : 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
            whileInView="animate"
            viewport={{ once: false }}
            className="hiw-card"
          >
            <div className="hiw-step-number top-10 right-20">{index + 1}</div>
            <Image
              src={image}
              alt={title}
              width={520}
              height={320}
              className="rounded-xl object-cover"
            />
          </motion.div>
        ) : (
          <motion.div
            variants={slideFromRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false }}
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
