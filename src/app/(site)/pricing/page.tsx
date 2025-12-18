 
  export const dynamic = "force-dynamic";
export const runtime = "nodejs";



import FAQSection from "@/components/shared/FAQSection";
import TryForFreeSection from "@/components/shared/TryForFreeSection";
import HeroSection from "./components/HeroSection";
import CompareAllPlansSection from "./components/CompareAllPlansSection";

export default function Pricing() {
  return (
  <>
  <HeroSection  />
  <CompareAllPlansSection />
  <FAQSection />
  <TryForFreeSection />
  </>
  );
}
