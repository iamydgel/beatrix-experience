"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { LoaderBar } from "./LoaderBar";
import { LoaderSwoosh } from "./LoaderSwoosh";

type LoaderProps = {
  /** Minimum display time in ms. The loader exits at min(this, onDone-callback). */
  minDuration?: number;
  /** When the loader fades out after the cycle, call this. */
  onDone?: () => void;
};

/**
 * Full-screen branded loader — entry into the stadium (spec §2 ch.0).
 * Composed of:
 *   - LoaderSwoosh : SVG curve that draws itself (1s, ease-out-expo)
 *   - LoaderBar    : progress bar (1.5s)
 *   - skip button  : appears after 800ms (a11y, spec §19)
 */
export function Loader({ minDuration = 1500, onDone }: LoaderProps) {
  const [skipVisible, setSkipVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const skipTimer = window.setTimeout(() => setSkipVisible(true), 800);
    const doneTimer = window.setTimeout(() => setExiting(true), minDuration);
    return () => {
      window.clearTimeout(skipTimer);
      window.clearTimeout(doneTimer);
    };
  }, [minDuration]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-bx-bg"
          role="status"
          aria-live="polite"
          aria-label="Chargement Beatrix"
        >
          <LoaderSwoosh />
          <LoaderBar />
          {skipVisible && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setExiting(true)}
              aria-label="Passer l'animation de chargement"
            >
              Passer →
            </Button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}