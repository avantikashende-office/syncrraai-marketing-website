"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Copy,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

type Props = {
  blog: any;
  allBlogs: any[];
};

export default function BlogShareFooter({ blog, allBlogs }: Props) {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const { prevBlog, nextBlog } = useMemo(() => {
    const index = allBlogs.findIndex((b) => b.id === blog.id);
    return {
      prevBlog: index > 0 ? allBlogs[index - 1] : null,
      nextBlog: index < allBlogs.length - 1 ? allBlogs[index + 1] : null,
    };
  }, [allBlogs, blog]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  // ✅ social share links
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(blog?.hero?.title || "");

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    instagram: `https://www.instagram.com/`, // instagram has no direct share URL
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  return (
    <div className="">
      <div className="mx-auto max-w-4xl rounded-2xl space-y-4  bg-[#171717] px-6 py-8 text-center">
        <p className="text-sm md:text-base ">
          Did you find this blog helpful? Share it with others who might
          benefit!
        </p>

        {/* Social icons row */}
        <div className="flex items-center justify-center gap-5">
          <span className="text-subdescription">Share This Post</span>

          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-300 hover:text-white transition"
          >
            <Twitter size={18} />
          </a>

          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-300 hover:text-white transition"
          >
            <Facebook size={18} />
          </a>

          <a
            href={shareLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-300 hover:text-white transition"
          >
            <Instagram size={18} />
          </a>

          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-300 hover:text-white transition"
          >
            <Linkedin size={18} />
          </a>
        </div>

        {/* Copy link input */}
        <div className=" flex items-center justify-center">
          <div className="flex max-w-md items-center gap-10 rounded-xl border border-neutral-800 bg-black px-4 py-2">
            <p className="truncate text-xs md:text-sm text-neutral-300">
              {currentUrl || "Loading link..."}
            </p>

            <button
              onClick={handleCopy}
              className="ml-auto rounded-lg  px-3 py-2 hover:bg-neutral-900 hover:cursor-pointer transition"
              title="Copy link"
            >
              <Copy size={16} className="text-green-600" />
            </button>
          </div>
          <div></div>
          {/* {copied && (
            <p className="text-xs text-green-400 px-4 tracking-wide">Copied!</p>
          )} */}
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Prev */}
          <div className="space-y-2">
            {prevBlog ? (
              <>
                <p className="text-xs">{prevBlog.hero.title}</p>
                <Link
                  href={`/blog/${prevBlog.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition"
                >
                  <ArrowLeft size={16} />
                  Previous Blog Post
                </Link>
              </>
            ) : (
              <>
                <p className="text-xs">No previous post</p>
                <span className="inline-flex items-center gap-2 text-sm text-neutral-600">
                  <ArrowLeft size={16} />
                  Previous Blog Post
                </span>
              </>
            )}
          </div>

          {/* Next */}
          <div className="space-y-2 md:text-right">
            {nextBlog ? (
              <>
                <p className="text-xs ">{nextBlog.hero.title}</p>
                <Link
                  href={`/blog/${nextBlog.id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-green-400 hover:text-green-300 transition"
                >
                  Next Blog Post
                  <ArrowRight size={16} />
                </Link>
              </>
            ) : (
              <>
                <p className="text-xs text-neutral-700">No next post</p>
                <span className="inline-flex items-center gap-2 text-sm text-neutral-600">
                  Next Blog Post
                  <ArrowRight size={16} />
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
