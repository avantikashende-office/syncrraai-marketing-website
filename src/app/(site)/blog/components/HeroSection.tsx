"use client";

import { BlogCarouselCard } from "@/components/ui/BlogCarouselCard";
import CenterZoomCarousel from "@/components/ui/ReusableCarousel";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";

export default function HeroSection() {
  const blogCarouselData = [
    {
      id: 1,
      title: "How AI Redefining Production Planning for Modern Factories",
      image: "/blog/blog1.jpg",
      author: "Jason Carter",
      authorAvatar: "/img/testimonial.png",
      date: "16 Aug, 2024",
    },
    {
      id: 2,
      title: "Smart Factories & Predictive Analytics",
      image: "/blog/blog2.jpg",
      author: "Emily Watson",
      authorAvatar: "/img/testimonial.png",
      date: "02 Sep, 2024",
    },
    {
      id: 3,
      title: "AI-Driven Supply Chain Optimization",
      image: "/blog/blog3.jpg",
      author: "Michael Brown",
      authorAvatar: "/img/testimonial.png",
      date: "19 Sep, 2024",
    },
  ];

  return (
    <section className="bg-[url('/blog/blog-bg-green.png')] bg-cover bg-no-repeat bg-position-[center_top_-99px] pt-[120px]">
      <div className="section-container space-y-6">
        {/* Heading */}
        <motion.h2
          className="title-center gradient-gray-text"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          The Manufacturing Intelligence Hub
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="subtitle-center"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Discover how AI-driven automation is transforming production, <br />{" "}
          quality, and profitability.
        </motion.p>
      </div>
      <div className="h-screen ">
        <CenterZoomCarousel
          items={blogCarouselData}
          itemWidth="55%"
          itemHeight="100%"
          gap={32}
          activeScale={1}
          inactiveScale={0.88}
          renderItem={(item, isActive) => (
            <BlogCarouselCard data={item} active={isActive} />
          )}
        />
      </div>
    </section>
  );
}
