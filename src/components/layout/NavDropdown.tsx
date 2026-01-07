"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface DropdownItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

interface NavDropdownProps {
  title: string;
  items: DropdownItem[];
  width?: string;
}

export default function NavDropdown({
  title,
  items,
  width = "w-56",
}: NavDropdownProps) {
  return (
    <div className="relative group">
      <span
        className="absolute left-0 h-full w-0.5 bg-[#39D373] opacity-0 
group-hover/item:opacity-100 transition-opacity"
      />

      <span className="nav-link cursor-pointer flex items-center gap-1">
        {title}
        <span className="text-xs opacity-70">▾</span>
      </span>
      <div
        className={`absolute left-0 top-full mt-3 ${width} rounded-xl
  bg-black

  shadow-[0_8px_40px_-8px_rgba(57,211,115,0.25)]
  opacity-0 invisible group-hover:opacity-100 group-hover:visible
  transition-all duration-200`}
      >
        {items.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`group/item flex items-center gap-3 px-5 py-4 text-sm
  text-white/90
  hover:bg-[#39D373]/10
  hover:text-[#39D373]
  transition-colors duration-200
  ${index === 0 ? "rounded-t-xl" : ""}
  ${index === items.length - 1 ? "rounded-b-xl" : ""}`}
          >
            {item.icon && (
              <span
                className="text-[#39D373]/70   group-hover/item:scale-110
 group-hover/item:text-[#39D373] 
  transition-colors duration-200"
              >
                {item.icon}
              </span>
            )}

            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
