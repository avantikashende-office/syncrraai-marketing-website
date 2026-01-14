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
    <section className="content-section mb-[5%]">
      <div className="content-wrap">
        <div className="split-block">
          <div className="split-pane">
            <h3 className="split-title title-side gradient-gray-text">
              Smart Forms Built for Manufacturing Workflows
            </h3>

            <ul className="ai-feature-list max-w-xl">
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

          <div className="split-media">
            <div className="split-media-frame">
              <Image
                src="/img/3.png"
                alt="User"
                fill
                className="split-media-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
