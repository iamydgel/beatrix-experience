"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type LoaderBarProps = {
  /** Fill duration in ms. */
  duration?: number;
  className?: string;
};

/**
 * Horizontal progress bar with the swoosh gradient filling left → right.
 */
export function LoaderBar({ duration = 1500, className }: LoaderBarProps) {
  return (
    <div
      role="progressbar"
      aria-label="Chargement"
      aria-valuetext="Chargement en cours"
      className={cn(
        "relative h-1 w-48 overflow-hidden rounded-full bg-bx-surface",
        className
      )}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: duration / 1000, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left center" }}
        className="h-full w-full bg-[linear-gradient(120deg,#00E676_0%,#00B0FF_100%)]"
      />
    </div>
  );
}
