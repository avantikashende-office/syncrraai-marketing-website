"use client";

import Button from "@/components/ui/Button";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="section-container">
      <div className=" pt-[120px]">
        <div className="space-y-8">
          <div className="space-y-2">
            <motion.h1
              className="gradient-gray-text title-center"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              Lightweight ERP Power <br />
              for Small Industries
            </motion.h1>
          </div>

          <motion.p
            className="subtitle-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            un operations smoothly with AI-driven automation <br /> and clarity
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
          <div
            className="pointer-events-none absolute -inset-8 rounded-2xl 
    bg-[radial-gradient(ellipse_at_top,_rgba(0,255,140,0.35),_transparent_60%)]
    blur-3xl"
          />

          <div
            className="pointer-events-none absolute -inset-6 rounded-2xl 
    bg-[radial-gradient(ellipse_at_left,_rgba(0,255,140,0.25),_transparent_60%)]
    blur-3xl"
          />

          <div
            className="pointer-events-none absolute -inset-6 rounded-2xl 
    bg-[radial-gradient(ellipse_at_right,_rgba(0,255,140,0.25),_transparent_60%)]
    blur-3xl"
          />

          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/solutions/solutions-hero.svg"
              alt="Dashboard preview"
              width={1100}
              height={700}
              priority
              className="object-contain relative z-10"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-48 
      bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20"
            />
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
