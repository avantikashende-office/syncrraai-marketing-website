import React from "react";

export default function SectionTitleRow({ title }: { title: string }) {
  return (
    <div className="px-4 py-4 text-xl font-semibold">
      {title}
    </div>
  );
}
