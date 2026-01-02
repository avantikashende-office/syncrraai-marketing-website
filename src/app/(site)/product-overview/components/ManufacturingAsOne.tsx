"use client";

import AccordionList from "@/components/ui/AccordionList";
import Image from "next/image";
import { useState } from "react";

export default function ManufacturingAsOne() {
  const [active, setActive] = useState("production");

  const capabilityData = [
    {
      key: "production",
      title: "Production Management",
      description:
        "Plan schedule & track every job in real time, no bottlenecks, no guesswork",
    },
    {
      key: "inventory",
      title: "Inventory & Materials",
      description:
        "Real-time stock visibility, material allocations, & automated consumption tracking",
    },
    {
      key: "procurement",
      title: "Procurement & Suppliers",
      description:
        "Manage suppliers, track purchase RM, & streamline the procurement lifecycle",
    },
    {
      key: "quality",
      title: "Quality Check & Rejections",
      description:
        "Automate QC stages, approvals & rejection management across the floor",
    },
  ];
  return (
    <section className="section-container-gray">
      <div className="space-y-8 grid grid-cols-2 gap-8 ">
        <div className="space-y-8">
          <h1 className="title-side gradient-gray-text">
            All Your Manufacturing <br /> Processes Working as One
          </h1>

          <div className="flex items-start justify-between gap-7">
            <p className="subtitle-side ">
              Eliminate silos with a single ERP that coordinates <br />{" "}
              production, inventory, machines, suppliers, and quality on
              autopilot
            </p>
          </div>

          <div className="flex-1 min-w-0 py-20">
            <AccordionList
              items={capabilityData}
              active={active}
              onSelect={setActive}
              containerClassName="flex flex-col w-full"
            />
          </div>
        </div>

        <Image
          src="/product-overview/ManufacturingAsOne.svg"
          alt="Dashboard preview"
          width={800}
          height={500}
          priority
          className="object-contain relative z-10"
        />
      </div>
    </section>
  );
}
