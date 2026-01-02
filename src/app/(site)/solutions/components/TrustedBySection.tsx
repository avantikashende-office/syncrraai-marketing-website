"use client";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";

export default function TrustedBy() {
  return (
    <section className="section-container">
      <div className="space-y-8">
        <div className="space-y-2">
          <motion.h1
            className="gradient-gray-text title-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Trusted by the Most <br />
            Innovative Companies
          </motion.h1>
        </div>

        <motion.p
          className="subtitle-center"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Join 100k + customers who use our platform to take <br /> their
          operational efforts to the next level.
        </motion.p>
      </div>
    </section>
  );
}
