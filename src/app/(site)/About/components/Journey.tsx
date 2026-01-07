"use client";

import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const Journey = () => {
  return (
    <div className="relative overflow-visible">
      <section className="section-container">
        <div className="max-w-[50%]  space-y-12 ">
          <motion.h3
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
            className="title-side gradient-gray-text"
          >
            Our Journey
          </motion.h3>

          <motion.p
            className="subtitle-side "
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Syncrra began with a simple insight: manufacturing systems generate
            a vast stream of data, but most companies never turn that data into
            real operational advantage. We started Syncrra to build intelligence
            into every decision to help manufacturers not only see what is
            happening, but understand why, and act before issues arise.
          </motion.p>
        </div>
      </section>

      {/* IMAGE */}
      <div className="ai-image-right">
        <Image
          src="/about/about-journey.png"
          alt="User"
          fill
          className=" rounded-tl-2xl rounded-bl-2xl image-reveal-color"
          priority
        />
      </div>
    </div>
  );
};

export default Journey;
