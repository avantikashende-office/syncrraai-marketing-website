"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

export default function Herosection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotateXRaw = useTransform(scrollYProgress, [0, 0.35], [30, -15]);

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 50,
    damping: 18,
    mass: 0.1,
  });

  return (
    <section
      ref={ref}
      className="hero-bg relative h-[220vh] overflow-hidden bg-black"
    >
      <motion.div
        className="hero-dashboard sticky flex items-center justify-center"
        style={{
          rotateX,
          transformPerspective: 1200,
          transformOrigin: "50% 100%",
        }}
      >
        <img
          src="/bg.svg"
          alt="Dashboard"
          className="w-full mx-auto  max-w-[90%] will-change-transform"
        />
      </motion.div>

      <div className="hero-layout  hero-top-space   relative z-10 pointer-events-none">
        <Badge
          label={t("hero.badge")}
          icon={<Sparkles fill="white" size={18} />}
        />

        <h1 className="title-center">
          {t("hero.title")} <br />
          <span className="gradient-text">{t("hero.titleHighlight")}</span>
        </h1>

        <p className="subtitle-center">{t("hero.description")}</p>

        <div className="hero-button-group pointer-events-auto">
          <Button variant="primary">{t("hero.getStarted")}</Button>
          <Button variant="secondary">{t("hero.bookDemo")}</Button>
        </div>
      </div>
    </section>
  );
}
