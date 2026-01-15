"use client";

import Badge from "@/components/ui/Badge";
import { useState } from "react";
import AccordionList from "@/components/ui/AccordionList";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

const capabilityData = [
  {
    key: "production",
    title: "Production Management",
    description:
      "Plan schedule & track every job in real time, no bottlenecks, no guesswork",
    image: "/img/CoreCapabilitiesSection.jpg",
  },
  {
    key: "inventory",
    title: "Inventory & Materials",
    description:
      "Real-time stock visibility, material allocations, & automated consumption tracking",
    image: "/img/1.png",
  },
  {
    key: "procurement",
    title: "Procurement & Suppliers",
    description:
      "Manage suppliers, track purchase RM, & streamline the procurement lifecycle",
    image: "/img/2.png",
  },
  {
    key: "quality",
    title: "Quality Check & Rejections",
    description:
      "Automate QC stages, approvals & rejection management across the floor",
    image: "/img/3.png",
  },
];

export default function CoreCapabilitiesSection() {
  const [active, setActive] = useState(capabilityData[0].key);

  return (
    <section className="section-container">
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

        <div className="flex justify-between">
          <p className="subtitle-side">
            Empower your enterprise with an AI-powered ERP that learns, adapts,{" "}
            <br />
            and evolves simplifying complexity into seamless motion.
          </p>
        </div>
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
