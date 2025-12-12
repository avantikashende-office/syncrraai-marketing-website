"use client";
import React from "react";
import { Plan, ComparisonSection, BillingPeriod } from "../types";
import TableHeaderRow from "./TableHeaderRow";
import SectionTitleRow from "./SectionTitleRow";
import FeatureRow from "./FeatureRow";

type Props = {
  plans: Plan[];
  sections: ComparisonSection[];
  billingPeriod: BillingPeriod;
};

export default function TableWrapper({ plans, sections, billingPeriod }: Props) {
  return (
    <div className="w-full border border-[#2a2a2a] rounded-xl overflow-hidden">
      <TableHeaderRow plans={plans} billingPeriod={billingPeriod} />

      {sections.map((section) => (
        <div key={section.id}>
          <SectionTitleRow title={section.title} />

          {section.rows.map((row, idx) => {
            const values = plans.map(plan => {
              const value = row.values[plan.id];
              return typeof value === 'boolean' ? (value ? '✓' : '—') : String(value);
            });
            
            return (
              <FeatureRow
                key={idx}
                label={row.label}
                values={values}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

