"use client";

import { Column } from "@/components/ui/BusinessLevels";
import BusinessLevels from "@/components/ui/BusinessLevels";
import { fadeInMain, fadeInRight } from "@/utils/animations";
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
        { title: "Small Business", icon: <Store size={20} />, isHeader: true },

        {
          title: "Limited Budget, Big Dreams",
          description:
            "Enterprise features without enterprise costs. Start lean, scale smart.",
          icon: <DollarSign size={20} />,
        },
        {
          title: "Wearing Too Many Hats",
          description:
            "Automate routine tasks so you can focus on growth, not data entry.",
          icon: <Briefcase size={20} />,
        },
        {
          title: "Outgrowing Spreadsheets",
          description:
            "Real-time visibility without the complexity of traditional ERPs.",
          icon: <TrendingUp size={20} />,
        },
      ],
    },

    {
      level: "mid",
      items: [
        {
          title: "Mid-Size Business",
          icon: <Layers size={20} />,
          isHeader: true,
        },

        {
          title: "Scaling Pains",
          description:
            "Handle increased volume without system slowdowns or migrations.",
          icon: <Layers size={20} />,
        },
        {
          title: "Process Automation Gaps",
          description:
            "Streamline workflows across teams with intelligent automation.",
          icon: <Zap size={20} />,
        },
        {
          title: "Data Silos",
          description:
            "Unified platform that connects all departments in real-time.",
          icon: <Database size={20} />,
        },
      ],
    },

    {
      level: "enterprise",
      items: [
        { title: "Enterprise", icon: <Factory size={20} />, isHeader: true },

        {
          title: "Complex Operations",
          description:
            "Manage multi-location, multi-currency operations from one platform.",
          icon: <Building2 size={20} />,
        },
        {
          title: "Advanced Analytics",
          description:
            "AI-powered insights for strategic decision-making at scale.",
          icon: <BarChart3 size={20} />,
        },
        {
          title: "Compliance & Security",
          description:
            "Enterprise-grade security with industry-specific compliance built-in.",
          icon: <ShieldCheck size={20} />,
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
            Every Business Size. Every Challenge. <br /> One Solution.
          </motion.h1>
        </div>

        <motion.p
          className="subtitle-center"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
        >
          From day one to day 10,000—Syncrra solves the pain points unique to
          your stage while preparing you for what's next.
        </motion.p>

        <BusinessLevels columns={data} />
        <div className="flex justify-center">
          <div
            className="inline-flex items-start gap-2 px-5 py-3 rounded-full 
               bg-green-500/10 border border-green-500/30 text-sm"
          >
            <span className="text-green-400">
              <Waypoints />
            </span>

            <motion.p
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              className="leading-snug"
            >
              All features available at every tier—just unlock what you need
              when you need it
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
