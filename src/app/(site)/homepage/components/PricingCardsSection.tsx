"use client";

import PricingSection from "@/components/shared/PricingSection";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

const PricingCardSection = () => {
  return (
    <section className="section-container space-y-8">
      <div className="flex justify-center">
        <Badge label="PRICING" />
      </div>
      <motion.h1
        className="title-center gradient-gray-text"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        Choose the Right Plan
        <br /> for Your Goals
      </motion.h1>
      <motion.p
        className="subtitle-center"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        Pick the plan that fits your needs today and scales <br />
        effortlessly with your team
      </motion.p>
      <PricingSection />
      <div className="stats-card">
        <div className="flex flex-col text-left">
          <motion.p
            className="text-lg text-white font-medium"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Not sure which plans is for you?
          </motion.p>
          <p className="text-lg text-white">
            Compare Plans to find what’s right for your team.
          </p>
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
