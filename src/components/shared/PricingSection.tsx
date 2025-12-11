"use client";

import React, { useState } from "react";
import { SwitchChip } from "../ui/SwitchChip";
import { PricingCard } from "../ui/PricingCardComponent";
import { transformPlans } from "@/utils/transformPlans";

export default function PricingSection() {
  const [mode, setMode] = useState<"monthly" | "yearly">("monthly");

  const plans = transformPlans(mode);

  return (
    <section>
      <div className="flex flex-col items-center gap-6 mb-16">
        <SwitchChip
          leftLabel="Monthly"
          rightLabel="Yearly"
          badgeText="Save 20%"
          active={mode === "monthly" ? "left" : "right"}
          onChange={(value) =>
            setMode(value === "left" ? "monthly" : "yearly")
          }
        />
      </div>

      <div className="flex gap-5 section-container justify-center">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  );
}
