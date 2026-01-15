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
    <section className="section-container relative z-10">
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
              <Counter to={70} />%
            </div>
            <p className="text-xl">Time Saved</p>
            <p className="ai-hero-stat-description">On Manual Data Tasks</p>
          </div>

          {/* STAT 2 */}
          <div className="ai-hero-stat-item">
            <div className="ai-hero-stat-number">
              <Counter to={40} />%
            </div>
            <p className="text-xl">Cost Reduction</p>
            <p className="ai-hero-stat-description">In Operational Overhead</p>
          </div>

          {/* STAT 3 */}
          <div className="ai-hero-stat-item">
            <div className="ai-hero-stat-number">
              <Counter to={10} />x
            </div>
            <p className="text-xl">Faster Decisions</p>
            <p className="ai-hero-stat-description">
              With Real-time Visibility
            </p>
          </div>

          {/* STAT 4 */}
          <div className="ai-hero-stat-item">
            <div className="ai-hero-stat-number">
              <Counter to={99} />%
            </div>
            <p className="text-xl">Data Accuracy</p>
            <p className="ai-hero-stat-description">Automated Validation</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
