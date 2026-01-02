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
      title: "One Platform, Not Many Tools",
      description:
        "A single, unified ERP that connects everything—finance, sales, HR, inventory, and operations.",
      before:
        "Data scattered across spreadsheets, accounting tools, HR software, and emails.",
    },
    {
      icon: "Check",
      title: "Automation that Saves Time",
      description:
        "AI automates invoicing, approvals, reporting, tracking—freeing teams to focus on growth.",
      before: "Manual entries, approvals, reconciliations, and follow-ups.",
    },
    {
      icon: "Check",
      title: "Real-Time Visibility",
      description:
        "Live dashboards and AI insights that show exactly what’s happening in your business right now.",
      before: "Decisions based on outdated reports and guesswork.",
    },
    {
      icon: "Check",
      title: "Scales as You Grow",
      description:
        "Start small, scale effortlessly. Syncra adapts as your team, customers, and operations grow.",
      before: "Outgrowing tools and switching systems every few years.",
    },
    {
      icon: "Check",
      title: "Easy for Non-Technical Teams",
      description:
        "Intuitive, clean interface designed for everyday users—not just experts.",
      before: "Complex ERP systems that need training and IT support.",
    },
    {
      icon: "Check",
      title: "Faster, Smarter Decisions",
      description:
        "AI-powered recommendations help you plan, predict, and act with confidence.",
      before: "Delayed insights and reactive decision-making.",
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
            Small & Growing Businesses
          </motion.h1>
        </div>

        <motion.p
          className="subtitle-side"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Challenges small businesses face and how Syncra fixes them
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
