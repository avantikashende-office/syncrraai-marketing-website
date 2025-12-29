
 

  export const dynamic = "force-dynamic";
export const runtime = "nodejs";


import StatsSection from "./components/StatsSection";
import BusinessChallengesSection from "./components/BusinessChallengesSection";
import Herosection from "./components/HeroSection";
import CoreCapabilitiesSection from "./components/CoreCapabilitiesSection";
import { StrategicBenefitsSection } from "./components/StrategicBenefitSection";
import { AIFeaturesOverviewSection } from "./components/AIFeaturesOverviewSection";
import { SeamlessIntegrationsSection } from "./components/SeamlessIntegrationsSection";
import { UnifiedOperationsSolutionSection } from "./components/UnifiedOperationsSolutionSection";
import ComparizonSection from "./components/ComparizonSection";
import CustomersSection from "./components/CustomersSection";
import YourDataYourControlSection from "./components/YourDataYourControlSection";
import FAQSection from "@/components/shared/FAQSection";
import TryForFreeSection from "@/components/shared/TryForFreeSection";
import PricingCardSection from "./components/PricingCardsSection";
import ProcessSection from "./components/ProcessSection";
export default function HomePage() {
    return (
        <>
            <Herosection />
            <StatsSection />
            <BusinessChallengesSection />
            <ProcessSection />
            <CoreCapabilitiesSection />
            <StrategicBenefitsSection />
            <AIFeaturesOverviewSection />
            <SeamlessIntegrationsSection />
            <UnifiedOperationsSolutionSection />
            <ComparizonSection />
            <PricingCardSection />
            <CustomersSection />
            <FAQSection />
            <YourDataYourControlSection />
            <TryForFreeSection />
            
        </>
    );
}
