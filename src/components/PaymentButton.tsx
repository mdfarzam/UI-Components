"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

type TransactionState = "idle" | "processing" | "success";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-white/80 hover:bg-neutral-1000/80",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-full px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-full px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-full px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

// ─── Button Component ─────────────────────────────────────────────────────────

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

// ─── Shield Icon ──────────────────────────────────────────────────────────────

type ShieldIconProps = SVGProps<SVGSVGElement>;

function ShieldIcon(props: ShieldIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M18.54 4.11984L13.04 2.05984C12.47 1.84984 11.54 1.84984 10.97 2.05984L5.47005 4.11984C4.41005 4.51984 3.55005 5.75984 3.55005 6.88984V14.9898C3.55005 15.7998 4.08005 16.8698 4.73005 17.3498L10.23 21.4598C11.2 22.1898 12.79 22.1898 13.76 21.4598L19.26 17.3498C19.91 16.8598 20.4401 15.7998 20.4401 14.9898V6.88984C20.4501 5.75984 19.59 4.51984 18.54 4.11984ZM15.48 9.71984L11.18 14.0198C11.03 14.1698 10.84 14.2398 10.65 14.2398C10.46 14.2398 10.27 14.1698 10.12 14.0198L8.52005 12.3998C8.23005 12.1098 8.23005 11.6298 8.52005 11.3398C8.81005 11.0498 9.29005 11.0498 9.58005 11.3398L10.66 12.4198L14.43 8.64984C14.72 8.35984 15.2 8.35984 15.49 8.64984C15.78 8.93984 15.78 9.42984 15.48 9.71984Z" />
    </svg>
  );
}

// ─── Pixel Loader ─────────────────────────────────────────────────────────────

const GRID_SIZE = 4;
const PIXEL_SIZE = 2;
const GAP = 2;
const CENTER = (GRID_SIZE - 1) / 2;
const WAVE_STEP = 0.12;
const COLOR = "#fff";
const pixels = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => i);

function PixelLoader() {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
        gap: `${GAP}px`,
      }}
    >
      {pixels.map((i) => {
        const row = Math.floor(i / GRID_SIZE);
        const col = i % GRID_SIZE;
        const distanceFromCenter = Math.hypot(row - CENTER, col - CENTER);

        return (
          <motion.div
            key={i}
            style={{
              width: PIXEL_SIZE,
              height: PIXEL_SIZE,
              backgroundColor: COLOR,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.7, 1, 0.7],
              boxShadow: [
                "0 0 0px rgba(255, 255, 255, 0)",
                "0 0 24px rgba(255, 255, 255, 0.8)",
                "0 0 0px rgba(255, 255, 255, 0)",
              ],
            }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: distanceFromCenter * WAVE_STEP,
            }}
          />
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ButtonDemo() {
  const [state, setState] = React.useState<TransactionState>("idle");
  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleBuyClick = () => {
    if (state !== "idle") return;

    setState("processing");
    timeoutRef.current = window.setTimeout(() => {
      setState("success");
    }, 3000);
  };

  const text =
    state === "processing"
      ? "Processing Transaction"
      : state === "success"
        ? "Transaction Safe"
        : "Make a Purchase";

  return (
    <div className="flex items-center justify-center h-screen">
      <Button
        variant="default"
        size="xl"
        onClick={handleBuyClick}
        className="w-fit justify-center gap-2"
      >
        <AnimatePresence mode="wait" initial={false}>
          {state === "processing" && (
            <motion.span
              key="loader"
              initial={{ opacity: 0, scale: 0.6, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: 45 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <PixelLoader />
            </motion.span>
          )}
          {state === "success" && (
            <motion.span
              key="check"
              initial={{ opacity: 0, scale: 0.6, y: 2 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: -2 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              <ShieldIcon className="size-5 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
        {text}
      </Button>
    </div>
  );
}

export { Button, buttonVariants };