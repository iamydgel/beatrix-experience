"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "glass" | "live";

const variantStyles: Record<CardVariant, string> = {
  default: "bg-bx-surface-glass border border-bx-border",
  glass: "bg-white/[0.02] border border-white/[0.06] backdrop-blur-lg",
  live: "bg-bx-bg-elevated border border-bx-live/30 shadow-[0_0_24px_rgba(255,59,92,0.15)]",
};

type CardProps = {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
  /** Disable hover lift (e.g. when nested in a clickable parent). */
  static?: boolean;
};

export function Card({
  variant = "default",
  className,
  children,
  static: isStatic,
}: CardProps) {
  const reduce = useReducedMotion();
  const lift = !isStatic && !reduce;

  return (
    <motion.div
      whileHover={lift ? { y: -6 } : undefined}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "rounded-2xl p-5 backdrop-blur-md",
        "hover:border-bx-blue/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]",
        "transition-[border-color,box-shadow] duration-300",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
