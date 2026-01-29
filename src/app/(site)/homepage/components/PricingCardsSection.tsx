"use client";

import PricingSection from "@/components/shared/PricingSection";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
} from "@/utils/animations";

const PricingCardSection = () => {
  return (
    <section className="section-container space-y-8">
      <div className="flex justify-center">
        <Badge label="PRICING" />
      </div>
      <motion.h1
        className="title-center gradient-gray-text"
        variants={fadeInLeft}
        initial="initial"
        whileInView="animate"
      >
        Choose the Right Plan
        <br /> for Your Goals
      </motion.h1>
      <motion.p
        className="subtitle-center"
        variants={fadeInRight}
        initial="initial"
        whileInView="animate"
      >
        Select a plan that fits your current needs and scales smoothly as your
        teams, plants, and operations grow.
      </motion.p>
      <PricingSection />
      <div className="stats-card">
        <div className="flex flex-col text-left">
          <motion.p
            className="text-lg text-white font-medium"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
          >
            Not sure which plan is right for you? <br /> Compare plans to find
            the best fit for your team and operations.
          </motion.p>
        </div>
        <div className="flex items-center gap-6">
          <Button variant="opposite">Compare Plans</Button>
          <Button variant="outline">
            Contact Sales <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingCardSection;
