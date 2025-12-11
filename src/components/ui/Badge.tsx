"use client";

type BadgeProps = {
  label: string;
  variant?: "default" | "plain" | "outline";
  icon?: React.ReactNode;
};

export default function Badge({ label, variant = "default", icon }: BadgeProps) {
  const isPlain = variant === "plain";
  const isOutline = variant === "outline";

  return (
    <div className="badge-container w-fit">
      <div
        className={`
          ${isPlain ? "badge-plain" : ""}
          ${isOutline ? "badge-outline" : ""}
          ${!isPlain && !isOutline ? "badge-content" : ""}
          flex items-center gap-2
        `}
      >
        {icon && <div className="flex items-center">{icon}</div>}
        <div>{label}</div>
      </div>
    </div>
  );
}
