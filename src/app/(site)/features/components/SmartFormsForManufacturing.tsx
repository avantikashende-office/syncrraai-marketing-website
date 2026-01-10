import { Check } from "lucide-react";
import Image from "next/image";

const FEATURES = [
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

export default function SmartFormsForManufacturing() {
  return (
    <div className="relative overflow-visible mb-[5%]">
      <section className="section-container space-y-12">
        <h3 className="ai-feature-title">
          Smart Forms Built for Manufacturing Workflows
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
          src="/img/3.png"
          alt="User"
          fill
          className="ai-image-rounded-right"
          priority
        />
      </div>
    </div>
  );
}
