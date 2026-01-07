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
    <div className="relative overflow-visible">
      <div className="ai-image-left">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/img/2.png"
            alt="Monitor dashboard"
            fill
            className="ai-image-rounded-left"
            priority
          />
        </div>
      </div>

      <section className="section-container">
        <div className="ai-feature-section-grid-16">
          <div />
          <div className="space-y-12">
            <h3 className="ai-feature-title-xl">
              Monitor and Act in Real Time
            </h3>

            <ul className="space-y-6 max-w-xl">
              {FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-1 rounded-md bg-[#404040]">
                    <Check className="text-white text-sm" />
                  </div>
                  <p className="text-description">{feature.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
