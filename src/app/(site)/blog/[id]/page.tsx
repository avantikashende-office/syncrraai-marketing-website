"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { blogDetailsData } from "../components/BlogDetails";
import BlogBody from "./components/BlogBody";
import { motion } from "framer-motion";
import { fadeInMain } from "@/utils/animations";
import { BlogCard } from "@/components/ui/BlogCard";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blogId = Number(id);
  const blog = blogDetailsData.find((b) => b.id === blogId);

  if (!blog) return notFound();

  return (
    <div className="mt-30">
      {/* HERO */}
      <section className="section-bg-gray ">
        <div
          className=" mx-auto max-w-[min(1200px,90vw)] px-[clamp(1rem,5vw,3rem)]   py-[clamp(2rem,4vh,3rem)]
  grid   md:grid-cols-2 md:items-center"
        >
          {/* Left */}
          <div className="space-y-8 max-w-[80%]">
            <h1 className="text-3xl md:text-4xl leading-normal">
              {blog.hero.title}
            </h1>

            <p className="subtitle-side">{blog.hero.subtitle}</p>

            {/* Meta row */}
            <div className="flex justify-between gap-10  py-10 text-md ">
              <div className="flex items-center gap-3">
                <Image
                  src={blog.meta.author.avatar}
                  alt={blog.meta.author.name}
                  width={50}
                  height={50}
                  className=" aspect-[1/1] rounded-full"
                />
                <div className="space-y-2 ">
                  <p className="testimonial-user-role">Author</p>
                  <p className="">{blog.meta.author.name}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="testimonial-user-role">Published</p>
                <p className="">{blog.meta.published}</p>
              </div>

              <div className="space-y-2">
                <p className="testimonial-user-role">Last updated</p>
                <p className="">{blog.meta.updated}</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={blog.hero.image}
              alt={blog.hero.title}
              width={700}
              height={420}
              className="aspect-[7/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BODY */}
      <BlogBody blog={blog} allBlogs={blogDetailsData} />

      {/* Related Blogs */}
      <section className="section-container space-y-6">
        <motion.h1
          variants={fadeInMain}
          initial="initial"
          whileInView="animate"
          className="title-side gradient-gray-text"
        >
          Related Blogs
        </motion.h1>

        <div className="mx-auto py-10 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogDetailsData
            .filter((b) => b.id !== blog.id) 
            .slice(0, 3) 
            .map((b) => (
              <BlogCard
                key={b.id}
                data={{
                  id: b.id,
                  title: b.hero.title,
                  description: b.hero.subtitle,
                  author: b.meta.author.name,
                  authorAvatar: b.meta.author.avatar,
                  date: b.meta.published,
                  image: b.hero.image,
                }}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
