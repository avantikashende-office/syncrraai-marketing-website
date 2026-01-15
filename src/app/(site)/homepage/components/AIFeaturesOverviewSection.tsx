"use client";

import Badge from "@/components/ui/Badge";
import EmptyCard from "@/components/ui/EmptyCard";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

export function AIFeaturesOverviewSection() {
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
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              Designed to simplify complexities and empower data-backed
              decisions, it is your single source of truth for smarter business
              growth.
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
                AI-driven workflows across manufacturing operations
              </p>
            </div>
          </EmptyCard>

          {/* RIGHT STACK */}
          <div className="ai-grid-inner">
            <EmptyCard className="ai-card">
              <div className="ai-card-image-stack">
                <Image
                  src="/homepage/api.svg"
                  alt="AI Powered Insights"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="ai-card-text">
                <h4 className="ai-card-title">AI Powered Insights</h4>
                <p className="text-subdescription">
                  Instant insights from real-time operational data
                </p>
              </div>
            </EmptyCard>

            <EmptyCard className="ai-card">
              <div className="ai-card-image-stack">
                <Image
                  src="/homepage/aiF.svg"
                  alt="AI Forecasting"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="ai-card-text">
                <h4 className="ai-card-title">AI Forecasting</h4>
                <p className="text-subdescription">
                  Predict demand, risks, and performance trends
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
                Ask questions. Get actions, insights instantly
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
              <h4 className="ai-card-title">98% Faster Automation</h4>
              <p className="text-subdescription">
                AI-powered automation at operational scale
              </p>
            </div>
          </EmptyCard>
        </div>
      </div>
    </section>
  );
}
