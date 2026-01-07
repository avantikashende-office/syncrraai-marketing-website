"use client";

import Button from "../ui/Button";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import Image from "next/image";

const TryForFreeSection = () => {
  return (
    <section className="section-container">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src="/img/Tryfree.png"
          alt="Syncrra Dashboard Preview"
          fill
          priority
          className="object-contain"
        />
        {/* CONTENT */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8 px-10 md:pl-20 md:pr-40 py-20 md:py-28">
            <motion.h2
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
              className="text-3xl md:text-4xl font-semibold leading-tight"
            >
              Try Syncrra Free <br /> for 30 Days
            </motion.h2>

            <motion.p
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
              className="text-lg text-white/70 max-w-md"
            >
              Start taking control of your business today
            </motion.p>

            <Button variant="primary" className="w-fit">
              Get Started
            </Button>
          </div>
          <div />
        </div>
      </div>
    </section>
  );
};

export default TryForFreeSection;
