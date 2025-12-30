import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import EmptyCard from "@/components/ui/EmptyCard";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function AIFeaturesOverviewSection() {
  return (
    <section className="section-container space-y-16">
      {/* HEADER */}
      <div className="space-y-8">
        <Badge label="AI FEATURES" />

        <h1 className="title-side gradient-gray-text">
          One Platform.
          <br />
          Infinite Possibilities.
        </h1>

        <div className="flex items-start justify-between">
          <p className="subtitle-side">
            Designed to simplify complexities and empower data-backed decisions,
            <br />
            it is your single source of truth for smarter business growth.
          </p>

          <Button variant="outline">
            Explore More <ArrowUpRight size={20} />
          </Button>
        </div>
      </div>

      {/* GRID */}
      <div className="ai-grid">
        <div className="ai-grid-row-2col">
          {/* BIG CARD */}
          <EmptyCard className="ai-card">
            <div className="ai-card-image">
              <Image
                src="/homepage/so.png"
                alt="Smart Operations"
                fill
                className="object-cover"
              />
            </div>

            <div className="ai-card-text">
              <h4 className="ai-card-title">Smart Operations</h4>
              <p className="ai-card-subtitle">
                AI-driven workflows across manufacturing operations
              </p>
            </div>
          </EmptyCard>

          <div className="ai-grid-inner">
            <EmptyCard className="ai-card">
              <div className="ai-card-image">
                <Image
                  src="/homepage/api.png"
                  alt="AI Powered Insights"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="ai-card-text">
                <h4 className="ai-card-title">AI Powered Insights</h4>
                <p className="ai-card-subtitle">
                  Instant insights from real-time operational data
                </p>
              </div>
            </EmptyCard>

            <EmptyCard className="ai-card">
              <div className="ai-card-image">
                <Image
                  src="/homepage/af.png"
                  alt="AI Forecasting"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="ai-card-text">
                <h4 className="ai-card-title">AI Forecasting</h4>
                <p className="ai-card-subtitle">
                  Predict demand, risks, and performance trends
                </p>
              </div>
            </EmptyCard>
          </div>
        </div>

        <div className="ai-grid-row-split">
          <EmptyCard className="ai-card">
            <div className="ai-card-image">
              <Image
                src="/homepage/aa.png"
                alt="Agentic AI"
                fill
                className="object-cover"
              />
            </div>

            <div className="ai-card-text">
              <h4 className="ai-card-title">Agentic AI</h4>
              <p className="ai-card-subtitle">
                Ask questions. Get actions, insights instantly
              </p>
            </div>
          </EmptyCard>

          <EmptyCard className="ai-card">
            <div className="ai-card-image">
              <Image
                src="/homepage/99.png"
                alt="98% Faster Automation"
                fill
                className="object-cover"
              />
            </div>

            <div className="ai-card-text">
              <h4 className="ai-card-title">98% Faster Automation</h4>
              <p className="ai-card-subtitle">
                AI-powered automation at operational scale
              </p>
            </div>
          </EmptyCard>
        </div>
      </div>
    </section>
  );
}
