import FAQSection from "@/components/shared/FAQSection";
import TrustedBy from "@/components/shared/TrustedBySection";
import TryForFreeSection from "@/components/shared/TryForFreeSection";
import HeroSection from "./components/Herosection";
import TestimonialSection from "./components/TestimonialSection";
import AskExploreVisualize from "./components/AskExploreVisualize";
import MonitorActRealTime from "./components/MonitorActRealTime";
import SmartFormsForManufacturing from "./components/SmartFormsForManufacturing";
import PromiseToManufacturer from "./components/PromiseToManufacturer";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default function AIFeatures() {
  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <AskExploreVisualize />
      <MonitorActRealTime />
      <SmartFormsForManufacturing />
      <PromiseToManufacturer />
      <FAQSection />
      <TrustedBy />
      <TryForFreeSection />
    </>
  );
}
