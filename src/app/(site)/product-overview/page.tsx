import FAQSection from "@/components/shared/FAQSection";
import { StrategicBenefitsSection } from "../homepage/components/StrategicBenefitSection";
import Herosection from "./components/Herosection";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";
import TryForFreeSection from "@/components/shared/TryForFreeSection";
import TrustedBy from "@/components/shared/TrustedBySection";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default function ProductOverview() {
  return (
    <>
      <Herosection />
      <Testimonial />
      <HowItWorks />
      <StrategicBenefitsSection />
      <TrustedBy />
      <FAQSection />
      <TryForFreeSection />
    </>
  );
}
