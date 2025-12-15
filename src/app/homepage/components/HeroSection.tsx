"use client";

import { useTranslation } from 'react-i18next';
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Sparkles } from 'lucide-react';
import { fadeInMain, waveContainer, waveLetters } from '@/utils/animations';
import { motion } from 'framer-motion';

export default function Herosection() {
  const { t } = useTranslation();

  const title = t("hero.title");
  const highlight = t("hero.titleHighlight");
  const fullTitle = `${title} ${highlight}`;

  return (
    <section className="hero-bg">
      <div className="hero-layout">

        {/* Badge - fadeUp */}
        <motion.div
          variants={fadeInMain}
          initial="initial"
          animate="animate"
        >
          <Badge label={t('hero.badge')} icon={<Sparkles fill="white" size={18} />} />
        </motion.div>

        {/* H1 - wave letters */}
        <motion.h1
          variants={fadeInMain}
          initial="initial"
          animate="animate"
          className="hero-title-center">

          {t('hero.title')} <br />

          <span className="gradient-text">{t('hero.titleHighlight')}
          </span>

        </motion.h1>

        {/* Description - fadeUp */}
        <motion.p
          className="hero-subtitle-center"
          variants={fadeInMain}
          initial="initial"
          animate="animate"
        >
          {t('hero.description')}
        </motion.p>

        {/* Buttons (unchanged) */}
        <div className="hero-button-group">
          <Button variant="primary">{t('hero.getStarted')}</Button>
          <Button variant="secondary">{t('hero.bookDemo')}</Button>
        </div>

      </div>
    </section>
  );
}

