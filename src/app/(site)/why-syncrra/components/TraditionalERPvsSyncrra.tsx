"use client";

import ComparisonTable, { Row } from "@/components/ui/Comparisontable";
import { fadeInMain, fadeInRight } from "@/utils/animations";
import { motion } from "framer-motion";

export default function TradiionalERPvsSyncrra() {
  const comparisonData: Row[] = [
  {
    feature: "System Migration",
    leftText: "Forced to switch systems as your business grows",
    rightText: "One platform that scales seamlessly from startup to enterprise",
    leftStatus: "bad",
    rightStatus: "good",
  },
  {
    feature: "Implementation Time",
    leftText: "6–18 months depending on size and complexity",
    rightText: "Go live in days, not months. Scale instantly as operations expand",
    leftStatus: "bad",
    rightStatus: "good",
  },
  {
    feature: "Customization",
    leftText: "Rigid, one-size-fits-all workflows",
    rightText: "Adaptive workflows that adjust to your processes, teams, and scale",
    leftStatus: "bad",
    rightStatus: "good",
  },
  {
    feature: "Data Integration",
    leftText: "Data fragmented across modules and third-party tools",
    rightText: "Unified data layer with end-to-end visibility across operations",
    leftStatus: "bad",
    rightStatus: "good",
  },
  {
    feature: "Cost Structure",
    leftText: "Pay upfront for features you may never use",
    rightText: "Pay only for what you need. Add capabilities as you grow",
    leftStatus: "bad",
    rightStatus: "good",
  },
  {
    feature: "Training Requirements",
    leftText: "Teams must retrain with every upgrade or system change",
    rightText: "Learn once. The platform evolves without disrupting users",
    leftStatus: "bad",
    rightStatus: "good",
  },
  {
    feature: "Agentic AI Dashboards",
    leftText:
      "Not available. Static dashboards and manual report creation",
    rightText:
      "AI-generated dashboards and reports built from your data, on demand. Ask questions in natural language. Get insights instantly. Take action faster.",
    leftStatus: "bad",
    rightStatus: "good",
  },
];

  return (
    <section className="section-container">
      <div className="space-y-8">
        <div className="space-y-2">
          <motion.h1
            className="gradient-gray-text title-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Why Traditional ERPs Hold You Back
          </motion.h1>
        </div>

        <motion.p
          className="subtitle-center !max-w-[clamp(280px,90vw,800px)]
"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
        >
          Most ERP systems force you to choose between tools built for small,
          mid-size, or large enterprises. Syncrra is designed as a single,
          AI-first manufacturing ERP that grows with you, without migrations,
          re-implementation, or operational disruption.
        </motion.p>

        <ComparisonTable rows={comparisonData} />
      </div>
    </section>
  );
}
