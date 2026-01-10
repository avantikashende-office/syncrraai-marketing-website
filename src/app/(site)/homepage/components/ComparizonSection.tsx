import Badge from "@/components/ui/Badge";
import Logo from "../../../../../public/Logos/Logo";
import { Check, Layers, X } from "lucide-react";
import ComparisonCard from "@/components/ui/ComparisonCard";
import HorizontalScroll from "@/components/ui/HorizontalScroll";

const ComparizonSection = () => {
  const data1 = [
    {
      icon: <Check size={22} />,
      text: "Role based Dashboards",
      showDivider: true,
    },
    {
      icon: <Check size={22} />,
      text: "Agentic chatbot to generate reports",
      showDivider: true,
    },
    {
      icon: <Check size={22} />,
      text: "AI demand & downtime forecasting",
      showDivider: true,
    },
    {
      icon: <Check size={22} />,
      text: "Scrap & rejection analytics",
      showDivider: true,
    },
    { icon: <Check size={22} />, text: "Fast onboarding" },
  ];

  const data2 = [
    { icon: <X size={22} />, text: "Limited Collaboration", showDivider: true },
    {
      icon: <X size={22} />,
      text: "Rigid & Non-scalable options",
      showDivider: true,
    },
    {
      icon: <X size={22} />,
      text: "Basic Dashboard Functionalities",
      showDivider: true,
    },
    {
      icon: <X size={22} />,
      text: "Lack of Advanced Analytics",
      showDivider: true,
    },
    { icon: <X size={22} />, text: "Outdated & Complex Interfaces" },
  ];

  return (
    <>
      <section className="section-container space-y-6">
        <div className="flex justify-center">
          <Badge label="COMPARISON" />
        </div>

        <h2 className="title-center gradient-gray-text">
          Why Syncrra Stands Out?
        </h2>

        <p className="subtitle-center">
          See how Syncrra compares against others in performance and growth
        </p>
      </section>
      {/* 🔥 Horizontal on mobile, grid on desktop */}
  
        <div className="comparison-scroll-container">

      <HorizontalScroll>
        <div>
          <div className="comparison-title">
            <Logo className="h-7 w-auto" />
          </div>
          <ComparisonCard features={data1} showGreenBorder />
        </div>

        <div>
          <div className="comparison-title">
            <Layers size={25} />
            <span>Others</span>
          </div>
          <ComparisonCard features={data2} />
        </div>
      </HorizontalScroll>
      </div>
    </>
  );
};

export default ComparizonSection;
