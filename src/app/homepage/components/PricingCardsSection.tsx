import PricingSection from '@/components/shared/PricingSection'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { ChevronRight } from 'lucide-react'

const PricingCardSection = () => {

    return (
        <section className="section-padding">
            <div className="section-container space-y-8">
                <div className="flex justify-center">
                    <Badge label="PRICING" />
                </div>

                <h2 className="unified-title gradient-gray-text">
                    Choose the Right Plan<br /> for Your Goals</h2>
                <p className="unified-description">
                    Pick the plan that fits your needs today and scales <br />
                    effortlessly with your team
                </p>
            </div>
            <PricingSection />
            <div className="section-container flex justify-center items-center">
                <div className="stats-card flex items-center justify-between w-full">
                    <div className="flex flex-col text-left">
                        <p className="text-lg text-white font-medium">
                            Not sure which plans is for you?
                        </p>
                        <p className="text-lg text-white">
                            Compare Plans to find what’s right for your team.
                        </p>
                    </div>
                    <div className="flex items-center gap-6">
                        <Button variant="opposite">Compare Plans</Button>
                        <Button variant="outline">Contact Sales <ChevronRight size={20} /></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingCardSection