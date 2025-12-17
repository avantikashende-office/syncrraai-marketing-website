import Badge from "@/components/ui/Badge";
import Logo from "../../../../../public/Logos/Logo";
import { Check, Layers, X } from "lucide-react";
import ComparisonCard from "@/components/ui/ComparisonCard";

const ComparizonSection = () => {
  const data1 = [
    {
      icon: <Check size={30} />,
      text: "Role based Dashboards",
      showDivider: true,
    },
    {
      icon: <Check size={30} />,
      text: "Agentic chatbot to generate reports",
      showDivider: true,
    },
    {
      icon: <Check size={30} />,
      text: "AI demand & downtime forecasting",
      showDivider: true,
    },
    {
      icon: <Check size={30} />,
      text: "Scrap & rejection analytics",
      showDivider: true,
    },
    { icon: <Check size={30} />, text: "Fast onboarding", showDivider: false },
  ];
  const data2 = [
    { icon: <X size={30} />, text: "Limited Collaboration", showDivider: true },
    {
      icon: <X size={30} />,
      text: "Rigid & Non-scalable options",
      showDivider: true,
    },
    {
      icon: <X size={30} />,
      text: "Basic Dashboard Funtionalites",
      showDivider: true,
    },
    {
      icon: <X size={30} />,
      text: "Lack of Advanced Analytics",
      showDivider: true,
    },
    {
      icon: <X size={30} />,
      text: "Outdated & Complex Interfaces",
      showDivider: false,
    },
  ];

  return (
    <section className="space-y-6 section-container ">
      <div className="flex justify-center">
        <Badge label="COMPARISON" />
      </div>

      <h2 className="title-center gradient-gray-text ">
        Why Syncrra Stands Out?{" "}
      </h2>

      <p className="subtitle-center">
        See how Syncrra compares against others in performance, growth
      </p>

      <div className="comparison-grid">
        {/* LEFT COLUMN */}
        <div>
          <div className="comparison-title">
            <span className="text-sm font-semibold text-white">
              <Logo className="w-auto h-7" />
            </span>
          </div>

          <ComparisonCard features={data1} showGreenBorder />
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <div className="comparison-title">
            <Layers size={25} className="text-white" />
            <span className="text-xl font-semibold text-white">Others</span>
          </div>

          <ComparisonCard features={data2} />
        </div>
      </div>
    </section>
  );
};

export default ComparizonSection;
