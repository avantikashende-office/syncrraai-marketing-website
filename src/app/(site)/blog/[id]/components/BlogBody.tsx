"use client";

import { useEffect, useState } from "react";
import Badge from "@/components/ui/Badge";
import BlogShareFooter from "./BlogShareFooter";

type BlogBodyProps = {
  blog: any;
  allBlogs: any[];
};

export default function BlogBody({ blog, allBlogs }: BlogBodyProps) {
  const [activeId, setActiveId] = useState<string>(
    blog.body.toc?.[0]?.id || "",
  );

  useEffect(() => {
    const sectionIds = blog.body.sections.map((s: any) => s.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.2,
      },
    );

    sectionIds.forEach((id: string) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [blog]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const currentIndex = allBlogs.findIndex((b) => b.id === blog.id);
  const prevBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  return (
    <section className="section-container">
      <div className="grid gap-14 md:grid-cols-[350px_1fr]">
        <aside className="md:sticky md:top-28 h-fit">
          <h3 className="text-lg px-10 ">Table of Contents</h3>

          {/* top divider line */}
          <div className="mt-4 h-px w-full bg-neutral-800" />

          {/* vertical line container */}
          <div className="relative mt-10 pl-10">
            {/* vertical line */}
            <div className="absolute left-3 top-0 h-full w-px bg-neutral-800" />

            <ol className="space-y-8">
              {blog.body.toc.map((item: any, idx: number) => {
                const isActive = activeId === item.id;

                return (
                  <li
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`group cursor-pointer transition flex items-start gap-2 ${
                      isActive
                        ? "font-medium"
                        : "text-[#666666] hover:text-white"
                    }`}
                  >
                    <span className="w-6 shrink-0 text-right">{idx + 1}.</span>

                    <span className="flex-1">{item.label}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </aside>

        <div className="space-y-12">
          {/* QUICK SUMMARY */}
          <div>
            {/* badge row */}
            <div className="mb-6">
              <Badge label="Quick Summary" variant="outline" />
            </div>

            {/* quick summary text */}
            <p className="max-w-3xl text-[#A3A3A3] leading-relaxed text-[15px]">
              {blog.body.quickSummary}
            </p>

            {/* divider line */}
            <div className="mt-10 h-px w-full bg-neutral-800" />
          </div>

          {/* SECTIONS */}
          <div className="space-y-14">
            {blog.body.sections.map((sec: any) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-28">
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {sec.heading}
                </h2>

                <div className="mt-4 ">
                  {sec.paragraphs.map((p: string, i: number) => (
                    <p
                      key={i}
                      className="max-w-3xl text-[#A3A3A3] leading-relaxed text-[15px]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Blog Footer */}
          <BlogShareFooter blog={blog} allBlogs={allBlogs} />
        </div>
      </div>
    </section>
  );
}
