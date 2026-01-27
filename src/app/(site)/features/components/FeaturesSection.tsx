import { FeatureList } from "@/components/ui/FeatureList";

const aiDashboardfeatures = [
  {
    text: "Create fully customized dashboards by simply telling Syncrra Agent what you want to see — no manual configuration required.",
  },
  {
    text: "Add, remove, or modify KPIs, charts, and views using natural language commands in real time.",
  },
  {
    text: "Dashboards automatically adapt to roles, plants, and priorities, keeping every team focused on what matters most.",
  },
];

const askFeatures = [
  {
    text: "Ask production questions in natural language and get instant, AI-verified answers.",
  },
  {
    text: "Create or refine production dashboards using simple chat commands, no manual setup needed",
  },
  {
    text: "Explore live factory-floor data with drill-downs, filters, and visual summaries across plants.",
  },
];

const monitorFeatures = [
  {
    text: "Continuous monitoring of machines, production lines, and inventory with AI anomaly detection.",
  },
  {
    text: "Instant alerts when output, quality, or downtime crosses defined thresholds.",
  },
  {
    text: "Proactive recommendations to fix issues before they impact delivery or costs.",
  },
];
const smartFeatures = [
  {
    text: "Smart auto-fill for production, quality, and inventory forms using historical data.",
  },
  {
    text: "Real-time validation to prevent missing, incorrect, or inconsistent entries.",
  },
  {
    text: "Learns operator behavior to reduce repetitive inputs across shifts and plants.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="content-section">

       <FeatureList
        title="AI Built Dashboard "
        features={aiDashboardfeatures}
        imageSrc="/img/1.svg"
        imageAlt="Monitor dashboard"
        reverse
        listClassName="max-w-xl"
      />

      <FeatureList
        title="Ask, Explore, and Visualize Your Factory Data"
        features={askFeatures}
        imageSrc="/img/2.svg"
        imageAlt="User"
        imageClassName="ai-image-right-rounded"
      />
x
      <FeatureList
        title="Monitor and Act in Real Time"
        features={monitorFeatures}
        imageSrc="/img/2.svg"
        imageAlt="Monitor dashboard"
        reverse
        listClassName="max-w-xl"
      />

      <FeatureList
        title="Smart Forms Built for Manufacturing Workflows"
        features={smartFeatures}
        imageSrc="/img/4.svg"
        imageAlt="User"
        listClassName="max-w-xl"
      />
    </section>
  );
}
