"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInMain, fadeInRight } from "@/utils/animations";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="section-container">
      <div className="hero-top-space  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <motion.h1
              className="gradient-gray-text title-side"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              One Platform.
              <br />
              Every Manufacturing
              <span className="gradient-text title-side "> Workflow.</span>
            </motion.h1>

            <motion.p
              className="subtitle-side"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              Empower your enterprise with an AI-powered ERP that learns,
              adapts, and evolves - simplifying complexity into seamless motion.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              <Button>Get Started</Button>
              <Button variant="secondary">Book a Demo</Button>
            </motion.div>
          </div>

          <motion.div
            className="relative flex justify-center lg:justify-end"
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
          >
            {/* IMAGE */}
            <Image
              src="/product-overview/po-hero.svg"
              alt="Dashboard preview"
              width={1220}
              height={820}
              className="relative z-10 object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
