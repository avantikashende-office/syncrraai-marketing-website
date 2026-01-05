"use client";

import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import Badge from "@/components/ui/Badge";
import Counter from "@/components/ui/Counter";
import Image from "next/image";
import { Sparkle, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="pricing-hero-bg">
      <section className="relative z-10 ">
        {/* TEXT */}
        <div className="space-y-6 text-center max-w-4xl mx-auto pt-[200px]">
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

      <div className="h-[420px] w-fill pointer-events-none flex justify-center">
        <div className="w-fill">
          <Image
            src="/img/AI-hero.png"
            alt="AI Intelligence Dashboard"
            fill
            className="object-contain "
            priority
          />
        </div>
      </div>

      {/* STATS (CONSTRAINED AGAIN) */}
      <div className="flex justify-center pb-20">
        <section className="mx-auto px-[5%] max-w-[90%]">
          <motion.div
            className="stats-card"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-3">
                <h3 className="text-5xl font-bold gradient-text">
                  <Counter to={30} />%
                </h3>
                <p className="text-xl">Reduced in Unplanned Downtime</p>
                <p className="testimonial-user-role max-w-[70%] mx-auto md:mx-0">
                  Early anomaly detection prevents production breakdowns
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-5xl font-bold gradient-text">
                  <Counter to={2} />X
                </h3>
                <p className="text-xl">Faster Decision Making Cycles</p>
                <p className="testimonial-user-role max-w-[70%] mx-auto md:mx-0">
                  Real-time insights enable instant operational action
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-5xl font-bold gradient-text">
                  <Counter to={2} />+ Days
                </h3>
                <p className="text-xl">Saved Per Week Per Plant</p>
                <p className="testimonial-user-role max-w-[70%] mx-auto md:mx-0">
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
