"use client";

import { useTranslation } from 'react-i18next';
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { Sparkles } from 'lucide-react';

export default function Herosection() {
  const { t } = useTranslation();

  return (
    <section className="hero-bg">
      <div className="hero-layout">
        <Badge label={t('hero.badge')} icon={<Sparkles fill="white" size={18} />} />

        <h1 className="text-hero text-center">
          {t('hero.title')}
          <br />
          <span className="gradient-text">{t('hero.titleHighlight')}</span>
        </h1>

        <p className="text-description text-center">
          {t('hero.description')}
        </p>

        <div className="hero-button-group">
          <Button variant="primary">{t('hero.getStarted')}</Button>
          <Button variant="secondary">{t('hero.bookDemo')}</Button>
        </div>
      </div>
    </section>
  );
}
