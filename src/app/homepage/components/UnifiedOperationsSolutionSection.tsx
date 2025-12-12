"use client";

import Badge from "@/components/ui/Badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

export function UnifiedOperationsSolutionSection() {
  return (
    <section className="unified-section">
      <div className="section-container space-y-8">
        <div className="flex justify-center">
          <Badge label="ALL IN ONE SOLUTION" />
        </div>

        <motion.h2 
          className="unified-title"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          One System for Your <br /> Entire Plant
        </motion.h2>

        <motion.p 
          className="unified-description"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          A single ERP designed to manage planning, production, inventory, <br />
          machines, teams, and financials all in one connected platform.
        </motion.p>

        <div className="unified-image-wrapper">
          <Image
            src={"/img/UnifiedSolution.png"}
            alt="UnifiedSolution."
            width={800}
            height={0}
            className="unified-image"
          />
        </div>


      </div>
    </section>
  );
}