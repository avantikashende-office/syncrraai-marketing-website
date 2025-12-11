// pricingData.ts
export const basePlans = [
  {
    id: "starter",
    title: "Starter Plan",
    monthlyPrice: 0,
    yearlyPrice: 49,
    description: "Perfect for small teams",
    monthlyFeatures: [
      "Limited access to core modules",
      "Upto 5 users",
      "Standard dashboards & reports",
      "Email support",
      "Free for 30 days",
    ],
    yearlyFeatures: [
       "Limited access to core modules",
      "Upto 10 users",
      "Standard dashboards & reports",
      "Email support",
      "Free for 30 days",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline",
    bgPattern: "/Line.svg",
  },

  {
    id: "basic",
    title: "Basic Plan",
    monthlyPrice: 49,
    yearlyPrice: 196, // Yearly discount
    description: "Best for growing businesses",
    monthlyFeatures: [
      "All Starter features",
      "Upto 20 users",
      "Role-based user permissions",
      "Rejection & Supplier Management module",
      "Priority email support",
    ],
    yearlyFeatures: [
      "All Starter features",
      "25 users ", // example change
      "Faster support SLA",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline",
    bgPattern: "/Pattern.svg",
  },

  {
    id: "pro",
    title: "Pro Plan",
    monthlyPrice: 99,
    yearlyPrice: 396,
    description: "Best for growing businesses",
    monthlyFeatures: [
      "All Basic features",
      "Upto 50 users",
      "Advanced analytics & custom dashboards",
      "Workflow automation (Approvals, Alerts)",
      "Dedicated account manager",
    ],
    yearlyFeatures: [
      "All Basic features",
      "60 users",
      "Premium automation flows",
    ],
    highlight: true,
    badgeText: "Popular",
    badgeIcon: "🔥",
    buttonText: "Get Started",
    buttonVariant: "primary",
    bgPattern: "/Vector.svg",
  },

  {
    id: "premium",
    title: "Premium Plan",
    monthlyPrice: 199,
    yearlyPrice: 796,
    description: "Large teams + enterprise-grade control",
    monthlyFeatures: [
      "All Pro features",
      "Unlimited users",
      "Custom module development",
      "AI-driven insights & forecasting",
      "Onboarding & training included",
    ],
    yearlyFeatures: [
      "All Pro features",
      "Unlimited users",
      "Dedicated engineering hours",
    ],
    buttonText: "Contact Us",
    buttonVariant: "outline",
    bgPattern: "/Vector.svg",
  },
];
