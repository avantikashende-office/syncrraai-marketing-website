"use client";

import Button from "@/components/ui/Button";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section-container">
      <div className="  hero-top-space  ">
        <div className="space-y-8">
          <div className="space-y-2">
            <motion.h1
              className="gradient-gray-text title-center"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              Enterprise Intelligence <br /> at Manufacturing Scale
            </motion.h1>
          </div>

          <motion.p
            className="subtitle-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Unify large-scale operations with real-time insights <br /> and
            control
          </motion.p>

          <motion.div
            className="flex justify-center items-center gap-4"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            <Button>Get Started</Button>
            <Button variant="secondary">Book a Demo</Button>
          </motion.div>
        </div>

        <div className="relative mx-auto mt-20 w-fit">
          <div className="solutions-hero-glow-top" />

          <div className="solutions-hero-glow-left" />

          <div className="solutions-hero-glow-right" />

          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/solutions/solutions-hero.svg"
              alt="Dashboard preview"
              width={1100}
              height={700}
              priority
              className="object-contain relative z-10"
            />
            <div className="solutions-hero-overlay" />
          </div>
        </div>

        {/* <div className="relative flex justify-center overflow-hidden py-24">
         
          <div className="relative z-10">
            <Image
              src="/solutions/solutions-hero.svg"
              alt="Dashboard preview"
              width={1100}
              height={700}
              priority
              className="object-contain"
            />
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
        </div> */}
      </div>
    </section>
  );
}
