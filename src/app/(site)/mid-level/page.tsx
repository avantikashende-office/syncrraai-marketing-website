import TryForFreeSection from "@/components/shared/TryForFreeSection";
import HeroSection from "./components/Herosection";
import PainPoints from "./components/PainPointsSection";
import Testimonial from "./components/Testimonial";
import TrustedBy from "../../../components/shared/TrustedBySection";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export default function MidSize() {
  return (
    <>
      <HeroSection />
      <Testimonial />
      <PainPoints />
            {/* <TrustedBy /> */}
      <TryForFreeSection />
    </>
  );
}
