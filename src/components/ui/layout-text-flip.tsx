"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ColourfulText } from "./colourful-text";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const longestWord = useMemo(
    () =>
      words.reduce(
        (longest, candidate) =>
          candidate.length > longest.length ? candidate : longest,
        words[0] ?? "",
      ),
    [words],
  );

  useEffect(() => {
    if (shouldReduceMotion || words.length < 2) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((previous) => (previous + 1) % words.length);
    }, duration);

    return () => window.clearInterval(interval);
  }, [duration, shouldReduceMotion, words.length]);

  const word = words[currentIndex] ?? words[0] ?? "";

  return (
    <span className="inline-flex max-w-full flex-col items-center justify-center gap-x-[0.28em] gap-y-2 font-sans text-[clamp(1.75rem,7vw,4.5rem)] font-bold leading-none tracking-tight text-white drop-shadow-lg sm:flex-row sm:items-baseline">
      <span data-hero-prefix className="shrink-0 whitespace-nowrap">
        {text.trimEnd()}
      </span>

      <span
        data-hero-phrase-slot
        className="relative inline-grid max-w-full text-center sm:text-left"
        aria-live={shouldReduceMotion ? "off" : "polite"}
      >
        <span
          className="invisible col-start-1 row-start-1 whitespace-nowrap"
          aria-hidden="true"
        >
          {longestWord}
        </span>
        <AnimatePresence initial={false}>
          <motion.span
            data-hero-phrase
            key={shouldReduceMotion ? "reduced-motion-phrase" : currentIndex}
            initial={
              shouldReduceMotion
                ? false
                : { y: -18, opacity: 0, filter: "blur(6px)" }
            }
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={
              shouldReduceMotion
                ? undefined
                : { y: 18, opacity: 0, filter: "blur(6px)" }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.4, ease: "easeOut" }
            }
            className="absolute inset-x-0 top-0 whitespace-nowrap"
          >
            <ColourfulText text={word} />
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
};
