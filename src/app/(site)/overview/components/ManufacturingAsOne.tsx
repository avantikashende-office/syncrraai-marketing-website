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
    <section className="section-bg-gray">
      <div className="section-container">
        <div className="grid gap-10 md:grid-cols-2 ">
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
              containerClassName="flex flex-col w-full"
              autoNext={true}
              showRunnerLine={true}
            />
          </div>

          {/* RIGHT */}
          <div className="flex justify-end md:justify-center">
            <Image
              src="/product-overview/ManufacturingAsOne.svg"
              alt="Dashboard preview"
              width={660}
              height={500}
              priority
              className="w-full aspect-[650/1000] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
