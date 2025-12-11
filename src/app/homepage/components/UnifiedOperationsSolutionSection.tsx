import Badge from "@/components/ui/Badge";
import Image from "next/image";

export function UnifiedOperationsSolutionSection() {
  return (
    <section className="unified-section">
      <div className="section-container space-y-8">
        <div className="flex justify-center">
          <Badge label="ALL IN ONE SOLUTION" />
        </div>

        <h2 className="unified-title">
          One System for Your <br /> Entire Plant </h2>

        <p className="unified-description">
          A single ERP designed to manage planning, production, inventory, <br />
          machines, teams, and financials all in one connected platform.
        </p>

        <div className="unified-image-wrapper">
          <Image
            src={"/img/UnifiedSolution.png"}
            alt="UnifiedSolution."
            width={800}
            height={0}
            className="unified-image"
          />
        </div>


      </div>
    </section>
  );
}