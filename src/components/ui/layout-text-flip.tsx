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
      <motion.span
        data-hero-label
        className="whitespace-nowrap text-[clamp(1.25rem,4.15vw,3.875rem)] font-extrabold leading-none tracking-tight drop-shadow-lg"
      >
        {text}
      </motion.span>

      <motion.span
        data-hero-phrase-box
        className="relative grid h-[clamp(4rem,8vw,7rem)] w-max max-w-full items-center justify-start overflow-visible border-0 bg-transparent pr-[0.08em] font-sans text-[clamp(1.25rem,4.15vw,3.875rem)] font-extrabold leading-none tracking-tight shadow-none"
      >
        <span aria-hidden="true" className="invisible col-start-1 row-start-1 grid w-max">
          {words.map((candidate) => (
            <span key={candidate} className="col-start-1 row-start-1 justify-self-start whitespace-nowrap">
              {candidate}
            </span>
          ))}
        </span>
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
            className={cn("col-start-1 row-start-1 inline-flex w-max items-center justify-start whitespace-nowrap text-left")}
          >
            {ready ? <ColourfulText text={word} /> : word}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
