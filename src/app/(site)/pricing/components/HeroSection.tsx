"use client";

import PricingSection from "@/components/shared/PricingSection";
import React from "react";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

const HeroSection = () => {
  return (
    <>
      <section className="pricing-hero-bg pt-[100px]">
        <div className="section-container space-y-6 ">
          {/* Heading */}
          <motion.h2
            className="title-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Find the Right Plan for
            <br /> your Business
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="subtitle-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Choose a Plan Tailored to Your Business Needs
          </motion.p>

          <PricingSection />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
