"use client";

import TestimonialCard, { Testimonial } from "@/components/ui/TestimonialCard";
import { motion } from "framer-motion";

const testimonials: Testimonial[] = [
  {
    company: "GreenWorks",
    quote:
      "Before Syncrra, keeping projects aligned felt impossible. Now everything runs smoothly, and our clients notice the difference.",
    name: "Brendan",
    role: "Marketing Director at StratIQ",
    avatar: "/img/testimonial.png",
  },
  {
    company: "Evergreen Innovations",
    quote:
      "Syncrra has completely transformed our project management. The real-time collaboration and intuitive interface are game-changers.",
    name: "Alicia",
    role: "Project Lead at Veridian Dynamics",
    avatar: "/img/UserImage.png",
  },
  {
    company: "TechInnovate",
    quote:
      "Using Syncrra transformed our workflow. Collaboration is a breeze, and productivity has skyrocketed.",
    name: "Sofia",
    role: "Product Manager at TechInnovate",
    avatar: "/img/testimonial.png",
  },
  {
    company: "EcoSolutions",
    quote:
      "Syncrra has revolutionized how we manage tasks across teams. The clarity it brings is invaluable.",
    name: "Marcus",
    role: "Operations Lead at EcoSolutions",
    avatar: "/img/UserImage.png",
  },
];

const rowTop = [...testimonials, ...testimonials, ...testimonials];
const rowBottom = [...testimonials, ...testimonials, ...testimonials];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* DARK EDGE OVERLAYS */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-black to-transparent" />

      {/* HEADER */}
      <div className="relative z-10 mb-20  text-center">
        <h1 className="title-center">
          Trusted by the Most <br /> Innovative Companies
        </h1>
        <p className="subtitle-center mt-6">
          Join 100k+ customers who use our platform to take their operational
          efforts to the next level.
        </p>
      </div>

      <div className="relative mb-14 overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {rowTop.map((item, i) => (
            <TestimonialCard key={`top-${i}`} item={item} />
          ))}
        </motion.div>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {rowBottom.map((item, i) => (
            <TestimonialCard key={`bottom-${i}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
