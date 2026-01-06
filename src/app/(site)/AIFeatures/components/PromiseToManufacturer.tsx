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

      <div className="relative w-full aspect-[23/7] my-20">
        <Image
          src="/img/Lock.png"
          alt="Security Lock"
          fill
          className="object-contain z-0"
          priority
        />

        <div className="absolute inset-x-0 bottom-0 z-10 translate-y-[65%]">
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

      <div className="grid grid-cols-3 gap-16 pt-[20%]">
        {promiseCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <EmptyCard
              key={index}
              className="testimonial-card border flex flex-col justify-between items-center text-center !space-y-4"
            >
              <div className="flex justify-center items-center bg-[#444444] rounded-lg w-16 h-16">
                <Icon fill="white" />
              </div>

              <h3 className="customer-testimonial-name max-w-[75%]">
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
