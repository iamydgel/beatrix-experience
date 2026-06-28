"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  /** Delay in ms before the reveal animation starts. */
  delay?: number;
  /** Vertical offset (px) the element travels from. */
  offset?: number;
  className?: string;
};

/**
 * Reveal-on-scroll wrapper using IntersectionObserver (zero-dep).
 * Spec §17.3 — durations and easing follow §6 motion tokens.
 */
export function Reveal({
  children,
  delay = 0,
  offset = 32,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        transform: shown ? "translateY(0)" : `translateY(${offset}px)`,
        opacity: shown ? 1 : 0,
        transition: `transform 500ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 500ms ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}