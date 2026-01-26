"use client";

import Badge from "@/components/ui/Badge";
import EmptyCard from "@/components/ui/EmptyCard";
import { fadeInLeft, fadeInMain, fadeInRight } from "@/utils/animations";
import { GearFine, TrendUp, Wallet, Warning } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function AIFeaturesOverviewSection() {
  const tiltRef = useRef<HTMLDivElement>(null);

  const chips = [
    { label: "Anomaly Forecasting", icon: Warning },
    { label: "Demand Forecasting", icon: TrendUp },
    { label: "Performance Forecasting", icon: GearFine },
    { label: "Revenue Forecasting", icon: Wallet },
  ];

  return (
    <section className="section-container space-y-16">
      {/* HEADER */}
      <div className="space-y-8">
        <Badge label="AI FEATURES" />

        <div className="flex flex-col gap-6 w-full md:flex-row md:justify-between md:items-start">
          {/* Left: Title */}
          <motion.h1
            className="title-side gradient-gray-text md:w-1/2 "
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            One Platform.
            <br />
            Infinite Possibilities.
          </motion.h1>

          {/* Right: Text */}
          <div className="md:w-1/2">
            <motion.p
              className="subtitle-side"
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
            >
              Built to simplify complex operations and enable faster,
              data-driven decisions across manufacturing, supply chain, and
              finance. All from one connected system.
            </motion.p>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="ai-grid">
        <div className="ai-grid-row-2col">
          {/* LARGE CARD */}
          <EmptyCard className="ai-card">
            <div className="ai-card-image-hero">
              <Image
                src="/homepage/so.gif"
                alt="Smart Operations"
                fill
                className="object-cover"
              />
            </div>

            <div className="ai-card-text">
              <h4 className="ai-card-title">Smart Operations</h4>
              <p className="text-subdescription">
                A unified operational layer that connects planning, production,
                quality, dispatch, and billing into one continuous,
                system-driven flow.
              </p>
            </div>
          </EmptyCard>

          {/* RIGHT STACK */}
          <div className="ai-grid-inner">
            <EmptyCard className="ai-card">
              <div
                ref={tiltRef}
                className="ai-card-image-stack bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.35)_0%,rgba(0,0,0,0.85)_55%,#000_75%)]
 flex items-center justify-center"
              >
                {/* LEFT IMAGE */}
                <motion.div
                  variants={fadeInLeft}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: false }}
                  animate={{ rotateZ: [-6, 6, -6] }}
                  transition={{
                    rotateZ: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="relative w-[60%] h-full mt-20 -mr-20 z-10"
                >
                  <Image
                    src="/homepage/left.svg"
                    alt="AI Powered Insights"
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                  variants={fadeInRight}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: false }}
                  animate={{ rotateZ: [6, -6, 6] }}
                  transition={{
                    rotateZ: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="relative w-[60%] h-full mt-10 -ml-20 z-0"
                >
                  <Image
                    src="/homepage/right.svg"
                    alt="AI Powered Insights"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>

              <div className="ai-card-text">
                <h4 className="ai-card-title">AI Powered Insights</h4>
                <p className="text-subdescription">
                  Get instant answers from live operational data. Ask questions
                  in natural language and receive clear summaries, trends, and
                  visual insights.
                </p>
              </div>
            </EmptyCard>

            <EmptyCard className="ai-card">
              <div className="ai-card-image-stack">
                {/* Graph Image */}
                <Image
                  src="/homepage/forecast-graph.svg"
                  fill
                  className="object-cover"
                  alt="Forecast Graph"
                />

                <motion.div
                  className="flex gap-4 w-max mt-8"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...chips, ...chips].map((chip, i) => {
                    const Icon = chip.icon;

                    return (
                      <div
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-md 
                   bg-[#2a2a2a] text-sm text-white  whitespace-nowrap"
                      >
                        <Icon size={20} />
                        {chip.label}
                      </div>
                    );
                  })}
                </motion.div>

                {/* Moving Dot */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute left-[45%] top-[65%] w-4 h-4 rounded-full 
bg-green-500 shadow-[0_0_15px_#22c55e] 
flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </motion.div>
              </div>

              <div className="ai-card-text">
                <h4 className="ai-card-title">AI Forecasting</h4>
                <p className="text-subdescription">
                  Anticipate demand, identify risks, and spot performance trends
                  early using predictive models built on your operational data.
                </p>
              </div>
            </EmptyCard>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="ai-grid-row-split">
          <EmptyCard className="ai-card">
            <div className="ai-card-image-wide">
              <Image
                src="/homepage/aa.svg"
                alt="Agentic AI"
                fill
                className="object-cover"
              />
            </div>

            <div className="ai-card-text">
              <h4 className="ai-card-title">Agentic AI</h4>
              <p className="text-subdescription">
                An intelligent assistant that understands your workflows,
                supports daily decisions, and helps teams act faster without
                switching tools.
              </p>
            </div>
          </EmptyCard>

          {/* LARGE CARD */}
          <EmptyCard className="ai-card">
            <div className="ai-card-image-stat">
              <Image
                src="/homepage/989.svg"
                alt="98% Faster Automation"
                fill
                className="object-cover"
              />
            </div>

            <div className="ai-card-text">
              <h4 className="ai-card-title">Up to 98% Faster Automation</h4>
              <p className="text-subdescription">
                Automate approvals, validations, and routine operational tasks
                to reduce manual effort and accelerate execution across teams.
              </p>
            </div>
          </EmptyCard>
        </div>
      </div>
    </section>
  );
}
