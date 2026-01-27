"use client";
import Badge from "@/components/ui/Badge";
import { fadeInMain, fadeInRight } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProcessSection() {
  return (
    <section className="
    px-[clamp(1rem,5vw,3rem)]
    pt-[clamp(2rem,2vh,3rem)]">
      <div className="space-y-6">
        <div className="flex justify-center z-20">
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
        <motion.p
          className="subtitle-center"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
        >
          From planning and inventory to production, quality, dispatch, and
          billing, every step runs as one connected, approval-driven workflow.
        </motion.p>

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
