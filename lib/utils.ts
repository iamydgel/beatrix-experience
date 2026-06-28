import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine class names with Tailwind-aware conflict resolution.
 * Use everywhere a component accepts a `className` prop override.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}