"use client";

import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "opposite";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
  opposite: "btn-opposite"
};

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${disabled ? "opacity-40 pointer-events-none" : ""}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
