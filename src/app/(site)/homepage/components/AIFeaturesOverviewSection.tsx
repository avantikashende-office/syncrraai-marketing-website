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
                A unified operational layer that connects planning, production, quality, dispatch, and billing into one continuous, system-driven flow.
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
                  Get instant answers from live operational data. Ask questions in natural language and receive clear summaries, trends, and visual insights.
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
                  Anticipate demand, identify risks, and spot performance trends early using predictive models built on your operational data.
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
                An intelligent assistant that understands your workflows, supports daily decisions, and helps teams act faster without switching tools.
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
               Automate approvals, validations, and routine operational tasks to reduce manual effort and accelerate execution across teams.
              </p>
            </div>
          </EmptyCard>
        </div>
      </div>
    </section>
  );
}
