"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { fadeInLeft, fadeInRight } from "@/utils/animations";

export default function Herosection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotateXRaw = useTransform(scrollYProgress, [0, 0.35], [15, -10]);

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 50,
    damping: 18,
    mass: 0.1,
  });

  return (
    <section ref={ref} className="hero-bg">
      <motion.div
        className="hero-dashboard"
        style={{
          rotateX,
          transformPerspective: "clamp(800px, 100vw, 1200px)",
          transformOrigin: "50% 130%",
        }}
      >
        <img
          src="/bg.svg"
          alt="Dashboard"
          className="w-full mx-auto max-w-[95vw] will-change-transform"
        />
      </motion.div>

      <div className="hero-layout   relative z-10">
        <Badge
          label={t("hero.badge")}
          icon={<Sparkles fill="white" size={18} />}
        />

        <motion.h1
          className="gradient-gray-text title-center"
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
        >
          {t("hero.title")} <br />
          <span className="gradient-text">Connected Intelligence</span>
        </motion.h1>

        <motion.p
          className="subtitle-center"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
        >
          Syncrra brings your operations into one intelligent system. From gate
          entry to billing, every action is connected, traceable, and driven by
          real-time intelligence.
        </motion.p>

        <div className="hero-button-group pointer-events-auto">
          <Link
            href="https://app.syncrra.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Get Started</Button>
          </Link>
          <Button variant="secondary">{t("hero.bookDemo")}</Button>
        </div>
      </div>
    </section>
  );
}
