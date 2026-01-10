"use client";

import Card from "@/components/ui/Card";
import PainPointsCard from "@/components/ui/PainPointsCard";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import { Check, LucideIcon } from "lucide-react";
export default function PainPoints() {
  const iconMap: Record<string, LucideIcon> = {
    Check: Check,
  };

  const PAIN_POINTS = [
    {
      icon: "Check",
      title: "Unified Operations Across Teams",
      description:
        "Finance, production, procurement, quality, and inventory operate on one connected system.",
      before:
        "Siloed departments using disconnected tools and manual handoffs.",
    },
    {
      icon: "Check",
      title: "Process Automation at Scale",
      description:
        "Automate approvals, reporting, production tracking, and exception handling across plants.",
      before: "Manual coordination, bottlenecks, and delayed escalations.",
    },
    {
      icon: "Check",
      title: "Cross-Plant Visibility",
      description:
        "Real-time dashboards showing performance, output, quality, and downtime across locations.",
      before: "Plant-level reports with no consolidated operational view.",
    },
    {
      icon: "Check",
      title: "AI-Driven Operational Insights",
      description:
        "Predict delays, detect inefficiencies, and surface risks before they impact commitments.",
      before: "Reactive firefighting after issues already affect customers.",
    },
    {
      icon: "Check",
      title: "Configurable by Design",
      description:
        "Adapt workflows, roles, and processes without ERP re-implementation cycles.",
      before: "Expensive consultants and rigid system constraints.",
    },
    {
      icon: "Check",
      title: "Built to Grow With You",
      description:
        "Supports increasing volume, SKUs, users, and facilities without performance loss.",
      before: "Outgrowing tools and constantly patching systems.",
    },
  ];

  return (
    <section className="section-container">
      <div className="space-y-8">
        <div className="space-y-2">
          <motion.h1
            className="gradient-gray-text title-side"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Pain Points Solved for <br />
            Mid-Size Manufacturers
          </motion.h1>
        </div>

        <motion.p
          className="subtitle-side"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Where complexity increases Syncrra brings clarity, control, and
          intelligence.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
        {PAIN_POINTS.map((item, index) => (
          <PainPointsCard
            key={index}
            icon={iconMap[item.icon]}
            title={item.title}
            description={item.description}
            beforeDescription={item.before}
          />
        ))}
      </div>
    </section>
  );
}
