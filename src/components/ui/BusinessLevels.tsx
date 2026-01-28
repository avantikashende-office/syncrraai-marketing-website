import React from "react";

/* ---------------- Types ---------------- */

export type BusinessLevel = "small" | "mid" | "enterprise";

export type Item = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  isHeader?: boolean;
};

export type Column = {
  level: BusinessLevel;
  items: Item[];
};

type Props = {
  columns: Column[];
};

/* ---------------- Styles ---------------- */

const textColor: Record<BusinessLevel, string> = {
  small: "text-blue-400",
  mid: "text-purple-400",
  enterprise: "text-orange-400",
};

const headerBg: Record<BusinessLevel, string> = {
  small: "bg-blue-500/10",
  mid: "bg-purple-500/10",
  enterprise: "bg-orange-500/10",
};

const glow: Record<BusinessLevel, string> = {
  small: "hover:shadow-[0_0_18px_#3b82f650]",
  mid: "hover:shadow-[0_0_18px_#a855f750]",
  enterprise: "hover:shadow-[0_0_18px_#f9731650]",
};

/* ---------------- Component ---------------- */

export default function BusinessLevels({ columns }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {columns.map((col, cIndex) => (
        <div key={cIndex} className="space-y-5">
          {col.items.map((item, i) => {
            const isHeader = item.isHeader;

            return (
              <div
                key={i}
                className={`
                  rounded-xl border border-white/10
                  bg-[#0B0B0B]
                  p-5
                  transition
                  ${glow[col.level]}
                  ${isHeader ? headerBg[col.level] : ""}
                `}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-2">
                  {item.icon && (
                    <span className={textColor[col.level]}>{item.icon}</span>
                  )}

                  <p
                    className={`font-semibold ${
                      isHeader ? "text-white" : "text-white"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>

                {/* Description */}
                {!isHeader && item.description && (
                  <p className="ml-7 text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
