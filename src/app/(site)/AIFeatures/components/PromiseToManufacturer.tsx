"use client";

import EmptyCard from "@/components/ui/EmptyCard";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import { CircleOff, Users, X } from "lucide-react";
import Image from "next/image";

export default function PromiseToManufacturer() {
  const promiseCards = [
    {
      title: "No Third-Party AI Training",
      description:
        "Your operational data is never used to train external AI models.",
      icon: CircleOff,
    },
    {
      title: "Zero Data Leakage",
      description: "All your factory data stays fully isolated.",
      icon: X,
    },
    {
      title: "Role-Based Intelligence Access",
      description: "Role-based access shows only relevant information.",
      icon: Users,
    },
  ];
  return (
    <section className="section-container-gray  space-y-10">
      <motion.h2
        className="title-center"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        Our AI Promise to Manufacturers
      </motion.h2>
      <motion.p
        className="subtitle-center"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        We build AI responsibly because your production data, machines, and
        <br /> decisions are critical to your business. Here’s how we’re doing
        that
      </motion.p>

      <div className="ai-promise-image-wrapper">
        <Image
          src="/img/Lock.png"
          alt="Security Lock"
          fill
          className="object-contain z-0"
          priority
        />

        <div className="ai-promise-stars-overlay">
          <Image
            src="/img/stars.png"
            alt="Trust Stars"
            width={2000}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      <div className="ai-promise-cards-grid">
        {promiseCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <EmptyCard
              key={index}
              className="ai-promise-card"
            >
              <div className="ai-promise-icon-wrapper">
                <Icon fill="white" />
              </div>

              <h3 className="ai-promise-card-title">
                {card.title}
              </h3>

              <p className="text-subdescription">{card.description}</p>
            </EmptyCard>
          );
        })}
      </div>
    </section>
  );
}
