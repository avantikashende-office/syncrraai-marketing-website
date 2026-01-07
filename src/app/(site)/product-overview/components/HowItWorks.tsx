"use client";

import Button from "@/components/ui/Button";
import HowItWorksStep from "@/components/ui/HowItWorksSteps";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrollDir(y > lastY.current ? "down" : "up");
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

      {/* BASE SPINE */}
      <div className="absolute left-1/2 h-[70%] -translate-x-1/2 pointer-events-none">
        <div className="hiw-spine" />
      </div>

      {/* STEPS */}
      <div className="relative z-10">
        {steps.map((step, i) => (
          <HowItWorksStep
            key={i}
            index={i}
            scrollDir={scrollDir}
            {...step}
          />
        ))}
      </div>
    </section>
  );
}
