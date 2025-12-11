import { ComparisonSection } from "../types";

export const comparisonSections: ComparisonSection[] = [
  {
    id: "workspace",
    title: "Workspace",
    rows: [
      {
        label: "Number of users",
        values: {
          starter: "Up to 5",
          basic: "Up to 20",
          pro: "Up to 50",
          premium: "Unlimited",
        },
      },
      {
        label: "Module Access",
        values: {
          starter: "Limited core modules",
          basic: "Starter + Supplier Mgmt",
          pro: "Basic + Workflow automation",
          premium: "Pro + Custom modules",
        },
      },
    ],
  },

  {
    id: "modules",
    title: "Modules & Features",
    rows: [
      {
        label: "Core ERP Modules",
        values: {
          starter: true,
          basic: true,
          pro: true,
          premium: true,
        },
      },
      {
        label: "Rejection & Supplier Mgmt",
        values: {
          starter: false,
          basic: true,
          pro: true,
          premium: true,
        },
      },
      {
        label: "Advanced Analytics",
        values: {
          starter: false,
          basic: false,
          pro: true,
          premium: true,
        },
      },
      {
        label: "Workflow Automation",
        values: {
          starter: false,
          basic: false,
          pro: true,
          premium: true,
        },
      },
    ],
  },

  {
    id: "automations",
    title: "Automations",
    rows: [
      {
        label: "Automation Level",
        values: {
          starter: "Not included",
          basic: "Role-based permissions",
          pro: "Workflow automation",
          premium: "Full automation",
        },
      },
    ],
  },

  {
    id: "reporting",
    title: "Reporting & Insights",
    rows: [
      {
        label: "Number of reports",
        values: {
          starter: "3 reports",
          basic: "20 reports",
          pro: "100 reports",
          premium: "Unlimited",
        },
      },
      {
        label: "Insight Reports",
        values: {
          starter: true,
          basic: true,
          pro: true,
          premium: true,
        },
      },
      {
        label: "Sales Reports",
        values: {
          starter: false,
          basic: true,
          pro: true,
          premium: true,
        },
      },
      {
        label: "Activity Reports",
        values: {
          starter: false,
          basic: true,
          pro: true,
          premium: true,
        },
      },
      {
        label: "Email Reports",
        values: {
          starter: false,
          basic: false,
          pro: true,
          premium: true,
        },
      },
    ],
  },

  {
    id: "support",
    title: "Support",
    rows: [
      {
        label: "Help Center",
        values: {
          starter: true,
          basic: true,
          pro: true,
          premium: true,
        },
      },
      {
        label: "Chat + Email Support",
        values: {
          starter: false,
          basic: true,
          pro: true,
          premium: true,
        },
      },
      {
        label: "Priority Support",
        values: {
          starter: false,
          basic: false,
          pro: true,
          premium: true,
        },
      },
      {
        label: "Migration Assistance",
        values: {
          starter: false,
          basic: "Chat with us",
          pro: "Chat with us",
          premium: "Chat with us",
        },
      },
    ],
  },
];
