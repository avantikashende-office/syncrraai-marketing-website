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
    <div className="space-y-8">
      {/* ---------- HEADERS ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {columns.map((col, cIndex) => {
          const header = col.items.find((i) => i.isHeader);

          if (!header) return null;

          return (
            <div
              key={cIndex}
              className={`
                h-full
                rounded-xl
                border border-white/10
                px-6 py-6
                flex items-start gap-3
                ${headerBg[col.level]}
              `}
            >
              {header.icon && (
                <span className={textColor[col.level]}>{header.icon}</span>
              )}
              <p className="font-semibold text-md">{header.title}</p>
            </div>
          );
        })}
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {columns.map((col, cIndex) => (
          <div key={cIndex} className="flex flex-col gap-6">
            {col.items
              .filter((i) => !i.isHeader)
              .map((item, i) => (
                <div
                  key={i}
                  className={`
                    h-full
                    rounded-xl
                    border border-white/10
                    bg-[#0B0B0B]
                    px-6 py-6
                    transition
                    ${glow[col.level]}
                  `}
                >
                  <div className="flex gap-3">
                    {item.icon && (
                      <span className={textColor[col.level]}>{item.icon}</span>
                    )}

                    <div>
                      <p className="font-semibold text-white text-md mb-1">
                        {item.title}
                      </p>

                      {item.description && (
                        <p className="text-sm text-[#99A1AF] leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
