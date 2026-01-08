"use client";

import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { ArrowDown, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

const Counter = dynamic(() => import("@/components/ui/Counter"), {
  ssr: false,
});

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="section-container flex justify-center items-center px-4">
      <motion.div
        className="stats-card"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* LEFT TEXT WRAPPER */}
        <div className="stats-text-wrapper">
          <h3 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
            <Counter to={24000} />+ <br />
            Happy Customers
          </h3>
          <p className="">
            {t("stats.customersSubtitle") || "Using Syncrra everyday and loving it!"}
          </p>
        </div>

        {/* RIGHT STATS GRID */}
        <div className="stats-grid">
          
          {/* STAT 1 */}
          <div className="stat-item">
            <div className="icon-wrapper">
              <div className="icon-container">
                <ArrowUp className="text-white text-xl" />
              </div>
            </div>
            {/* Flex Column for Text ensures it stays to the right of the icon */}
            <div className="flex flex-col">
              <span className="text-stat-number">
                <Counter to={5} />x
              </span>
              <p className="text-stat-label">Faster AI Insights for Dashboards</p>
            </div>
          </div>

          {/* STAT 2 */}
          <div className="stat-item">
            <div className="icon-wrapper">
              <div className="icon-container">
                <ArrowDown className="text-white text-xl" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-stat-number">
                <Counter to={72} />%
              </span>
              <p className="text-stat-label">
                {t("stats.reductionDowntime") || "Reduction in Production Downtime"}
              </p>
            </div>
          </div>

          {/* STAT 3 */}
          <div className="stat-item">
            <div className="icon-wrapper">
              <div className="icon-container">
                <ArrowUp className="text-white text-xl" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-stat-number">
                <Counter to={99} />%
              </span>
              <p className="text-stat-label">
                {t("stats.customerSatisfaction") || "Customer Satisfaction"}
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}