"use client";

import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import { Car, Factory, FireExtinguisher, Pill } from "lucide-react";
import { InlineNavigation } from "@/components/ui/INlineNavigation";

export function AllInOne() {
  return (
    <section className="section-container-gray my-20 space-y-8">
      <div className="flex justify-center">
        <Badge label="ALL IN ONE SOLUTION" />
      </div>

      <motion.h2
        className="title-center"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        Optimized to Serve Every <br />
        Use Case Across Industries
      </motion.h2>

      <motion.p
        className="subtitle-center"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        Syncrra adapts to various use cases and industries
      </motion.p>

      <InlineNavigation
        items={[
          {
            id: "fabrication",
            label: "Metal Fabrication",
            icon: <Factory className="w-[45%] h-[45%]" />,
            video: {
              src: "",
              poster: "/homepage/1.png",
            },
          },
          {
            id: "Automotive",
            label: "Automotive",
            icon: <Car className="w-[45%] h-[45%]" />,
            video: {
              src: "",
              poster: "/homepage/2.png",
            },
          },

          {
            id: "pharma",
            label: "Pharmaceuticals",
            icon: <Pill className="w-[45%] h-[45%]" />,
            video: {
              src: "",
              poster: "/homepage/1.png",
            },
          },
          {
            id: "fire",
            label: "Casting & Foundries",
            icon: <FireExtinguisher className="w-[45%] h-[45%]" />,
            video: {
              src: "",
              poster: "/homepage/2.png",
            },
          },
        ]}
      />
    </section>
  );
}
