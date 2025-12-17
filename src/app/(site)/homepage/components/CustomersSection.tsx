"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import EmptyCard from "@/components/ui/EmptyCard";
import {
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Settings,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";

const CustomersSection = () => {
  const testimonials = [
    {
      company: "GreenWorks",
      quote:
        "“Before Syncrra, keeping projects aligned felt impossible. Now everything runs smoothly, and our clients notice the difference.”",
      name: "Brendan",
      role: "Marketing Director at StratIQ",
      avatar: "/img/testimonial.png",
    },
    {
      company: "Evergreen Innovations",
      quote:
        "“Syncrra has completely transformed our project management. The real-time collaboration and intuitive interface are game-changers.”",
      name: "Alicia",
      role: "Project Lead at Veridian Dynamics",
      avatar: "/img/testimonial.png",
    },
    {
      company: "TechInnovate",
      quote:
        "“Using Syncrra transformed our workflow. Collaboration is a breeze, and our productivity has skyrocketed since we adopted it.”",
      name: "Sofia",
      role: "Product Manager at TechInnovate",
      avatar: "/img/testimonial.png",
    },
    {
      company: "EcoSolutions",
      quote:
        "“Syncrra has revolutionized how we manage tasks across our teams. The clarity it brings is invaluable, making project tracking effortless.”",
      name: "Marcus",
      role: "Operations Lead at EcoSolutions",
      avatar: "/img/testimonial.png",
    },
  ];

  return (
    <section className="section-container-gray space-y-8">
      <Badge label="CUSTOMERS" />

      <motion.h1
        className="title-side gradient-gray-text"
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
      >
        Trusted by the Most
        <br />
        Innovative Companies
      </motion.h1>

      <div className="flex items-start justify-between">
        <motion.p
          className="subtitle-side"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Join 100k + customers who use our platform to take their
          <br />
          operational efforts to the next level.
        </motion.p>

        <Button variant="outline">
          View Case Studies <ArrowUpRight className="ml-2" size={20} />
        </Button>
      </div>
      <div className="customers-grid">
        <EmptyCard className="empty-card-black">
          <div className="customer-case-grid">
            {/* LEFT CONTENT */}
            <div className="customer-case-left">
              <div className="customer-case-content">
                <p className="customer-case-label">CASE STUDY</p>

                <motion.h2
                  className="customer-case-title"
                  variants={fadeInMain}
                  initial="initial"
                  whileInView="animate"
                >
                  Customer Story
                </motion.h2>

                <motion.p
                  className="text-subdescription"
                  variants={fadeInMain}
                  initial="initial"
                  whileInView="animate"
                >
                  How Classic Roof Manufacturing automated 80% of production
                  tracking and reduced delays by 50% using Syncrra ERP.
                </motion.p>
              </div>

              {/* TAGS */}
              <div className="customer-case-tags">
                <Badge
                  label={"200-500 Employees"}
                  variant="outline"
                  icon={<UserRound size={16} />}
                />
                <Badge
                  label={"2025"}
                  variant="outline"
                  icon={<Clock3 size={16} />}
                />
              </div>
            </div>

            {/* MIDDLE COLUMN */}
            <div className="customer-case-middle">
              {/* TOP ROW: Logo + Title */}
              <div className="customer-case-logo-row">
                <Image
                  src="/img/ClassicLogo.png"
                  alt="Customer Image"
                  height={250}
                  width={250}
                  className="customer-case-logo"
                />
                <motion.h2
                  className="customer-case-title"
                  variants={fadeInMain}
                  initial="initial"
                  whileInView="animate"
                >
                  Classic Roof
                </motion.h2>
              </div>

              {/* BOTTOM BUTTON (right aligned) */}
              <div className="customer-case-button-row">
                <Button variant="secondary">
                  View Case Studies <ChevronRight className="ml-2" size={20} />
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full h-full">
              <Image
                src="/img/customers-section-1.png"
                alt="Customer Image"
                height={650}
                width={650}
                className="customer-case-image"
              />
            </div>
          </div>
        </EmptyCard>

        <div className="mt-25">
          <EmptyCard className="empty-card-black relative overflow-visible">
            <div className="grid grid-cols-2">
              {/* LEFT CONTENT */}
              <div className="testimonial-card">
                <div className="customer-testimonial-header">
                  <Settings />
                  <motion.h3
                    className="customer-testimonial-company"
                    variants={fadeInMain}
                    initial="initial"
                    whileInView="animate"
                  >
                    GreenWorks
                  </motion.h3>
                </div>

                <p className="testimonial-quote">
                  {" "}
                  “Before Syncrra, keeping projects aligned felt impossible. Now
                  everything runs smoothly, and our clients notice the
                  difference.”
                </p>

                <div className="testimonial-user-details">
                  <p className="testimonial-user-name">Brendan</p>
                  <p className="testimonial-user-role">
                    Marketing Director at StratIQ
                  </p>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative h-full overflow-visible">
                <Image
                  src="/img/UserImage.png"
                  alt="User"
                  width={720}
                  height={720}
                  className="absolute bottom-0 right-0 w-auto h-[140%] object-cover object-bottom"
                />
              </div>
            </div>
          </EmptyCard>
        </div>

        <div className="testimonial-cards-grid">
          {testimonials.map((item, index) => (
            <EmptyCard key={index} className="testimonial-card">
              {/* Header */}
              <div className="customer-testimonial-header">
                <Settings />
                <h3 className="customer-testimonial-company">{item.company}</h3>
              </div>

              {/* Quote */}
              <p className="testimonial-quote">{item.quote}</p>

              {/* User Info */}
              <div className="testimonial-user-info">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="testimonial-avatar"
                />
                <div className="testimonial-user-details">
                  <p className="testimonial-user-name">{item.name}</p>
                  <p className="testimonial-user-role">{item.role}</p>
                </div>
              </div>
            </EmptyCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomersSection;
