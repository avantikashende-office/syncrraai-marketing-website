"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SwitchChip } from "@/components/ui/SwitchChip";

// Comparison table layout components
import SectionTitleRow from "./PlansTable/SectionTitleRow";
import FeatureRow from "./PlansTable/FeatureRow";

// Data files
import { pricingData } from "./data/PricingData";
import { comparisonSectionsData } from "./data/ComparisonSectionData";

// UI Components
import Card from "@/components/ui/Card";

export default function PlansPage() {
  const [planType, setPlanType] = useState<"left" | "right">("left");

  const isMonthly = planType === "left";

  const plans = pricingData[isMonthly ? "monthly" : "yearly"];
  const sections = comparisonSectionsData[isMonthly ? "monthly" : "yearly"];

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Comparison Table */}
      <div className="rounded-xl overflow-hidden">

        {/* Billing Row */}
        <div className="grid grid-cols-5">
          {/* Column 1 */}
          <div>

          </div>
          {/* <div className="px-2 py-4 flex flex-col items-center justify-center space-y-4  border-b border-[#404040]">
            <div className="text-sm font-semibold">Billing Frequency:</div>
            <SwitchChip
              leftLabel="Monthly"
              rightLabel="Yearly"
              badgeText="Save 10% on yearly plan"
              active={planType}
              onChange={setPlanType}
              showBadge={false}
            />
            <p className="text-[0.7rem] pl-4">Save 20% on yearly plan!</p>
          </div> */}

          {/* Remaining columns */}
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="px-6 py-4"
            >
              <div className={`border px-4 py-3 rounded-lg text-lg font-medium ${plan.isPopular ? 'border-green-500' : 'border-[#404040]'
                }`}>
                {plan.title}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Sections */}
        {sections.map((section) => (
          <div key={section.id}>
            <SectionTitleRow title={section.title} />

            {section.rows.map((row) => (
              <AnimatePresence mode="wait" key={row.id}>
                <motion.div
                  key={`${row.id}-${isMonthly ? 'monthly' : 'yearly'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <FeatureRow
                    label={row.label}
                    values={[
                      row.values.starter,
                      row.values.basic,
                      row.values.pro,
                      row.values.premium,
                    ]}
                  />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
