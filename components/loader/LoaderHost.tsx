"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Loader } from "./Loader";

type LoaderHostProps = {
  /** Content to reveal once the loader exits. */
  children: React.ReactNode;
  /** Loader min duration in ms (default 1500). */
  minDuration?: number;
};

/**
 * Mounts the Loader on top of `children` and reveals children after exit.
 * Spec §2 ch.0 — "on entre dans le stade".
 */
export function LoaderHost({ children, minDuration = 1500 }: LoaderHostProps) {
  const [done, setDone] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            key="loader-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Loader minDuration={minDuration} onDone={() => setDone(true)} />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: done ? 0.1 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}