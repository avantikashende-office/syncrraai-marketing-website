"use client";

import Button from "@/components/ui/Button";
import HowItWorksStep from "@/components/ui/HowItWorksSteps";
import { fadeInLeft, fadeInRight, fadeInUp } from "@/utils/animations";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Create your Account",
    description:
      "Sign up easily and map your factory layout, departments, BOMs, and roles.",
    image: "/product-overview/step-1.svg",
  },
  {
    title: "Customise Workflows with AI",
    description: "Personalise automation flow for your team’s exact needs",
    image: "/product-overview/step-2.svg",
  },
  {
    title: "Grow Smarter, Faster",
    description: "Use Insights and  reports to guide better business decisions",
    image: "/product-overview/step-3.svg",
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
        <motion.h1
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
          className="title-side gradient-gray-text"
        >
          How It Works
        </motion.h1>

        <div className="flex items-start justify-between gap-7">
          <motion.p
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            className="subtitle-side"
          >
            A simple, fast and secure platform to manage your factory <br />
            in just a few steps.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
          >
            <Button variant="outline">
              Create Account <ArrowUpRight size={20} />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* BASE SPINE */}
      <div className="absolute left-1/2 h-[70%] -translate-x-1/2 pointer-events-none">
        <div className="hiw-spine" />
      </div>

      {/* STEPS */}
      <div className="relative z-10">
        {steps.map((step, i) => (
          <HowItWorksStep key={i} index={i} scrollDir={scrollDir} {...step} />
        ))}
      </div>
    </section>
  );
}
