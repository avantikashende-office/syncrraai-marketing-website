"use client";


import { fadeInMain, fadeInRight } from "@/utils/animations";
import { motion } from "framer-motion";

export default function TradiionalERPvsSyncrra() {
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
            Why Traditional ERPs Hold You Back
          </motion.h1>
        </div>

        <motion.p
          className="subtitle-center"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
        >
          Most ERPs force you to choose between systems built for small, medium,
          <br />
          or large businesses. We built one platform that grows with you.
        </motion.p>
      </div>
    </section>
  );
}
