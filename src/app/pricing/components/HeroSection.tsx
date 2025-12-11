import PricingSection from '@/components/shared/PricingSection'
import React from 'react'

const HeroSection = () => {
  return (
    <>
      <section className="section-padding pricing-hero-bg">
        <div className="section-container space-y-6 mb-12">
          {/* Heading */}
          <h2 className="section-title-large text-center">
            Find the Right Plan for<br /> your Business
          </h2>

          {/* Subtitle */}
          <p className="text-description text-center  mx-auto">
            Choose a Plan Tailored to Your Business Needs
          </p>
        </div>

        <PricingSection />
      </section>
    </>

  )
}

export default HeroSection