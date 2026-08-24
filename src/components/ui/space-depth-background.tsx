"use client";

import { useEffect, useRef } from "react";
import { StarsBackground } from "./stars-background";

export function SpaceDepthBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const updateScrollOffset = () => {
      animationFrame = 0;
      root.style.setProperty(
        "--space-scroll-y",
        reducedMotion.matches ? "0" : String(window.scrollY),
      );
    };

    const scheduleUpdate = () => {
      if (document.hidden || animationFrame) return;
      animationFrame = requestAnimationFrame(updateScrollOffset);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrame);
        animationFrame = 0;
        return;
      }
      scheduleUpdate();
    };

    updateScrollOffset();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotion.addEventListener("change", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotion.removeEventListener("change", scheduleUpdate);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="space-depth-background pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="space-depth-layer space-depth-layer--distant">
        <StarsBackground />
      </div>
      <div className="space-depth-layer space-depth-layer--middle">
        <div className="space-depth-stars space-depth-stars--middle" />
      </div>
      <div className="space-depth-layer space-depth-layer--foreground">
        <div className="space-depth-stars space-depth-stars--foreground" />
      </div>
    </div>
  );
}
