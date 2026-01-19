"use client";

import { BlogCard } from "@/components/ui/BlogCard";
import { fadeInMain } from "@/utils/animations";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import { blogDetailsData } from "./BlogDetails";

export default function LatestInsightsSection() {
  const [search, setSearch] = useState("");

  const blogData = blogDetailsData.map((b) => ({
    id: b.id,
    title: b.hero.title,
    description: b.hero.subtitle,
    author: b.meta.author.name,
    authorAvatar: b.meta.author.avatar,
    date: b.meta.published,
    image: b.hero.image,
  }));

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

        <div className="relative w-full md:w-70">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <Search size={20} />
          </span>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:border-gray-300 transition"
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
