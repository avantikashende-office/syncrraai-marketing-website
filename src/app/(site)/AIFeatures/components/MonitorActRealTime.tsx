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
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[45%] h-[420px] pointer-events-none">
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="/img/2.png"
            alt="Monitor dashboard"
            fill
            className="object-cover rounded-tr-3xl rounded-br-3xl"
            priority
          />
        </div>
      </div>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div />
          <div className="space-y-12">
            <h3 className="text-5xl max-w-xl gradient-gray-text">
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
