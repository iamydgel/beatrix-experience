"use client";

import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type BadgeVariant = "live" | "positive" | "negative" | "warning" | "neutral";

const variantStyles: Record<BadgeVariant, string> = {
  live: "bg-bx-live/15 text-bx-live",
  positive: "bg-bx-positive/15 text-bx-positive",
  negative: "bg-bx-negative/15 text-bx-negative",
  warning: "bg-bx-warning/15 text-bx-warning",
  neutral: "bg-white/[0.06] text-bx-text-muted",
};

type BadgeProps = {
  variant?: BadgeVariant;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
};

export function Badge({
  variant = "neutral",
  icon: Icon,
  children,
  className,
}: BadgeProps) {
  const reduce = useReducedMotion();
  const pulse = variant === "live" && !reduce;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-[0.04em]",
        variantStyles[variant],
        className
      )}
    >
      {pulse ? (
        <motion.span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-bx-live"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : Icon ? (
        <Icon aria-hidden="true" size={12} strokeWidth={2} />
      ) : null}
      {children}
    </span>
  );
}