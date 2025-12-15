"use client";

import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import ScrollingBadges from "@/components/ui/ScrollingBadges";
import {
  Workflow,
  LayoutGrid,
  Rocket,
  Shield,
  Settings,
  Zap,
  LucideIcon,
  Smile,
  ChartColumnBig,
} from "lucide-react";

export function StrategicBenefitsSection() {
  const iconMap: Record<string, LucideIcon> = {
    workflow: Workflow,
    grid: LayoutGrid,
    smile: Smile,
    settings: Settings,
    chart: ChartColumnBig,
    rocket: Rocket,
    shield: Shield,
    zap: Zap,
  };

  const BENEFITS = [

    {
      icon: "smile",
      title: "AI-Driven Insights",
      description:
        "Transform raw data into real-time dashboards and reports. Let AI generate analytics that help you make smarter, faster decisions.",
    },
    {
      icon: "settings",
      title: "Workflow Automation",
      description:
        "Streamline approvals, tasks, and reporting with intelligent automation reducing manual effort and boosting operational speed.",
    },
    {
      icon: "chart",
      title: "Customizable Dashboards",
      description:
        "Design your workspace your way. Build personalized dashboards and visual KPIs tailored to your business metrics.",
    },
    {
      icon: "rocket",
      title: "Scalable and Adaptive",
      description:
        "Whether you're a startup or enterprise, SyncRRA grows with your business — adapting to your evolving workflows and needs.",
    },
    {
      icon: "shield",
      title: "Secure and Centralized",
      description:
        "Keep your operations safe and unified with enterprise-grade data security and centralized control.",
    },
    {
      icon: "zap",
      title: "Maximum Efficiency",
      description:
        "Maximum efficiency with integrated solutions that eliminate bottlenecks, saving time and costs.",
    },
  ];

  return (
    <section className=" ">
      <div className="section-container space-y-8">
        {/* Badge */}
        <div className="flex justify-center">
          <Badge label="BENEFITS" />
        </div>

        {/* Heading */}
        <h2 className=" gradient-gray-text section-title-large text-center">
          Empower Your Business with <br /> Intelligent ERP Automation
        </h2>

        {/* Subtitle */}
        <p className="text-description text-center  mx-auto  mb-20">
          Experience the next level of productivity and precision with SyncRRA s
          AI-powered ERP designed to automate, analyze, and accelerate every
          business operation.
        </p>

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
      <div className=" ">
        <ScrollingBadges
          itemsTop={[
            "Faster Decisions",
            "Data-Driven",
            "Efficiency Boost",
            "Growth",
            "Operational Agility",
            "Intelligence",
          ]}
          itemsBottom={[
            "Smart Insights",
            "Dynamic KPIs",
            "Insight Automation",
            "Built for Growth",
            "AI Dashboards",
            "Process Optimization",
          ]}
          speed={60}
        />
      </div>

    </section>
  );
}