  export const dynamic = "force-dynamic";
export const runtime = "nodejs";




import TryForFreeSection from "@/components/shared/TryForFreeSection";
import HeroSection from "./components/HeroSection";
import LatestInsightsSection from "./components/LatestInsightsSection";

export default function Blog() {
  return (
    <>
      <HeroSection />
      <LatestInsightsSection />
      <TryForFreeSection />
    </>
  );
}
