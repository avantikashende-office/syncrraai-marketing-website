    import React from "react";
import { Plan, BillingPeriod } from "../types";

export default function TableHeaderRow({
  plans,
  billingPeriod,
}: {
  plans: Plan[];
  billingPeriod: BillingPeriod;
}) {
  return (
    <div className="grid grid-cols-[250px_repeat(4,1fr)] bg-[#111] border-b border-[#2a2a2a] py-6 px-6 text-sm font-medium text-gray-300">
      <div className="text-left text-gray-400">Features</div>

      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`text-center py-3 rounded-lg border 
            ${plan.highlight ? "border-green-500" : "border-transparent"}
          `}
        >
          <div className="text-white text-base font-semibold">{plan.title}</div>
          <div className="text-gray-400 text-xs mt-1">
            {plan.values[billingPeriod]}
          </div>
        </div>
      ))}
    </div>
  );
}
