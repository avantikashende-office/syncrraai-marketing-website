"use client";

import { fadeInLeft, fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
type Feature = { text: string };

type FeatureListProps = {
  title: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
  imageClassName?: string;
  listClassName?: string;
  reverse?: boolean; // toggles image left / right
};

export function FeatureList({
  title,
  features,
  imageSrc,
  imageAlt,
  imageClassName = "",
  listClassName = "",
  reverse = false,
}: FeatureListProps) {
  const Content = (
    <div className="split-pane">
      <motion.h3
        variants={fadeInLeft}
        initial="initial"
        whileInView="animate"
        className="split-title title-side gradient-gray-text"
      >
        {title}
      </motion.h3>

      <ul className={`ai-feature-list ${listClassName}`}>
        {features.map((feature, index) => (
          <motion.li
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            key={index}
            className="ai-feature-item"
          >
            <div className="ai-feature-check-icon">
              <Check className="text-white text-sm" />
            </div>
            <p className="text-description">{feature.text}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );

  const Media = (
    <div className="split-media">
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        className="split-media-frame"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`split-media-img ${imageClassName}`}
          priority
        />
      </motion.div>
    </div>
  );

  return (
    <div className="content-wrap">
      <div className="split-block">
        {reverse ? (
          <>
            {Media}
            {Content}
          </>
        ) : (
          <>
            {Content}
            {Media}
          </>
        )}
      </div>
    </div>
  );
}
