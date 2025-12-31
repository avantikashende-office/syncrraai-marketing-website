"use client";

import Button from "../ui/Button";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import Image from "next/image";

const TryForFreeSection = () => {
  return (
    <section className="section-container">
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-black to-[#1C984B]">

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0">

          {/* LEFT COLUMN */}
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

          {/* RIGHT COLUMN (EMPTY – image is absolute) */}
          <div className="relative" />
        </div>

        {/* ABSOLUTE IMAGE — breaks column */}
        <div className="absolute right-[-8%] top-1/2 -translate-y-1/2">
          <Image
            src="/Rectangle.png"
            alt="Syncrra Dashboard Preview"
            width={850}
            height={620}
            priority
            className="
              rounded-xl
              shadow-2xl
            "
          />
        </div>

      </div>
    </section>
  );
};

export default TryForFreeSection;
