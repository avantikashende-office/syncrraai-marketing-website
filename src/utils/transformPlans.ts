import { basePlans } from "@/components/shared/pricingData";

export function transformPlans(mode: "monthly" | "yearly") {
  return basePlans.map((plan) => ({
    ...plan,
    price: `$${mode === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}`,
    priceSuffix: mode === "monthly" ? "per month" : "per year",
    features: mode === "monthly" ? plan.monthlyFeatures : plan.yearlyFeatures,
  }));
}
