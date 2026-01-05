"use client";

import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import Badge from "@/components/ui/Badge";
import Counter from "@/components/ui/Counter";
import { ArrowUp, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="section-container">
        <div className="space-y-6  pt-[100px] ">
          <div className="flex justify-center">
            <Badge label="AI Intelligence" />
          </div>
          {/* Heading */}
          <motion.h2
            className="title-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Intelligence That Works <br /> Around the Clock
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="subtitle-center"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Real-time AI that monitors production, predicts issues, <br /> and
            drives smarter decisions 24/7.{" "}
          </motion.p>
        </div>
        <motion.div
          className="stats-card"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* STAT 1 */}
            <div className="space-y-2">
              <h3 className="text-5xl font-bold gradient-text">
                <Counter to={30} />%
              </h3>
              <p className=" text-xl  ">Reduced in Unplanned Downtime</p>
              <p className="testimonial-user-role max-w-[70%]">
                Early anomaly detection prevents production breakdowns
              </p>
            </div>

            {/* STAT 2 */}
            <div className="space-y-2">
              <h3 className="text-5xl font-bold gradient-text">
                {" "}
                <Counter to={2} />X
              </h3>
              <p className=" text-xl  ">Faster Decision Making Cycles</p>
              <p className="testimonial-user-role max-w-[70%]">
                Real-time insights enable instant operational action
              </p>
            </div>

            {/* STAT 3 */}
            <div className="space-y-2">
              <h3 className="text-5xl font-bold gradient-text">
                {" "}
                <Counter to={2} />+ Days
              </h3>
              <p className=" text-xl  ">Saved Per Week Per Plant</p>
              <p className="testimonial-user-role max-w-[70%]">
                AI automates logs, reports, approvals seamlessly
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
