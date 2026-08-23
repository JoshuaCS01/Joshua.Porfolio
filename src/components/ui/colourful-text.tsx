"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
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

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);


  React.useEffect(() => {
    if (!ready) return;

    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
    }, 5000);

    return () => clearInterval(interval);
  }, [ready]);

  return (
    <>
      {text.split("").map((char, index) => {
        const color = currentColors[index % currentColors.length];

        return (
          <motion.span
            key={index}
            initial={false}
            animate={
              ready
                ? {
                    color,
                    y: -2,
                    scale: 1.01,
                    opacity: 0.95,
                  }
                : {}
            }
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: index * 0.03,
            }}
            className="inline-block whitespace-pre font-sans tracking-tight"
          >
            {char}
          </motion.span>
        );
      })}
    </>
  );
}