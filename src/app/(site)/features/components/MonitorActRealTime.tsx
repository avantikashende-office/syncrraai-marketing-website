import { Check } from "lucide-react";
import Image from "next/image";

const FEATURES = [
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

export default function MonitorActRealTime() {
  return (
    <section className="content-section">
      <div className="content-wrap">
        <div className="split-block">
          {/* LEFT IMAGE */}
          <div className="split-media">
            <div className="split-media-frame">
              <Image
                src="/img/2.png"
                alt="Monitor dashboard"
                fill
                className="split-media-img"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="split-pane">
            <h3 className="split-title title-side gradient-gray-text">
              Monitor and Act in Real Time
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
        </div>
      </div>
    </section>
  );
}
