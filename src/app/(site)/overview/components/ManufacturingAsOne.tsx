"use client";

import AccordionList from "@/components/ui/AccordionList";
import { useState } from "react";

const capabilityData = [
  {
    key: "procurement",
    title: "Procurement & Suppliers",
    description:
      "Plan schedule & track every job in real time, no bottlenecks, no guesswork",
    image: "/product-overview/m1.svg",
  },
  {
    key: "inventory",
    title: "Materials & Inventory",
    description:
      "Real-time stock visibility, material allocations, & automated consumption tracking",
    image: "/product-overview/m2.svg",
  },
  {
    key: "machine",
    title: "Machine Monitoring",
    description:
      "Manage suppliers, track purchase RM, & streamline the procurement lifecycle",
    image: "/product-overview/m3.svg",
  },
   {
    key: "production",
    title: "Production Management",
    description:
      "Manage suppliers, track purchase RM, & streamline the procurement lifecycle",
    image: "/product-overview/m4.svg",
  },
  {
    key: "quality",
    title: "Quality Control",
    description:
      "Automate QC stages, approvals & rejection management across the floor",
    image: "/product-overview/m5.svg",
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
            <h1 className="title-side gradient-gray-text max-w-[70%]">
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
            autoNextDuration = {4200}
            showImage
            imageClassName =""
          />
        </div>
      </div>
    </section>
  );
}
