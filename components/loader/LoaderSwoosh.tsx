"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type LoaderSwooshProps = {
  /** Stroke width in px. */
  strokeWidth?: number;
  /** Draw duration in ms. */
  duration?: number;
  className?: string;
};

/**
 * SVG swoosh that draws itself using `pathLength` 0 → 1.
 * Spec §17.8 — curve echoes the logo B's virguie.
 */
export function LoaderSwoosh({
  strokeWidth = 6,
  duration = 1000,
  className,
}: LoaderSwooshProps) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 200 80"
      role="img"
      aria-label="Beatrix"
      className={cn("size-40", className)}
    >
      <defs>
        <linearGradient id="loader-swoosh" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="100%" stopColor="#00B0FF" />
        </linearGradient>
      </defs>
      {reduce ? (
        <path
          d="M20 60 C 60 10, 100 70, 180 20"
          fill="none"
          stroke="url(#loader-swoosh)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      ) : (
        <motion.path
          d="M20 60 C 60 10, 100 70, 180 20"
          fill="none"
          stroke="url(#loader-swoosh)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: duration / 1000, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.3 },
          }}
        />
      )}
    </svg>
  );
}
