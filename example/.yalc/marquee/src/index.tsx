import { ReactNode } from "react";
import "./global.css";
import { cn } from "./lib/utils";

export function Marquee({
  direction = "left",
  pauseOnHover = false,
  reverse = false,
  fade = false,
  className,
  innerClassName,
  children,
}: {
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "group flex gap-[1rem] overflow-hidden",
        direction === "left" ? "flex-row" : "flex-col",
        className
      )}
      style={{
        maskImage: fade
          ? `linear-gradient(${
              direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
      }}
    >
      <div
        className={cn(
          "flex justify-around gap-[1rem] [--gap:1rem] motion-reduce:animate-none shrink-0",
          direction === "left"
            ? "animate-marquee-left flex-row"
            : "animate-marquee-up flex-col",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "direction-reverse",
          innerClassName
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex justify-around gap-[1rem] [--gap:1rem] motion-reduce:animate-none shrink-0",
          direction === "left"
            ? "animate-marquee-left flex-row"
            : "animate-marquee-up flex-col",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "direction-reverse",
          innerClassName
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
