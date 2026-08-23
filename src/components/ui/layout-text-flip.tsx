"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
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
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!ready) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [ready, words.length, duration]);

  const word = words[currentIndex] ?? words[0];

  return (
    <>
      <motion.span className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-7xl">
        {text}
      </motion.span>

      <motion.span
        className="relative w-fit overflow-hidden rounded-md border border-transparent bg-white px-4 py-2 font-sans text-2xl font-bold tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg md:text-7xl dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            initial={ready ? { y: -20, opacity: 0, filter: "blur(6px)" } : false}
            animate={
              ready
                ? { y: 0, opacity: 1, filter: "blur(0px)" }
                : { opacity: 1 }
            }
            exit={{ y: 20, opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {ready ? <ColourfulText text={word} /> : word}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};