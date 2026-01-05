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
        <h3 className="text-5xl w-full max-w-[50%] gradient-gray-text text-center md:text-left">
          Ask, Explore, and Visualize Your Factory Data
        </h3>

        <div className="grid md:grid-cols-2 gap-[5%] items-center">
          <ul className="space-y-[8%]">
            {FEATURES.map((feature, index) => (
              <li key={index} className="flex items-start gap-[4%]">
                <div className="flex-shrink-0 aspect-square p-1 min-w-[1.5rem] rounded-md bg-[#404040] flex items-center justify-center">
                  <Check className="text-white text-sm" />
                </div>
                <p className="text-description">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* IMAGE */}
      <div className="absolute right-0 top-[30%] w-[45%] h-[70%] pointer-events-none">
        <Image
          src="/img/1.png"
          alt="User"
          fill
          className="object-cover object-[40%_center] rounded-tl-3xl rounded-bl-3xl"
          priority
        />
      </div>
    </div>
  );
}
