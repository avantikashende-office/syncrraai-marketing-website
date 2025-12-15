"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";


export function SeamlessIntegrationsSection() {
  return (
    <section className=" ">
      <div className="section-container space-y-8">
        <div className="flex justify-center">
          <Badge label="INTEGRATIONS" />
        </div>

        <motion.h2 
          className="integrations-title"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Seamless Integrations, <br /> Zero Friction
        </motion.h2>

        <div className="integrations-image-wrapper">
          <Image
            src={"/img/seamlessintegration.png"}
            alt="UnifiedSolution."
            width={800}
            height={0}
            className="integrations-image"
          />
        </div>

        <motion.p 
          className="integrations-description"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Plug Syncrra into your workflow with just a click. <br />
          No messy setups, no dev tie needed, just instant productivit
        </motion.p>
        <div className="integrations-cta">
          <Button variant="primary">Try Syncrra for Free </Button>
        </div>
      </div>

    </section>
  );
}