"use client";

import { Column } from "@/components/ui/BusinessLevels";
import BusinessLevels from "@/components/ui/BusinessLevels";
import { fadeInMain, fadeInRight } from "@/utils/animations";
import { BuildingOffice, CurrencyDollar, FlowArrow, Shield, Storefront, Users } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  DollarSign,
  Briefcase,
  TrendingUp,
  Layers,
  Zap,
  Database,
  Building2,
  BarChart3,
  ShieldCheck,
  Store,
  Factory,
  Waypoints,
} from "lucide-react";
export default function BusinessSize() {
  const data: Column[] = [
    {
      level: "small",
      items: [
        {
          title: "Early-Stage & Growing Teams",
          icon: <Storefront size={25} />,
          isHeader: true,
        },
        {
          title: "Start Smart, Scale Confidently",
          description:
            "Syncrra delivers an AI-first manufacturing ERP without heavy upfront investment. Activate only what you need today, with confidence the platform will scale as your business grows.",
          icon: <CurrencyDollar size={25} />,
        },
        {
          title: "Automation That Reduces Manual Effort",
          description:
            "When teams are small, time matters. Syncrra automates job tracking, approvals, inventory updates, and reporting to reduce manual work and keep operations organised.",
          icon: <Briefcase size={25} />,
        },
        {
          title: "Move Beyond Manual Tracking",
          description:
            "Spreadsheets stop working as complexity increases. Syncrra replaces fragmented tracking with real-time visibility, structured workflows, and intelligent dashboards.",
          icon: <TrendingUp size={25} />,
        },
      ],
    },

    {
      level: "mid",
      items: [
        {
          title: "Scaling & Mid-Growth Businesses",
          icon: <FlowArrow size={25} />,
          isHeader: true,
        },
        {
          title: "Scale Without System Disruptions",
          description:
            "Growth should not force a system change. Syncrra scales across users, volumes, and processes without migrations or downtime.",
          icon: <Zap size={25} />,
        },
        {
          title: "Close Operational Gaps",
          description:
            "Disconnected tools slow execution. Syncrra unifies production planning, procurement, quality, and approvals into a single workflow-driven system.",
          icon: <Users size={25} />,
        },
        {
          title: "One Source of Truth Across Teams",
          description:
            "Data silos create confusion. Syncrra connects teams on one platform with consistent, real-time data across departments.",
          icon: <Shield size={25} />,
        },
      ],
    },

    {
      level: "enterprise",
      items: [
        {
          title: "Large & Enterprise Operations",
          icon: <BuildingOffice size={25} />,
          isHeader: true,
        },
        {
          title: "Centralised Control Across Locations",
          description:
            "Manage multi-plant, multi-location, and multi-currency operations with central visibility and local execution control.",
          icon: <Building2 size={25} />,
        },
        {
          title: "Intelligence That Supports Decisions",
          description:
            "Syncrra combines real-time data with Agentic AI to generate insights, forecasts, and dynamically created dashboards for faster, informed decisions.",
          icon: <BarChart3 size={25} />,
        },
        {
          title: "Enterprise-Ready by Design",
          description:
            "Built for complex environments with role-based access, audit trails, approval hierarchies, and compliance-ready architecture—without sacrificing usability.",
          icon: <ShieldCheck size={25} />,
        },
      ],
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
            Built to Grow With You. Not Replace You.
          </motion.h1>
        </div>

        <motion.p
          className="subtitle-center !max-w-[clamp(280px,90vw,800px)]"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
        >
          Most ERP systems force businesses to fit into predefined stages.
          Syncrra does the opposite. It adapts to where you are today and
          evolves with you as complexity increases, without migrations, rework,
          or disruption.
        </motion.p>

        <BusinessLevels columns={data} />
        <div className="flex justify-center">
          <div
            className="inline-flex items-start gap-2 px-5 py-3 rounded-full 
               bg-green-500/10 border border-green-500/30 text-sm"
          >
            <span className="text-green-400">
              <Zap />
            </span>

            <motion.p
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              className="leading-snug"
            >
              Same platform. Same intelligence. Activated at your pace.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
