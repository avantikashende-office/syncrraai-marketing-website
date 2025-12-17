"use client";

import { BlogCard } from "@/components/ui/BlogCard";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";

export default function LatestInsightsSection() {
  const [search, setSearch] = useState("");

  const blogData = [
    {
      id: 1,
      title: "5G Technology: The Next Generation of Connectivity",
      description:
        "Delve into the advancements and implications of 5G technology.",
      author: "Jennifer Smith",
      authorAvatar: "/img/testimonial.png",
      date: "5 July, 2024",
      image: "/blog/1.png",
    },
    {
      id: 2,
      title: "The Rise of Remote Work Tools: A New Era of Productivity",
      description:
        "Examine how technology is reshaping the modern workplace dynamics.",
      author: "Emily Roberts",
      authorAvatar: "/img/testimonial.png",
      date: "25 June, 2024",
      image: "/blog/2.png",
    },
    {
      id: 3,
      title: "Augmented Reality: Bridging the Gap Between Digital and Physical",
      description:
        "Explore how AR is transforming the way we interact with the world.",
      author: "Michael Cooper",
      authorAvatar: "/img/testimonial.png",
      date: "30 June, 2024",
      image: "/blog/3.png",
    },
    {
      id: 4,
      title: "Sustainable Solutions: Embracing Eco-Friendly Technologies",
      description: "Discover how innovative tech is promoting sustainability.",
      author: "Mark Chen",
      authorAvatar: "/img/testimonial.png",
      date: "10 June, 2024",
      image: "/blog/4.png",
    },
    {
      id: 5,
      title: "AI in Healthcare: Revolutionizing Patient Care",
      description:
        "Learn about the transformative effects of AI on medical practices.",
      author: "Sarah Johnson",
      authorAvatar: "/img/testimonial.png",
      date: "15 June, 2024",
      image: "/blog/5.png",
    },
    {
      id: 6,
      title: "Blockchain Beyond Cryptocurrency: Securing Our Data",
      description:
        "Uncover the potential of blockchain technology in data security.",
      author: "David Lee",
      authorAvatar: "/img/testimonial.png",
      date: "20 June, 2024",
      image: "/blog/6.png",
    },
  ];

  // Filter logic
  const filterBlogsData = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="section-container space-y-6">
      <motion.h1
        variants={fadeInMain}
        initial="initial"
        whileInView="animate"
        className="title-side gradient-gray-text"
      >
        Latest Insights in Smart <br />
        Manufacturing & ERP Automation
      </motion.h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <motion.p
          className="subtitle-side"
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
        >
          A curated collection of ideas, trends, and strategies <br /> reshaping
          the future of factory operations.
        </motion.p>

        {/* Search Box (Styled like screenshot) */}
        <div className="relative w-full md:w-70">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <Search size={20} />
          </span>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
                w-full bg-transparent border rounded-lg
                py-3 pl-12 pr-4 text-white 
                focus:outline-none focus:border-gray-300 transition
              "
          />
        </div>
      </div>
      <div className="mx-auto py-10 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filterBlogsData.map((blog) => (
          <BlogCard key={blog.id} data={blog} />
        ))}
      </div>
    </section>
  );
}
