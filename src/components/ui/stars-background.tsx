"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "motion/react";
import React, { useEffect, useRef } from "react";

const STAR_LAYERS = [
  {
    name: "far",
    share: 0.55,
    parallax: 0.035,
    radius: [0.35, 0.7],
    opacity: [0.18, 0.36],
    color: "190, 210, 255",
  },
  {
    name: "middle",
    share: 0.3,
    parallax: 0.09,
    radius: [0.7, 1.15],
    opacity: [0.34, 0.58],
    color: "220, 230, 255",
  },
  {
    name: "near",
    share: 0.15,
    parallax: 0.18,
    radius: [1.15, 1.8],
    opacity: [0.56, 0.9],
    color: "255, 255, 255",
  },
] as const;

type StarLayer = (typeof STAR_LAYERS)[number];

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
  twinklePhase: number;
  layer: StarLayer;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

const randomBetween = (minimum: number, maximum: number) =>
  minimum + Math.random() * (maximum - minimum);

const wrap = (value: number, maximum: number) =>
  ((value % maximum) + maximum) % maximum;

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let stars: Star[] = [];
    let cssWidth = 0;
    let cssHeight = 0;
    let devicePixelRatio = 1;
    let animationFrameId: number | undefined;
    let scrollFrameId: number | undefined;
    let lastTwinkleFrame = 0;
    let scrollOffset = window.scrollY;

    const draw = (timestamp: number) => {
      if (cssWidth === 0 || cssHeight === 0) return;

      context.setTransform(
        devicePixelRatio,
        0,
        0,
        devicePixelRatio,
        0,
        0,
      );
      context.clearRect(0, 0, cssWidth, cssHeight);

      for (const star of stars) {
        const y = wrap(
          star.y - (shouldReduceMotion ? 0 : scrollOffset * star.layer.parallax),
          cssHeight,
        );
        const twinkle =
          shouldReduceMotion || star.twinkleSpeed === null
            ? 1
            : 0.82 +
              Math.sin(timestamp / 1000 / star.twinkleSpeed + star.twinklePhase) *
                0.18;

        context.beginPath();
        context.arc(star.x, y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${star.layer.color}, ${star.opacity * twinkle})`;
        context.fill();
      }
    };

    const generateStars = () => {
      const area = cssWidth * cssHeight;
      stars = STAR_LAYERS.flatMap((layer) => {
        const count = Math.floor(area * starDensity * layer.share);

        return Array.from({ length: count }, () => {
          const shouldTwinkle =
            allStarsTwinkle || Math.random() < twinkleProbability;

          return {
            x: Math.random() * cssWidth,
            y: Math.random() * cssHeight,
            radius: randomBetween(layer.radius[0], layer.radius[1]),
            opacity: randomBetween(layer.opacity[0], layer.opacity[1]),
            twinkleSpeed: shouldTwinkle
              ? randomBetween(minTwinkleSpeed, maxTwinkleSpeed)
              : null,
            twinklePhase: Math.random() * Math.PI * 2,
            layer,
          };
        });
      });
    };

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      const nextWidth = Math.max(1, Math.round(bounds.width));
      const nextHeight = Math.max(1, Math.round(bounds.height));
      const nextPixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      if (
        nextWidth === cssWidth &&
        nextHeight === cssHeight &&
        nextPixelRatio === devicePixelRatio
      ) {
        return;
      }

      cssWidth = nextWidth;
      cssHeight = nextHeight;
      devicePixelRatio = nextPixelRatio;
      canvas.width = Math.round(cssWidth * devicePixelRatio);
      canvas.height = Math.round(cssHeight * devicePixelRatio);
      generateStars();
      draw(performance.now());
    };

    const handleScroll = () => {
      if (scrollFrameId !== undefined) return;

      scrollFrameId = window.requestAnimationFrame((timestamp) => {
        scrollFrameId = undefined;
        scrollOffset = window.scrollY;
        draw(timestamp);
      });
    };

    const animateTwinkle = (timestamp: number) => {
      if (timestamp - lastTwinkleFrame >= 1000 / 30) {
        lastTwinkleFrame = timestamp;
        draw(timestamp);
      }
      animationFrameId = window.requestAnimationFrame(animateTwinkle);
    };

    resizeCanvas();
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvas);

    if (!shouldReduceMotion) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      animationFrameId = window.requestAnimationFrame(animateTwinkle);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
      }
      if (scrollFrameId !== undefined) {
        window.cancelAnimationFrame(scrollFrameId);
      }
    };
  }, [
    allStarsTwinkle,
    maxTwinkleSpeed,
    minTwinkleSpeed,
    shouldReduceMotion,
    starDensity,
    twinkleProbability,
  ]);

  return (
    <canvas
      ref={canvasRef}
      data-star-layers="far middle near"
      className={cn("absolute inset-0 h-full w-full", className)}
    />
  );
};
