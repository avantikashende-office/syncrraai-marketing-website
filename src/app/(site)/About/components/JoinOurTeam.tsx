"use client";
import Button from "@/components/ui/Button";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const JoinOurTeam = () => {
  return (
    <section className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div className="space-y-8">
          <motion.h1
            className="gradient-gray-text title-side font-bold"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Join Our Team
          </motion.h1>

          <motion.p
            className="subtitle-side"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            We’re building intelligent manufacturing software that solves real
            problems. At Syncrra, you’ll work on products manufacturers use
            daily to operate faster and smarter.
          </motion.p>
          <motion.p
            className="subtitle-side"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            At Syncrra, you’ll work on products manufacturers use daily to
            operate faster and smarter.
          </motion.p>

          <motion.div
            className="flex items-center gap-4"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            <Button>Join Now</Button>
          </motion.div>
        </div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          {/* IMAGE */}
          <Image
            src="/about/team.png"
            alt="Dashboard preview"
            width={820}
            height={820}
            className="relative z-10 object-contain image-reveal-color"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};
export default JoinOurTeam;
