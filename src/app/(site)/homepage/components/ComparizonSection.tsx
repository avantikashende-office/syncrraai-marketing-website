import Badge from "@/components/ui/Badge";
import { Check, Layers, X } from "lucide-react";
import ComparisonCard from "@/components/ui/ComparisonCard";
import HorizontalScroll from "@/components/ui/HorizontalScroll";
import SyncrraLogoIcon from "../../../../../public/Logos/SyncrraLogoIcon";

const ComparizonSection = () => {
  const data1 = [
    {
      icon: <Check size={22} />,
      text: "Role-based dashboards built for every function",
      // description:
      //   "Each user sees exactly what they need, based on role, responsibility, and approvals.",
      showDivider: true,
    },
    {
      icon: <Check size={22} />,
      text: "Agentic AI that generates insights and reports on demand",
      // description:
      //   "Ask questions, analyse trends, and get answers instantly without manual reporting.",
      showDivider: true,
    },
    {
      icon: <Check size={22} />,
      text: "AI-driven demand, risk, and downtime forecasting",
      // description:
      //   "Anticipate issues before they impact production or delivery timelines.",
      showDivider: true,
    },
    {
      icon: <Check size={22} />,
      text: "Scrap, rejection, and quality analytics built into workflows",
      // description: "Identify root causes early and prevent repeat losses.",
      showDivider: true,
    },
    {
      icon: <Check size={22} />,
      text: "Fast onboarding without heavy customisation",
      // description:
      //   "Designed to adapt to your operations, not the other way around.",
    },
  ];

  const data2 = [
    {
      icon: <X size={22} />,
      text: "Limited collaboration across departments",
      // description:
      //   "Data remains siloed, forcing teams to rely on manual coordination.",
      showDivider: true,
    },
    {
      icon: <X size={22} />,
      text: "Rigid and hard-to-scale systems",
      // description:
      //   "Changes often require costly customisation and long implementation cycles.",
      showDivider: true,
    },
    {
      icon: <X size={22} />,
      text: "Basic dashboards with delayed insights",
      // description:
      //   "Reporting is static and disconnected from real-time operations.",
      showDivider: true,
    },
    {
      icon: <X size={22} />,
      text: "Minimal or reactive analytics",
      // description: "Insights arrive too late to influence outcomes.",
      showDivider: true,
    },
    {
      icon: <X size={22} />,
      text: "Outdated and complex user experiences",
      // description: "High training effort and low day-to-day adoption.",
    },
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
      {/*  Horizontal on mobile, grid on desktop */}

      <div className="comparison-scroll-container">
        <HorizontalScroll>
          <div>
            <div className="comparison-title">
              <SyncrraLogoIcon className="comparison-logo" /> Syncrra
            </div>
            <ComparisonCard features={data1} showGreenBorder />
          </div>

          <div>
            <div className="comparison-title">
              <Layers className="comparison-icon-title" />
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
