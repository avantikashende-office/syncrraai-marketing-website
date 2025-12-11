import Image from "next/image";

const YourDataYourControlSection = () => {
  return (
    <section className="section-container section-padding flex justify-center items-center">
      <div className="data-control-card">

        {/* LEFT TEXT BLOCK */}
        <div className="data-control-text">
          <div>
            <h2 className="data-control-title-gray">Your Data. Your Control.</h2>
            <h3 className="data-control-title-bold">Secure. Compliant. Always.</h3>
          </div>

          <p className="data-control-description">
            Syncrra safeguards your manufacturing data with enterprise-grade security. 
            All transactions, logs, and records stay encrypted and fully under your control.
          </p>
        </div>

        {/* RIGHT BADGE IMAGES */}
        <div className="data-control-badges">

          {/* SOC2 */}
          <Image
            src="/img/soc.png"
            alt="SOC2"
            width={200}
            height={150}
            className="data-control-badge-image"
          />

          {/* ISO */}
          <Image
            src="/img/ISO.png"
            alt="ISO 27001"
             width={200}
            height={150}
            className="data-control-badge-image"
          />

          {/* GDPR */}
          <Image
            src="/img/GDPR.png"
            alt="GDPR compliance"
             width={200}
            height={150}
            className="data-control-badge-image"
          />

        </div>

      </div>
    </section>
  );
};

export default YourDataYourControlSection;
