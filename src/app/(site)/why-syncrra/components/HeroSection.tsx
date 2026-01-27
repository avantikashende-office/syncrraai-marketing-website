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
      <div className="  hero-top-space space-y-8 ">
        <div className="space-y-8">
          <div className="space-y-2">
            <motion.h1
              className="gradient-gray-text title-center"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              One ERP Platform.
              <br /> All Business Sizes.
            </motion.h1>
          </div>

          <motion.p
            className="subtitle-center"
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
          >
            The first ERP designed to scale with you—from startup to enterprise.
            No migration headaches. No system changes. Just seamless growth.
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

        <div className="relative mx-auto mt-20 w-fit">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/WhySyncrra/why-syncrra.svg"
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
        <AnimatedRevealText
          className="text-4xl leading-tight text-[#404040]"
          text=" '' Syncrra transformed how we manage daily operations. What used to take hours across multiple tools now happens automatically in one place. '' "
        />
       
      </div>
    </section>
  );
}
