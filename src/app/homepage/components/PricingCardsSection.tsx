"use client";

import PricingSection from '@/components/shared/PricingSection'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInMain } from '@/utils/animations'

const PricingCardSection = () => {

    return (
        <section className="section-padding">
            <div className="section-container space-y-8">
                <div className="flex justify-center">
                    <Badge label="PRICING" />
                </div>

                <motion.h2 
                  className="unified-title gradient-gray-text"
                  variants={fadeInMain}
                  initial="initial"
                  whileInView="animate"
                >
                    Choose the Right Plan<br /> for Your Goals
                </motion.h2>
                <motion.p 
                  className="unified-description"
                  variants={fadeInMain}
                  initial="initial"
                  whileInView="animate"
                >
                    Pick the plan that fits your needs today and scales <br />
                    effortlessly with your team
                </motion.p>
            </div>
            <PricingSection />
            <div className="section-container flex justify-center items-center">
                <div className="stats-card flex items-center justify-between w-full">
                    <div className="flex flex-col text-left">
                        <motion.p 
                          className="text-lg text-white font-medium"
                          variants={fadeInMain}
                          initial="initial"
                          whileInView="animate"
                        >
                            Not sure which plans is for you?
                        </motion.p>
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