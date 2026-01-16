"use client";

import React, { useState } from "react";
import { SwitchChip } from "../ui/SwitchChip";
import { PricingCard } from "../ui/PricingCardComponent";
import { transformPlans } from "@/utils/transformPlans";

export default function PricingSection() {
  const [mode, setMode] = useState<"monthly" | "yearly">("monthly");

  const plans = transformPlans(mode);

  return (
    <section className="price-cards-wrapper">
      <div className="price-switch-chip-wrapper">
        <SwitchChip
          leftLabel="Monthly"
          rightLabel="Yearly"
          badgeText="Save 20%"
          active={mode === "monthly" ? "left" : "right"}
          onChange={(value) => setMode(value === "left" ? "monthly" : "yearly")}
        />
      </div>

      <div className="price-cards-container">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  );
}
