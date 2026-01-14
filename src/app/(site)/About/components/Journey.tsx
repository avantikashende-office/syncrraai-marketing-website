"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInMain } from "@/utils/animations";

const Journey = () => {
  return (
    <section className="content-section">
      <div className="content-wrap">
        <div className="split-block">
          <div className="split-pane">
            <motion.h3
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
              className="split-title title-side gradient-gray-text"
            >
              Our Journey
            </motion.h3>

            <motion.p
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
              className="split-text subtitle-side"
            >
              Syncrra began with a simple insight: manufacturing systems
              generate a vast stream of data, but most companies never turn that
              data into real operational advantage. We started Syncrra to build
              intelligence into every decision to help manufacturers not only
              see what is happening, but understand why, and act before issues
              arise.
            </motion.p>
          </div>

          <div className="split-media">
            <div className="split-media-frame">
              <Image
                src="/about/about-journey.png"
                alt="Journey"
                fill
                className="split-media-img image-reveal-color"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
