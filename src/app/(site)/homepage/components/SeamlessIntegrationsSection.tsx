"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

export function SeamlessIntegrationsSection() {
  return (
    <section className="section-container space-y-6">
      <div className="flex justify-center">
        <Badge label="INTEGRATIONS" />
      </div>

      <motion.h1
        className="title-center gradient-gray-text"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        Seamless Integrations, <br /> Zero Operational Friction
      </motion.h1>

      <div className="integrations-image-wrapper">
        <div className="integrations-image">
          <Image
            src="/homepage/seamlessintegration.gif"
            alt="UnifiedSolution."
            fill
            className="object-contain sm:object-cover"
            priority
          />
        </div>
      </div>

      <motion.p
        className="subtitle-center"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        Plug Syncrra into your existing ecosystem in minutes. No complex configurations, no brittle dependencies—just reliable, system-driven integration.
      </motion.p>
      <div className="flex justify-center">
        <Button variant="primary">Try Syncrra for Free </Button>
      </div>
    </section>
  );
}
