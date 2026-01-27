"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInMain, fadeInRight } from "@/utils/animations";
import { InlineNavigation } from "@/components/ui/INlineNavigation";
import { Browsers, Sparkle } from "@phosphor-icons/react";

export function UnifiedOperationsSolutionSection() {
  return (
    <section className="section-bg-gray">
      <div className="section-container space-y-8">
        <div className="flex justify-center">
          <Badge label="ALL IN ONE SOLUTION" />
        </div>

        <motion.h2
          className="title-center"
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
        >
          One Intelligence. Two Paths.
        </motion.h2>

        <motion.p
          className="subtitle-center"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
        >
          Syncrra adapts to your operating model. Choose a full AI-first ERP, or
          add an AI intelligence layer on top of your existing systems.
        </motion.p>

        <InlineNavigation
          items={[
            {
              id: "erp",
              label: "Syncra ERP",
              icon: <Browsers fill="white" size={25} />,
              content: {
                title: "A Modern, AI-First ERP Built for Manufacturing",
                image: "/homepage/1.png",
                features: [
                  "End-to-end manufacturing ERP in one unified system",
                  "Built-in AI for monitoring, forecasting, and operational automation",
                  "Real-time visibility across plants, teams, and workflows",
                  "Faster implementation without heavy customisation or dependency on external tools",
                ],
              },
            },
            {
              id: "ai",
              label: "Syncrra AI Layer",
              icon: <Sparkle fill="white" size={25} />,
              content: {
                title: "AI Layer on Top of Your Existing ERP",
                image: "/homepage/2.png",
                features: [
                  "AI-powered insights from your existing ERP data",
                  "Natural language queries across production and operations",
                  "Anomaly detection, forecasting, and recommendations",
                  "No disruption to current workflows or infrastructure",
                ],
              },
            },
          ]}
        />
      </div>
    </section>
  );
}
