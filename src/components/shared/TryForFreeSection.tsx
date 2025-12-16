"use client";

import Button from "../ui/Button";
import Image from "next/image";
import SyncrraLogo from "../../../public/Logos/SyncrraLogoIcon";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

const TryForFreeSection = () => {
  return (
    <section className="section-container  flex flex-col justify-center items-center text-center space-y-8">
      <div>
        {/* <div className="tryfree-image-wrapper">
                    <Image
                        src="/TryForFreeImage.svg"
                        alt="Dashboard Preview"
                        width={1000}
                        height={600}
                        className="tryfree-image"
                    />
                </div> */}

        <div className="tryfree-logo">
          <SyncrraLogo className="w-25 h-25" />
        </div>
      </div>

      {/* CONTENT */}
      <motion.h2
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
        className="text-3xl md:text-4xl font-semibold"
      >
        Try Syncrra Free for 30 Days
      </motion.h2>

      <motion.p
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
        className="text-lg text-white/70"
      >
        Start taking control of your business today
      </motion.p>

      <Button variant="primary">Get Started</Button>
    </section>
  );
};

export default TryForFreeSection;
