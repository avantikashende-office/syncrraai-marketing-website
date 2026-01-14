import FAQSection from "@/components/shared/FAQSection";
import TrustedBy from "@/components/shared/TrustedBySection";
import TryForFreeSection from "@/components/shared/TryForFreeSection";
import HeroSection from "./components/Herosection";
import TestimonialSection from "./components/TestimonialSection";

import PromiseToManufacturer from "./components/PromiseToManufacturer";
import FeaturesSection from "./components/FeaturesSection";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default function AIFeatures() {
  return (
    <>
      <HeroSection />
      <TestimonialSection />
      <FeaturesSection />
      <PromiseToManufacturer />
      <FAQSection />
      <TrustedBy />
      <TryForFreeSection />
    </>
  );
}
