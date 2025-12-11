import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Image from "next/image";


export function SeamlessIntegrationsSection() {
  return (
    <section className="section-padding">
      <div className="section-container space-y-8">
        <div className="flex justify-center">
          <Badge label="INTEGRATIONS" />
        </div>

        <h2 className="integrations-title">Seamless Integrations, <br /> Zero Friction</h2>

        <div className="integrations-image-wrapper">
          <Image
            src={"/img/seamlessintegration.png"}
            alt="UnifiedSolution."
            width={800}
            height={0}
            className="integrations-image"
          />
        </div>

        <p className="integrations-description">
          Plug Syncrra into your workflow with just a click. <br />
          No messy setups, no dev tie needed, just instant productivit
        </p>
        <div className="integrations-cta">
          <Button variant="primary">Try Syncrra for Free </Button>
        </div>
      </div>

    </section>
  );
}