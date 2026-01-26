"use client";

import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import Badge from "@/components/ui/Badge";
import Counter from "@/components/ui/Counter";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pricing-hero-bg">
      <section className="relative z-10 ">
        {/* TEXT */}
        <div className="ai-hero-content">
          <div className="flex justify-center">
            <Badge icon={<Sparkles fill="white" />} label="AI Intelligence" />
          </div>

          <motion.h2
            className="title-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Intelligence That Works <br /> Around the Clock
          </motion.h2>

          <motion.p
            className="subtitle-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Real-time AI that monitors production, predicts issues, <br />
            and drives smarter decisions 24/7.
          </motion.p>
        </div>
      </section>

        <div className="w-fill my-110">
          <Image
            src="/img/features.svg"
            alt="AI Intelligence Dashboard"
            fill
            className="object-contain "
            priority
          />
        </div>

      {/* STATS (CONSTRAINED AGAIN) */}
      <div className="ai-hero-stats-wrapper">
        <section className="ai-hero-stats-container">
          <motion.div
            className="stats-card"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            <div className="ai-hero-stats-grid">
              <div className="ai-hero-stat-item">
                <h3 className="ai-hero-stat-number">
                  <Counter to={30} />%
                </h3>
                <p className="text-xl">Reduced in Unplanned Downtime</p>
                <p className="ai-hero-stat-description">
                  Early anomaly detection prevents production breakdowns
                </p>
              </div>

              <div className="ai-hero-stat-item">
                <h3 className="ai-hero-stat-number">
                  <Counter to={2} />X
                </h3>
                <p className="text-xl">Faster Decision Making Cycles</p>
                <p className="ai-hero-stat-description">
                  Real-time insights enable instant operational action
                </p>
              </div>

              <div className="ai-hero-stat-item">
                <h3 className="ai-hero-stat-number">
                  <Counter to={2} />+ Days
                </h3>
                <p className="text-xl">Saved Per Week Per Plant</p>
                <p className="ai-hero-stat-description">
                  AI automates logs, reports, approvals seamlessly
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
