import React from "react";
import PlansPage from "./CompareAllPlansFiles/PLansPage";

const CompareAllPlansSection = () => {
  return (
    <section className="section-container space-y-6">
      <h2 className="title-center">Compare All Plans</h2>
      <p className="subtitle-center">
        Choose a plan that fits your needs, from <br /> startups to enterprise
      </p>
      <PlansPage />
    </section>
  );
};

export default CompareAllPlansSection;
