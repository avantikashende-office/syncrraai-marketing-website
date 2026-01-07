"use client";

import PeopleCard from "@/components/ui/PeopleCard";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";

const people = [
  {
    id: 1,
    name: "Harish Rohokale",
    designation: "CEO & Founder",
    imageSrc: "/about/Harish.png",
  },
  {
    id: 2,
    name: "Shaleen Gupta",
    designation: "Head of Business Growth",
    imageSrc: "/about/Shaleen.png",
  },
  {
    id: 3,
    name: "Pankaj Bamalwa",
    designation: "Sr. VP - Head of Sales",
    imageSrc: "/about/Pankaj.png",
  },
];

const MeetThePeople = () => {
  return (
    <section className="section-container-gray">
      <div className="flex items-center justify-between w-full">
        <motion.h1
          className="title-side gradient-gray-text max-w-xl"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Meet the People <br />
          Behind the Vision
        </motion.h1>

        <div>
          <motion.p
            className="subtitle-side mb-6"
            variants={fadeInMain}
            initial="initial"
            whileInView="animate"
          >
            Designed to simplify complexities and empower data-backed <br />
            decisions, it’s your single source of truth for smarter business
            growth.
          </motion.p>
        </div>
      </div>
      {/* People Cards here  */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {people.map((person) => (
          <PeopleCard
            key={person.id}
            imageSrc={person.imageSrc}
            name={person.name}
            designation={person.designation}
          />
        ))}
      </div>
    </section>
  );
};

export default MeetThePeople;
