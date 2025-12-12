"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

export default function Herosection() {
    return (
        <section className="integrations-hero-bg ">

            {/* Heading */}
            <section className="integration-hero-layout ">
                <motion.h1 
                  className="gradient-gray-text text-5xl  text-semibold text-center"
                  variants={fadeInMain}
                  initial="initial"
                  whileInView="animate"
                >
                    A Fully Connected <br /> Manufacturing Stack
                </motion.h1>

                <motion.p 
                  className="text-description text-center"
                  variants={fadeInMain}
                  initial="initial"
                  whileInView="animate"
                >
                    Pick ready-to-go integrations for your system
                </motion.p>
            </section>

            {/* Positioned Icons */}
            <div className="integrations-icons">

                {/* LEFT SIDE */}
                <a href="/integrations" className="integration-icon icon-top-left">
                    <Image src="/integrations/i1.svg" className="w-20 h-20" alt="Integration icon" width={32} height={32} />
                </a>

                <a href="/integrations" className="integration-icon icon-mid-left">
                    <Image src="/integrations/i2.svg" className="w-20 h-20" alt="Integration icon" width={32} height={32} />
                </a>

                <a href="/integrations" className="integration-icon icon-bottom-left">
                    <Image src="/integrations/i3.svg" className="w-20 h-20" alt="Integration icon" width={32} height={32} />
                </a>

                {/* RIGHT SIDE */}
                <a href="/integrations" className="integration-icon icon-top-right">
                    <Image src="/integrations/i4.svg" className="w-20 h-20" alt="Integration icon" width={32} height={32} />
                </a>

                <a href="/integrations" className="integration-icon icon-mid-right">
                    <Image src="/integrations/i5.svg" className="w-20 h-20" alt="Integration icon" width={32} height={32} />
                </a>

                <a href="/integrations" className="integration-icon icon-bottom-right">
                    <Image src="/integrations/i6.svg" className="w-20 h-20" alt="Integration icon" width={32} height={32} />
                </a>

            </div>

        </section>
    );
}
