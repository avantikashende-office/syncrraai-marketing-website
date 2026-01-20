import { FeatureList } from "@/components/ui/FeatureList";

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
        title="Ask, Explore, and Visualize Your Factory Data"
        features={askFeatures}
        imageSrc="/img/1.png"
        imageAlt="User"
        imageClassName="ai-image-right-rounded"
      />
x
      <FeatureList
        title="Monitor and Act in Real Time"
        features={monitorFeatures}
        imageSrc="/img/2.png"
        imageAlt="Monitor dashboard"
        reverse
        listClassName="max-w-xl"
      />

      <FeatureList
        title="Smart Forms Built for Manufacturing Workflows"
        features={smartFeatures}
        imageSrc="/img/3.png"
        imageAlt="User"
        listClassName="max-w-xl"
      />
    </section>
  );
}
