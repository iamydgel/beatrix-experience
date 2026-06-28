"use client";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type LiveTickProps = {
  value: number;
  className?: string;
};

/**
 * Re-renders the value with a brief scale + green flash on every change.
 * Spec §17.7 — "Le direct entre par les yeux".
 */
export function LiveTick({ value, className }: LiveTickProps) {
  return (
    <span className={cn("inline-flex items-center font-mono font-semibold tabular-nums", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          initial={{ scale: 1.2, color: "#00E676" }}
          animate={{ scale: 1, color: "#F1F5F9" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
