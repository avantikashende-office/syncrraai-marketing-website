"use client";

import Button from "@/components/ui/Button";
import HowItWorksStep from "@/components/ui/HowItWorksSteps";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    title: "Create your Account",
    description:
      "Sign up easily and map your factory layout, departments, BOMs, and roles.",
    image: "/homepage/1.png",
  },
  {
    title: "Configure Processes",
    description:
      "Define workflows, approvals, and production stages effortlessly.",
    image: "/homepage/aa.png",
  },
  {
    title: "Track & Optimize",
    description:
      "Monitor live data, reduce errors, and improve efficiency in real time.",
    image: "/homepage/1.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-container relative">
      {/* HEADER */}
      <div className="space-y-8 mb-24">
        <h1 className="title-side gradient-gray-text">How It Works</h1>

        <div className="flex items-start justify-between gap-7">
          <p className="subtitle-side">
            A simple, fast and secure platform to manage your factory <br />
            in just a few steps.
          </p>

          <Button variant="outline">
            Create Account <ArrowUpRight size={20} />
          </Button>
        </div>
      </div>

      {/* STEPS */}
      <div className="space-y-28 relative z-10">
        {steps.map((step, i) => (
          <HowItWorksStep
            key={i}
            index={i}
            title={step.title}
            description={step.description}
            image={step.image}
          />
        ))}
      </div>
    </section>
  );
}
