"use client";

import Badge from "@/components/ui/Badge";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="section-container">
      <div className="space-y-10 ">
        <div className="flex justify-center">
          <Badge icon={<Sparkles fill="white" />} label="About Us" />
        </div>

        <motion.h2
          className="title-center"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Building Intelligent
          <br /> Manufacturing Experiences
        </motion.h2>

        <motion.p
          className="subtitle-center"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          We are on a mission to help teams build world-class product
          experiences <br /> that simplify operations and empower smarter
          decisions.
        </motion.p>
      </div>
      <div className="relative mx-auto mt-20 w-fit">
        <div className="solutions-hero-glow-top" />

        <div className="solutions-hero-glow-left" />

        <div className="solutions-hero-glow-right" />
        <div className="solutions-hero-glow-bottom" />

        <div className="relative rounded-xl overflow-hidden">
          <Image
            src="/about/about-hero.png"
            alt="Dashboard preview"
            width={1100}
            height={700}
            priority
            className="object-contain relative z-10 image-reveal-color"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
