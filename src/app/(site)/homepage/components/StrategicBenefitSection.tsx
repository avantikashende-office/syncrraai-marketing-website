"use client";

import dynamic from "next/dynamic";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const ScrollingBadges = dynamic(
  () => import("@/components/ui/ScrollingBadges"),
  { ssr: false },
);
import { Workflow, LayoutGrid, Shield, Zap, LucideIcon } from "lucide-react";
import {
  ChartBar,
  Gear,
  LegoSmiley,
  Lightning,
  Lock,
  RocketLaunch,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/utils/animations";

export function StrategicBenefitsSection() {
  const iconMap: Record<string, LucideIcon> = {
    workflow: Workflow,
    grid: LayoutGrid,
    logoSmile: LegoSmiley,
    gear: Gear,
    chartBar: ChartBar,
    rocket: RocketLaunch,
    lock: Lock,
    lightning: Lightning,
  };

  const BENEFITS = [
    {
      icon: "logoSmile",
      title: "AI-Driven Insights",
      description:
        "Turn live operational data into clear insights. Ask questions in natural language and get instant summaries, trends, and visual answers—without navigating multiple modules or reports.",
    },
    {
      icon: "gear",
      title: "Workflow Automation",
      description:
        "Automate approvals, handoffs, and validations across inventory, production, quality, dispatch, and billing—reducing manual follow-ups and operational delays.",
    },
    {
      icon: "chartBar",
      title: "Customizable Dashboards",
      description:
        "Build role-based dashboards that show exactly what matters to each user—from plant performance and inventory health to dispatch status and financial metrics.",
    },
    {
      icon: "rocket",
      title: "Scalable and Adaptive",
      description:
        "Designed for growing and complex operations. Easily scale across plants, warehouses, and teams while maintaining centralized control and local flexibility.",
    },
    {
      icon: "lock",
      title: "Secure and Centralized",
      description:
        "Enforce who can see, act, approve, and get notified at every step. Syncrra’s role-based security and activity trails keep operations secure and audit-ready.",
    },
    {
      icon: "lightning",
      title: "Maximum Operational Efficiency",
      description:
        "Reduce errors, prevent rework, and eliminate bottlenecks with system-enforced processes that keep teams aligned and operations moving without manual intervention.",
    },
  ];

  return (
    <section>
      <div className="section-container space-y-8">
        {/* Badge */}
        <div className="flex justify-center">
          <Badge label="BENEFITS" />
        </div>

        {/* Heading */}
        <motion.h1
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
          className=" gradient-gray-text title-center"
        >
          Empower Your Business with <br /> Intelligent ERP Automation
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
          className="subtitle-center"
        >
          Syncrra helps manufacturing and operations teams eliminate manual
          coordination, enforce process discipline, and gain real-time
          visibility across every function - all through one connected ERP
          platform.
        </motion.p>

        {/* GRID */}
        <div className="benefits-grid">
          {BENEFITS.map((benefit, index) => (
            <Card
              key={index}
              icon={iconMap[benefit.icon]}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
      <div className="pb-10">
        <ScrollingBadges
          itemsTop={[
            "Operational Intelligence",
            "Workflow Automation",
            "End-to-End Visibility",
            "Approval-Driven Processes",
            "Real-Time Insights",
            "Process Discipline",
            "Data-Backed Decisions",
            "Connected Operations",
            "Zero Manual Coordination",
            "Audit-Ready Systems",
          ]}
          itemsBottom={[
            "Role-Based Control",
            "Smart Manufacturing",
            "Predictive Operations",
            "System-Enforced Workflows",
            "Inventory Accuracy",
            "Production Transparency",
            "Dispatch Precision",
            "Financial Alignment",
            "Scalable Architecture",
            "Enterprise-Grade Security",
          ]}
          speed={90}
        />
      </div>
    </section>
  );
}
