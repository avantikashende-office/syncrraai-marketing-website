"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  easeOut,
} from "framer-motion";
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
    offset: ["start start", "center start"],
  });

  // 🔥 HEAVY HERO SPRING (not UI spring)
  const spring = {
    stiffness: 45,
    damping: 22,
    mass: 1.4,
  };

  /* ---------------- PHASED RAW VALUES ---------------- */

  const yRaw = useTransform(
    scrollYProgress,
    [0, 0.25],
    [180, 0],
    { ease: easeOut }
  );

  const scaleRaw = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6],
    [0.88, 1.06, 1.03],
    { ease: easeOut }
  );

  const rotateXRaw = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6],
    [42, 0, -14],
    { ease: easeOut }
  );

  // ⭐ micro yaw for realism
  const rotateYRaw = useTransform(
    scrollYProgress,
    [0, 0.25],
    [-6, 0],
    { ease: easeOut }
  );

  const zRaw = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6],
    [-420, -60, -260],
    { ease: easeOut }
  );

  const perspectiveRaw = useTransform(
    scrollYProgress,
    [0, 0.25, 0.6],
    [220, 9000, 1800],
    { ease: easeOut }
  );

  // 🔍 clarity = realism
  const blurRaw = useTransform(
    scrollYProgress,
    [0, 0.15, 0.3],
    [10, 2, 0]
  );

  const brightnessRaw = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.7, 1]
  );

  const contrastRaw = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.8, 1]
  );

  /* ---------------- SPRINGED VALUES ---------------- */

  const y = useSpring(yRaw, spring);
  const scale = useSpring(scaleRaw, spring);
  const rotateX = useSpring(rotateXRaw, spring);
  const rotateY = useSpring(rotateYRaw, spring);
  const z = useSpring(zRaw, spring);
  const perspective = useSpring(perspectiveRaw, spring);
  const blur = useSpring(blurRaw, spring);
  const brightness = useSpring(brightnessRaw, spring);
  const contrast = useSpring(contrastRaw, spring);

  return (
    <section ref={ref} className="hero-bg">
      {/* DASHBOARD IMAGE */}
      <motion.div
        className="hero-dashboard"
        style={{
          y,
          scale,
          rotateX,
          rotateY,
          translateZ: z,
          transformPerspective: perspective,
          transformOrigin: "50% 100%", // TOP LOCK (stand effect)
          filter: `
            blur(${
              blur
            }px)
            brightness(${
              brightness
            })
            contrast(${
              contrast
            })
          `,
        }}
      >
        <img src="/bg.svg" alt="Dashboard" />
      </motion.div>

      {/* CONTENT */}
      <div className="hero-layout pt-[120px] relative z-10">
        <Badge
          label={t("hero.badge")}
          icon={<Sparkles fill="white" size={18} />}
        />

        <h1 className="hero-title-center">
          {t("hero.title")} <br />
          <span className="gradient-text">
            {t("hero.titleHighlight")}
          </span>
        </h1>

        <p className="hero-subtitle-center">
          {t("hero.description")}
        </p>

        <div className="hero-button-group">
          <Button variant="primary">{t("hero.getStarted")}</Button>
          <Button variant="secondary">{t("hero.bookDemo")}</Button>
        </div>
      </div>
    </section>
  );
}

