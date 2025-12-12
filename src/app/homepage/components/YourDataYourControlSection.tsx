"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

const YourDataYourControlSection = () => {
  return (
    <section className="section-container section-padding flex justify-center items-center">
      <div className="data-control-card">

        {/* LEFT TEXT BLOCK */}
        <div className="data-control-text">
          <div>
            <motion.h2 
              className="data-control-title-gray"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              Your Data. Your Control.
            </motion.h2>
            <motion.h3 
              className="data-control-title-bold"
              variants={fadeInMain}
              initial="initial"
              whileInView="animate"
            >
              Secure. Compliant. Always.
            </motion.h3>
          </div>

          <motion.p 
            className="data-control-description"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Syncrra safeguards your manufacturing data with enterprise-grade security. 
            All transactions, logs, and records stay encrypted and fully under your control.
          </motion.p>
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
