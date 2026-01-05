"use client";

import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PromiseToManufacturer() {
  return (
    <section className="section-container-gray  space-y-10">
      <motion.h2
        className="title-center"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        Our AI Promise to Manufacturers
      </motion.h2>
      <motion.p
        className="subtitle-center"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        We build AI responsibly because your production data, machines, and
        <br /> decisions are critical to your business. Here’s how we’re doing
        that
      </motion.p>

      <div className="relative w-full aspect-[25/9] my-20">
        <Image
          src="/img/Lock.png"
          alt="Security Lock"
          fill
          className="object-contain z-0"
          priority
        />

        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-[65%]">
          <Image
            src="/img/stars.png"
            alt="Trust Stars"
            width={2000}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
