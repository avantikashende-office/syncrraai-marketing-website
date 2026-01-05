import FAQSection from "@/components/shared/FAQSection";
import TrustedBy from "@/components/shared/TrustedBySection";
import TryForFreeSection from "@/components/shared/TryForFreeSection";
import HeroSection from "./components/Herosection";
import TestimonialSection from "./components/TestimonialSection";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default function AIFeatures() {
  return (
    <>
      <HeroSection />
     
      <FAQSection />
      <TrustedBy />
      <TryForFreeSection />
    </>
  );
}
