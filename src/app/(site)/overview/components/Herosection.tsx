"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="section-container">
      <div className="hero-top-space  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="space-y-8">
            <div className="space-y-2">
              <motion.h1
                className="gradient-gray-text title-side font-bold"
                variants={fadeInMain}
                initial="initial"
                whileInView="animate"
              >
                One Platform.
                <br />
                Every Manufacturing
              </motion.h1>

              <motion.h1
                className="gradient-text title-side "
                variants={fadeInMain}
                initial="initial"
                whileInView="animate"
              >
                Workflow.
              </motion.h1>
            </div>

            <motion.p
              className="subtitle-side"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              Empower your enterprise with an AI-powered ERP that learns,
              adapts, and evolves — simplifying complexity into seamless motion.
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
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            {/* GREEN GLOW */}
            

            {/* IMAGE */}
            <Image
              src="/product-overview/po-hero.svg"
              alt="Dashboard preview"
              width={820}
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
