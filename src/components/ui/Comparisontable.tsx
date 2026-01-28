import React from "react";

export type Row = {
  feature: string;
  leftText: string;
  rightText: string;
  leftStatus?: "good" | "bad";
  rightStatus?: "good" | "bad";
};

type Props = {
  rows: Row[];
  leftTitle?: string;
  middleTitle?: string;
  rightTitle?: string;
};

const Check = () => <span className="text-green-500">✓</span>;
const Cross = () => <span className="text-red-500">✕</span>;

export default function ComparisonTable({
  rows,
  leftTitle = "Feature",
  middleTitle = "Traditional ERPs",
  rightTitle = "Syncrra",
}: Props) {
  return (
    <div className="w-full overflow-x-auto">
      <div
        className="
        min-w-[700px]
        rounded-2xl
        border border-white/10
        bg-gradient-to-b from-[#0E0E0E] to-[#090909]
        text-white
      "
      >
        {/* Header */}
        <div className="grid grid-cols-3 border-b border-white/10">
          <div className="px-6 py-4 text-sm font-semibold text-gray-400">
            {leftTitle}
          </div>

          <div className="px-6 py-4 text-sm font-semibold text-gray-400">
            {middleTitle}
          </div>

          <div className="px-6 py-4 text-sm font-semibold text-green-400">
            {rightTitle}
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-3 border-b border-white/5 last:border-none"
          >
            <div className="px-6 py-4 text-sm">
              {row.feature}
            </div>

            <div className="px-6 py-4 text-sm text-gray-400 flex items-center gap-2">
              {row.leftStatus === "bad" && <Cross />}
              {row.leftStatus === "good" && <Check />}
              {row.leftText}
            </div>

            <div className="px-6 py-4 text-sm flex items-center gap-2">
              {row.rightStatus === "bad" && <Cross />}
              {row.rightStatus === "good" && <Check />}
              {row.rightText}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
