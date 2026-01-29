"use client";

import Button from "@/components/ui/Button";
import AnimatedRevealText from "@/components/ui/TestimonialText";
import { fadeInMain, fadeInRight } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="section-container">
      <div className="  hero-top-space space-y-12 ">
        <div className="space-y-8 hero-top-space ">
          <div className="space-y-2">
            <motion.h1
              className="gradient-gray-text title-center"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              One ERP Platform.
              <br /> Built for Every Stage of Manufacturing
            </motion.h1>
          </div>

          <motion.p
 className="subtitle-center !max-w-[clamp(280px,90vw,800px)]"            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
          >
            Syncrra is an AI-first manufacturing ERP designed to grow with your
            business. From early-stage factories to large-scale enterprises,
            Syncrra adapts without reimplementation, rework, or disruption.
          </motion.p>

          <motion.div
            className="flex justify-center items-center gap-4"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            <Link
              href="https://app.syncrra.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Get Started</Button>
            </Link>
            <Button variant="secondary">Book a Demo</Button>
          </motion.div>
        </div>

        <div className="relative mx-auto w-fit">
          <div className="solutions-hero-glow-top" />

          <div className="solutions-hero-glow-left" />

          <div className="solutions-hero-glow-right" />
          <div className="solutions-hero-glow-bottom" />
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/WhySyncrra/ws.svg"
              alt="Dashboard preview"
              width={1100}
              height={700}
              priority
              className="object-contain relative z-10"
            />
            <div className="solutions-hero-overlay" />
          </div>
        </div>

        {/* Quote */}
        <div className="mt-[clamp(3rem,8vw,7.5rem)]">
          <AnimatedRevealText
            className="text-4xl leading-tight text-[#404040]"
            text=" '' Syncrra changed the way we run our factory. What once required multiple tools, follow-ups, and manual checks now happens automatically in one connected system. '' "
          />
        </div>
      </div>
    </section>
  );
}
