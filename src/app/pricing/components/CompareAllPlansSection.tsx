import React from 'react'
import PlansPage from './CompareAllPlansFiles/PLansPage'

const CompareAllPlansSection = () => {
    return (
        <section className="unified-section">
            <div className="section-container space-y-6">
                {/* Heading */}
                <h2 className="section-title-large text-center">
                    Compare All Plans
                </h2>

                {/* Subtitle */}
                <p className="text-description text-center  mx-auto">
                    Choose a plan that fits your needs, from  <br /> startups to enterprise
                </p>
            </div>

            <PlansPage />

            
        </section>)
}

export default CompareAllPlansSection