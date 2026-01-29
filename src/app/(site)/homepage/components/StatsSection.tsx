"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import { ArrowUp, ArrowDown } from "lucide-react";

const Counter = dynamic(() => import("@/components/ui/Counter"), {
  ssr: false,
});

export default function StatsSection() {
  return (
    <section className="section-container relative z-10 space-y-10">
      {/* <p className="stat-title  gradient-text">
        Syncrra brings your operations into one intelligent system. <br />
        From gate entry to billing, every action is connected, traceable, and
        driven by real-time intelligence.
      </p> */}
      <motion.div
        className="stats-card "
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="ai-hero-stats-grid">
          {/* STAT 1 */}
          <div className="ai-hero-stat-item">
            <div className="ai-hero-stat-number">
              <Counter to={65} />%
            </div>
            <p className="text-xl">Reduction in Manual Effort</p>
            <p className="ai-hero-stat-description">
              Across approvals, reporting, and inter-team follow-ups
            </p>
          </div>

          {/* STAT 2 */}
          <div className="ai-hero-stat-item">
            <div className="ai-hero-stat-number">
              <Counter to={8} />x
            </div>
            <p className="text-xl">Faster Decision-Making</p>
            <p className="ai-hero-stat-description">
              With real-time operational visibility and AI-driven insights
            </p>
          </div>

          {/* STAT 3 */}
          <div className="ai-hero-stat-item">
            <div className="ai-hero-stat-number">
              <Counter to={35} />%
            </div>
            <p className="text-xl">Lower Operational Overheads</p>
            <p className="ai-hero-stat-description">
             Through controlled inventory, fewer errors, and automated workflows
            </p>
          </div>

          {/* STAT 4 */}
          <div className="ai-hero-stat-item">
            <div className="ai-hero-stat-number">
              <Counter to={99} />%
            </div>
            <p className="text-xl">Data Accuracy</p>
            <p className="ai-hero-stat-description">
              Enabled by scan-based tracking and approval-driven validation
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
