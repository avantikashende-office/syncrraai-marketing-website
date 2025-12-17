"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type BillingCycle = "monthly" | "yearly";

type PricingContextType = {
  billing: BillingCycle;
  toggleBilling: () => void;
  setBilling: (cycle: BillingCycle) => void;
};

const PricingContext = createContext<PricingContextType | undefined>(undefined);

export function PricingProvider({ children }: { children: ReactNode }) {
  const [billing, setBilling] = useState<BillingCycle>("monthly");

  const toggleBilling = () => {
    setBilling((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <PricingContext.Provider value={{ billing, toggleBilling, setBilling }}>
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error("usePricing must be used within a PricingProvider");
  }
  return context;
}
