"use client";

import { forwardRef, type ComponentProps } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "text-bx-bg shadow-[0_0_24px_rgba(0,176,255,0.3)] bg-[linear-gradient(120deg,#00E676_0%,#00B0FF_100%)]",
  secondary:
    "bg-bx-surface-glass backdrop-blur-md border border-bx-border-strong text-bx-text hover:bg-white/[0.06]",
  ghost: "bg-transparent text-bx-text hover:text-bx-blue",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm rounded-lg",
  md: "h-11 px-5 text-base rounded-xl",
  lg: "h-14 px-7 text-lg rounded-2xl",
};

type MotionButtonProps = ComponentProps<typeof motion.button>;

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  // Handlers overridden by motion — see HTMLMotionProps conflict
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const reduce = useReducedMotion();
    const motionProps = props as unknown as MotionButtonProps;
    return (
      <motion.button
        ref={ref}
        whileHover={reduce ? undefined : { scale: 1.05 }}
        whileTap={reduce ? undefined : { scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden font-semibold",
          "transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bx-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bx-bg",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...motionProps}
      >
        {variant === "primary" && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_70%)] opacity-0 transition-opacity duration-300 hover:opacity-100"
          />
        )}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";