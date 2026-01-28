export const dynamic = "force-dynamic";
export const runtime = "nodejs";
import BusinessSize from "./components/BusinessSize";
import HeroSection from "./components/HeroSection";
import TradiionalERPvsSyncrra from "./components/TraditionalERPvsSyncrra";

export default function WhySyncrra() {
  return (
    <>
      <HeroSection />
      <TradiionalERPvsSyncrra />
      <BusinessSize />
    </>
  );
}
