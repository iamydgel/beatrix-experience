"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type IndicatorProps = {
  label: string;
  /** 0-100 */
  value: number;
  className?: string;
};

/**
 * Horizontal gauge that fills with the swoosh gradient on mount.
 * Spec §5 (Composants clés — Jauge d'Indicateur).
 */
export function IndicatorGauge({ label, value, className }: IndicatorProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <div className="flex items-baseline justify-between text-xs uppercase tracking-[0.04em] text-bx-text-muted">
        <span>{label}</span>
        <span className="font-mono text-bx-text">{clamped}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="relative h-2 overflow-hidden rounded-full bg-bx-surface"
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-[linear-gradient(90deg,#00E676_0%,#00B0FF_100%)]"
        />
      </div>
    </div>
  );
}
