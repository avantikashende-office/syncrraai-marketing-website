"use client";
import Badge from "@/components/ui/Badge";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProcessSection() {
  return (
    <section className="section-container">
      <div className="space-y-6">
        <div className="flex justify-center">
          <Badge label="PROCESS" />
        </div>
        <motion.h2
          className="title-center gradient-gray-text"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          End-to-End Manufacturing,
          <br />
          Unified in One Flow
        </motion.h2>
        <div className="flex justify-between">
          <p className="subtitle-center">
            From planning to production to quality all connected and
            intelligent.
          </p>
        </div>

          <Image
            src={"/homepage/process.gif"}
            alt="UnifiedSolution."
            width={800}
            height={0}
            className="process-image"
          />
      </div>
    </section>
  );
}
