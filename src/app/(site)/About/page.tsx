export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import FAQSection from "@/components/shared/FAQSection";
import HeroSection from "./components/Herosection";
import JoinOurTeam from "./components/JoinOurTeam";
import Journey from "./components/Journey";
import MeetThePeople from "./components/MeetThePeople";
import TryForFreeSection from "@/components/shared/TryForFreeSection";

export default function About() {
  return (
    <>
      <HeroSection />
      <Journey />
      {/* <MeetThePeople /> */}
      <JoinOurTeam />
      <TryForFreeSection />
    </>
  );
}
