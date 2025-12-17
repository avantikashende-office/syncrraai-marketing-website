export type BillingPeriod = "monthly" | "yearly";


export type Plan = {
id: string;
title: string;
highlight?: boolean; // For green border on Pro plan
values: {
monthly: string;
yearly: string;
};
};


export type FeatureRow = {
label: string;
info?: boolean;
values: Record<string, string | boolean>; // planId → value
};


export type ComparisonSection = {
id: string;
title: string;
rows: FeatureRow[];
};