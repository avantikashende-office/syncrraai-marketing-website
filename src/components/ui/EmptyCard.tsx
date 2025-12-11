"use client";

type EmptyCardProps = {
  children?: React.ReactNode;
  className?: string;
  glowTopLeft?: boolean;
  glowTopRight?: boolean;
  glowBottomLeft?: boolean;
  glowBottomRight?: boolean;
};

export default function EmptyCard({
  children,
  className = "",
  glowTopLeft = false,
  glowTopRight = false,
  glowBottomLeft = false,
  glowBottomRight = false,
}: EmptyCardProps) {
  return (
    <div className={`empty-card ${className}`}>
      {/* GLOWS */}
      {glowTopLeft && <div className="corner-glow top-0 left-0" />}
      {glowTopRight && <div className="corner-glow top-0 right-0" />}
      {glowBottomLeft && <div className="corner-glow bottom-0 left-0" />}
      {glowBottomRight && <div className="corner-glow bottom-0 right-0" />}

      {children}
    </div>
  );
}
