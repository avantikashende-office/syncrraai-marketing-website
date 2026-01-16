"use client";

import AccordionList from "@/components/ui/AccordionList";
import { useState } from "react";

const capabilityData = [
  {
    key: "production",
    title: "Production Management",
    description:
      "Plan schedule & track every job in real time, no bottlenecks, no guesswork",
    image: "/product-overview/ManufacturingAsOne.svg",
  },
  {
    key: "inventory",
    title: "Inventory & Materials",
    description:
      "Real-time stock visibility, material allocations, & automated consumption tracking",
    image: "/product-overview/ManufacturingAsOne.svg",
  },
  {
    key: "procurement",
    title: "Procurement & Suppliers",
    description:
      "Manage suppliers, track purchase RM, & streamline the procurement lifecycle",
    image: "/product-overview/ManufacturingAsOne.svg",
  },
  {
    key: "quality",
    title: "Quality Check & Rejections",
    description:
      "Automate QC stages, approvals & rejection management across the floor",
    image: "/product-overview/ManufacturingAsOne.svg",
  },
];

export default function ManufacturingAsOne() {
  const [active, setActive] = useState(capabilityData[0].key);

  return (
    <section className="section-bg-gray">
      <div className="section-container">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="title-side gradient-gray-text">
              All Your Manufacturing Processes Working as One
            </h1>

            <p className="subtitle-side">
              Eliminate silos with a single ERP that coordinates <br />
              production, inventory, machines, suppliers, and quality on
              autopilot
            </p>
          </div>

          <AccordionList
            items={capabilityData}
            active={active}
            onSelect={setActive}
            itemPaddingY="py-6"
            autoNext={true}
            showRunnerLine={true}
            showImage
            imageClassName =""
          />
        </div>
      </div>
    </section>
  );
}
