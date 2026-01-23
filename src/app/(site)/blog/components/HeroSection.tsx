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
    <section className="bg-[url('/blog/blog-bg-green.png')] bg-cover bg-no-repeat bg-position-[center_top_-99px] hero-top-space">
      {/* Heading container */}
      <div className="section-container space-y-6">
        <motion.h2
          className="title-center gradient-gray-text"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          The Manufacturing Intelligence Hub
        </motion.h2>

        <motion.p
          className="subtitle-center"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          Discover how AI-driven automation is transforming production, <br />
          quality, and profitability.
        </motion.p>
      </div>

      {/* Carousel container */}
      <div
        
      >
        {/* Responsive height behavior:
            - mobile: content height
            - tablet+: stable hero height
        */}
        <div className="min-h-[420px] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[680px]">
          <CenterZoomCarousel
            items={blogCarouselData}
            itemWidth="clamp(280px, 70vw, 900px)"
            itemHeight="100%"
            gap={24}
            activeScale={1}
            inactiveScale={0.88}
            renderItem={(item, isActive) => (
              <BlogCarouselCard data={item} active={isActive} />
            )}
          />
        </div>
      </div>
    </section>
  );
}
