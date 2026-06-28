"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type Tab = { id: string; label: string };

type TabsProps = {
  tabs: Tab[];
  defaultValue: string;
  /** Render-prop: receives the active tab id. */
  children: (activeId: string) => React.ReactNode;
  className?: string;
};

export function Tabs({ tabs, defaultValue, children, className }: TabsProps) {
  const [active, setActive] = useState(defaultValue);

  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div
        role="tablist"
        aria-label="Sections"
        className="relative inline-flex items-center gap-2 border-b border-bx-border"
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActive(tab.id)}
              className={cn(
                "relative px-4 py-3 text-sm font-medium transition-colors duration-200",
                isActive ? "text-bx-blue" : "text-bx-text-muted hover:text-bx-text"
              )}
            >
              {tab.label}
              {isActive && (
                <motion.div
                  layoutId="tabs-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-[linear-gradient(120deg,#00E676_0%,#00B0FF_100%)]"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </button>
          );
        })}
      </div>
      <div role="tabpanel">{children(active)}</div>
    </div>
  );
}