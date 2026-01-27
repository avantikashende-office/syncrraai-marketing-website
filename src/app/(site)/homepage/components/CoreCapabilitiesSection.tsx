"use client";

import Badge from "@/components/ui/Badge";
import { useState } from "react";
import AccordionList from "@/components/ui/AccordionList";
import { motion } from "framer-motion";
import { fadeInMain, fadeInRight } from "@/utils/animations";

const capabilityData = [
  {
    key: "production",
    title: "Production Management",
    description:
      "Plan, schedule, and track production in real time with full visibility into machine availability, work-in-progress, and approvals. No bottlenecks. No guesswork.",
    image: "/img/ppc.svg",
  },
  {
    key: "inventory",
    title: "Inventory & Materials",
    description:
      "Track raw materials, work-in-progress, and finished goods across plants with clear status visibility and controlled consumption at every stage",
    image: "/img/inventory.svg",
  },
  {
    key: "procurement",
    title: "Procurement & Suppliers",
    description:
      "Manage suppliers, purchase orders, and material receipts within the same workflow, ensuring timely availability without overstocking or last-minute follow-ups",
    image: "/img/sales.svg",
  },
  {
    key: "quality",
    title: "Quality Check & Rejections",
    description:
      "Enforce approval-driven quality checks, handle rejections seamlessly, and maintain complete traceability for audits and compliance",
    image: "/img/quality.svg",
  },
];

export default function CoreCapabilitiesSection() {
  const [active, setActive] = useState(capabilityData[0].key);

  return (
    <section className="section-container z-30 relative">
      <div className="space-y-6 py-6">
        <Badge label="KEY FEATURES" />

        <motion.h2
          className="title-side gradient-gray-text"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Make Manufacturing Operations <br />
          Effortless & Fully Connected
        </motion.h2>

        <motion.p
          className="subtitle-side"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
        >
          Syncrra brings every operational function into one intelligent system,
          removing manual coordination and ensuring every team works from the
          same real-time data.
        </motion.p>
      </div>

      <AccordionList
        items={capabilityData}
        active={active}
        onSelect={setActive}
        itemPaddingY="py-8"
        showImage
        showRunnerLine={true}
        autoNext={true}
      />
    </section>
  );
}
