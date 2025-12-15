"use client";

import PricingSection from '@/components/shared/PricingSection'
import React from 'react'
import { motion } from 'framer-motion'
import { fadeInMain } from '@/utils/animations'

const HeroSection = () => {
  return (
    <>
      <section className="  pricing-hero-bg">
        <div className="section-container space-y-6 mb-12">
          {/* Heading */}
          <motion.h2 
            className="section-title-large text-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Find the Right Plan for<br /> your Business
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-description text-center  mx-auto"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Choose a Plan Tailored to Your Business Needs
          </motion.p>
        </div>

        <PricingSection />
      </section>
    </>

  )
}

export default HeroSection