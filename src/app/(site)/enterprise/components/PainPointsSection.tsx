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
      title: "End-to-End Operational Intelligence",
      description:
        "Single source of truth across plants, regions, and business units.",
      before: "Fragmented ERP instances and inconsistent operational data.",
    },
    {
      icon: "Check",
      title: "AI-Driven Decision Support",
      description:
        "Always-on intelligence monitors production, quality, inventory, and supply chain signals.",
      before: "Lagging insights dependent on reports and analyst cycles.",
    },
    {
      icon: "Check",
      title: "Advanced Workflow Orchestration",
      description:
        "Automate multi-level approvals, escalations, and compliance-driven processes.",
      before: "Rigid workflows requiring constant manual intervention.",
    },
    {
      icon: "Check",
      title: "Enterprise Performance Monitoring",
      description:
        "Track KPIs, SLAs, downtime, and yield across hundreds of machines and plants.",
      before: "Disconnected MES, BI tools, and reporting layers.",
    },
    {
      icon: "Check",
      title: "Security, Compliance & Governance",
      description:
        "Role-based access, audit trails, and strict data isolation across teams and regions.",
      before: "Complex permission models spread across multiple systems.",
    },
    {
      icon: "Check",
      title: "Future-Ready Architecture",
      description:
        "Designed to support AI adoption, expansion, and operational transformation.",
      before: "Legacy ERPs slowing innovation and operational change.",
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
            Large and Enterprise Manufacturers
          </motion.h1>
        </div>

        <motion.p
          className="subtitle-side"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Enterprise-grade control, intelligence, and scalability without
          enterprise complexity.
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
