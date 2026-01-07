import { Check } from "lucide-react";
import Image from "next/image";

const FEATURES = [
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

export default function AskExploreVisualize() {
  return (
    <div className="relative overflow-visible">
      <section className="section-container space-y-12">
        <h3 className="ai-feature-title">
          Ask, Explore, and Visualize Your Factory Data
        </h3>

        <div className="ai-feature-section-grid">
          <ul className="ai-feature-list">
            {FEATURES.map((feature, index) => (
              <li key={index} className="ai-feature-item">
                <div className="ai-feature-check-icon">
                  <Check className="text-white text-sm" />
                </div>
                <p className="text-description">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* IMAGE */}
      <div className="ai-image-right">
        <Image
          src="/img/1.png"
          alt="User"
          fill
          className="ai-image-rounded-right"
          priority
        />
      </div>
    </div>
  );
}
