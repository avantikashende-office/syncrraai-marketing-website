"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import AccordionList from "@/components/ui/AccordionList";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

const RIGHT_IMAGE_URL = "/img/CoreCapabilitiesSection.jpg";

const capabilityData = [
    { key: "production", title: "Production Management", description: "Plan schedule & track every job in real time, no bottlenecks, no guesswork" },
    { key: "inventory", title: "Inventory & Materials", description: "Real-time stock visibility, material allocations, & automated consumption tracking" },
    { key: "procurement", title: "Procurement & Suppliers", description: "Manage suppliers, track purchase RM, & streamline the procurement lifecycle" },
    { key: "quality", title: "Quality Check & Rejections", description: "Automate QC stages, approvals & rejection management across the floor" },
];

export default function CoreCapabilitiesSection() {
    const [active, setActive] = useState("production");

    return (
        <section className=" ">
            <div className="section-container">
                <div className="capabilities-header">
                    <Badge label="KEY FEATURES" />

                    <motion.h2
                        className="capabilities-title"
                        variants={fadeInMain}
                        initial="initial"
                        whileInView="animate"
                    >
                        Make Manufacturing Operations <br />
                        Effortless & Fully Connected
                    </motion.h2>

                    <div className="capabilities-actions">
                        <p className="text-description">
                            Empower your enterprise with an AI-powered ERP that learns, adapts, <br />
                            and evolves simplifying complexity into seamless motion.
                        </p>

                        <Button variant="outline">
                            Explore More<ArrowUpRight size={20} />
                        </Button>
                    </div>
                </div>

                {/* 2 COLUMNS */}
                <div className="capabilities-grid">
                    {/* LEFT CAPABILITIES LIST */}
                    <AccordionList
                        items={capabilityData}
                        active={active}
                        onSelect={setActive}
                    />

                    {/* RIGHT IMAGE */}
                    <div className="capabilities-image-wrapper">
                        <div className="capabilities-image-sticky">
                            <Image
                                src={RIGHT_IMAGE_URL}
                                alt="ERP System Dashboard"
                                width={650}
                                height={200}
                                className="capabilities-image"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}