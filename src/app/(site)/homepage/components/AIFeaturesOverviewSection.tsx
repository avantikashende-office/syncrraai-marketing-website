import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import EmptyCard from "@/components/ui/EmptyCard";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function AIFeaturesOverviewSection() {
  return (
    <section className="section-container space-y-16">
      <div className="space-y-8 ">
        <Badge label="AI FEATURES" />

        <h1 className="title-side gradient-gray-text">
          One Platform.
          <br />
          Infinite Possibilities.
        </h1>

        <div className="flex items-start justify-between">
          <p className="subtitle-side">
            Designed to simplify complexities and empower data-backed decisions, <br />
            it is your single source of truth for smarter business growth.
          </p>

          <Button variant="outline">
            Explore More <ArrowUpRight size={20} />
          </Button>
        </div>
      </div>

      {/* GRID SECTION */}

        <div className="ai-grid">

          <div className="ai-grid-row-2col">

            <EmptyCard glowTopLeft glowBottomRight >
              <h4 className="ai-card-title">Smart Operations </h4>
              <p className="text-subdescription">Automate workflows and scheduling</p>
            </EmptyCard>

            <div className="ai-grid-inner">
              <EmptyCard glowBottomRight >
                <h4 className="ai-card-title">AI Powered Insights</h4>
                <p className="text-subdescription">Automate workflows and scheduling</p>
              </EmptyCard>


              <EmptyCard glowBottomLeft>
                <h4 className="ai-card-title">AI Forecasting </h4>
                <p className="text-subdescription">Automate workflows and scheduling</p>
              </EmptyCard>
            </div>
          </div>

          <div className="ai-grid-row-split">
            <EmptyCard glowTopRight glowBottomLeft>
              <h4 className="ai-card-title">Agentic AI  </h4>
              <p className="text-subdescription">Turn conversations into insights. Our AI chatbot builds dynamic dashboards and visual reports from simple prompts</p>


            </EmptyCard>
            <EmptyCard glowBottomRight className="relative overflow-visible">
              {/* CONTENT: put text on top and reserve space at the bottom with pb-[...] */}
              <div className="relative z-10 pr-6 pb-55">
                <h4 className="ai-card-title">98% Faster Automation</h4>
                <p className="text-subdescription">
                  Boost efficiency with AI driven processes that save tie and enhance productivity
                </p>
              </div>

              {/* ABSOLUTE image: always bottom-right, auto height, responsive */}
              <Image
                src="/homepage/98.svg"
                alt="98"
                width={500}
                height={500}
                className="absolute bottom-0 right-0 h-auto w-auto max-w-[65%] pointer-events-none select-none"
              />
            </EmptyCard>


          </div>

        </div>
      

    </section>
  );
}
