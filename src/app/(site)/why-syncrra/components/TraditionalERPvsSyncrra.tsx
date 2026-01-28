"use client";

import ComparisonTable, { Row } from "@/components/ui/Comparisontable";
import { fadeInMain, fadeInRight } from "@/utils/animations";
import { motion } from "framer-motion";

export default function TradiionalERPvsSyncrra() {
  const comparisonData: Row[] = [
    {
      feature: "System Migration",
      leftText: "Forced to switch systems as you grow",
      rightText: "One platform that scales with you",
      leftStatus: "bad",
      rightStatus: "good",
    },
    {
      feature: "Implementation Time",
      leftText: "6-18 months per industry size",
      rightText: "Days to get started, scales instantly",
      leftStatus: "bad",
      rightStatus: "good",
    },
    {
      feature: "Customization",
      leftText: "Rigid, one-size-fits-all approach",
      rightText: "Adaptive workflows for any size",
      leftStatus: "bad",
      rightStatus: "good",
    },
    {
      feature: "Data Integration",
      leftText: "Siloed across different systems",
      rightText: "Unified data across all growth stages",
      leftStatus: "bad",
      rightStatus: "good",
    },
    {
      feature: "Cost Structure",
      leftText: "Pay for features you don't need",
      rightText: "Pay for what you use, scale as you grow",
      leftStatus: "bad",
      rightStatus: "good",
    },
    {
      feature: "Training Requirements",
      leftText: "Retrain team with each new system",
      rightText: "Learn once, use forever",
      leftStatus: "bad",
      rightStatus: "good",
    },
    {
      feature: "Agentic AI Dashboard",
      leftText: "Does not have",
      rightText: "----------------",
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
          className="subtitle-center"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
        >
          Most ERPs force you to choose between systems built for small, medium,
          <br />
          or large businesses. We built one platform that grows with you.
        </motion.p>

        <ComparisonTable rows={comparisonData} />
      </div>
    </section>
  );
}
