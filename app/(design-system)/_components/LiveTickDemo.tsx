"use client";

import { useEffect, useState } from "react";
import { LiveTick } from "@/components/ui/LiveTick";

/**
 * Demo counter for the LiveTick primitive.
 * Increments every second so the user can see the flash animation.
 */
export function LiveTickDemo() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setN((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return <LiveTick value={n} />;
}