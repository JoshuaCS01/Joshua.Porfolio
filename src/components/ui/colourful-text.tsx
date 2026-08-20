"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

const COLORS = [
  "rgb(131, 179, 32)",
  "rgb(47, 195, 106)",
  "rgb(42, 169, 210)",
  "rgb(4, 112, 202)",
  "rgb(107, 10, 255)",
  "rgb(183, 0, 218)",
  "rgb(218, 0, 171)",
  "rgb(230, 64, 92)",
  "rgb(232, 98, 63)",
  "rgb(249, 129, 47)",
];

export function ColourfulText({ text }: { text: string }) {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const [currentColors, setCurrentColors] = React.useState(COLORS);

  React.useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      const shuffled = [...COLORS].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <>
      {text.split("").map((char, index) => {
        const color = currentColors[index % currentColors.length];

        return (
          <motion.span
            key={index}
            initial={false}
            animate={
              shouldReduceMotion
                ? { color }
                : {
                    color,
                    y: -2,
                    scale: 1.01,
                    opacity: 0.95,
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 0.3,
                    ease: "easeOut",
                    delay: index * 0.03,
                  }
            }
            className="inline-block whitespace-pre font-sans tracking-tight"
          >
            {char}
          </motion.span>
        );
      })}
    </>
  );
}
