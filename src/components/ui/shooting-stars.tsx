"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "motion/react";
import React, { useEffect, useId, useRef } from "react";

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const randomBetween = (minimum: number, maximum: number) =>
  minimum + Math.random() * (maximum - minimum);

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 420,
  maxSpeed = 620,
  minDelay = 5000,
  maxDelay = 10000,
  starColor = "#f4f1ff",
  trailColor = "#6173ff",
  starWidth = 160,
  starHeight = 1.25,
  className,
}) => {
  const groupRef = useRef<SVGGElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const shouldReduceMotion = Boolean(useReducedMotion());
  const gradientId = `shooting-star-${useId().replaceAll(":", "")}`;

  useEffect(() => {
    const svg = svgRef.current;
    const group = groupRef.current;
    if (!svg || !group) return;

    group.style.visibility = "hidden";
    if (shouldReduceMotion) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let animationFrameId: number | undefined;
    let cancelled = false;

    const scheduleNext = () => {
      if (cancelled) return;
      timeoutId = setTimeout(
        launchStar,
        randomBetween(minDelay, maxDelay),
      );
    };

    const launchStar = () => {
      if (cancelled) return;

      const bounds = svg.getBoundingClientRect();
      const angle = randomBetween(27, 40);
      const angleInRadians = (angle * Math.PI) / 180;
      const velocity = randomBetween(minSpeed, maxSpeed);
      let x = randomBetween(-starWidth * 0.25, bounds.width * 0.78);
      let y = randomBetween(-10, bounds.height * 0.18);
      let previousTimestamp: number | undefined;

      group.style.visibility = "visible";
      group.style.opacity = "0";

      const move = (timestamp: number) => {
        if (cancelled) return;

        if (previousTimestamp === undefined) {
          previousTimestamp = timestamp;
        }
        const elapsedSeconds = Math.min(
          (timestamp - previousTimestamp) / 1000,
          0.05,
        );
        previousTimestamp = timestamp;

        x += Math.cos(angleInRadians) * velocity * elapsedSeconds;
        y += Math.sin(angleInRadians) * velocity * elapsedSeconds;
        group.setAttribute("transform", `translate(${x} ${y}) rotate(${angle})`);
        group.style.opacity = "0.95";

        const isOutside =
          x - starWidth > bounds.width + 20 ||
          y - starWidth > bounds.height + 20;

        if (isOutside) {
          group.style.visibility = "hidden";
          group.style.opacity = "0";
          animationFrameId = undefined;
          scheduleNext();
          return;
        }

        animationFrameId = window.requestAnimationFrame(move);
      };

      animationFrameId = window.requestAnimationFrame(move);
    };

    scheduleNext();

    return () => {
      cancelled = true;
      group.style.visibility = "hidden";
      if (timeoutId !== undefined) clearTimeout(timeoutId);
      if (animationFrameId !== undefined) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [
    maxDelay,
    maxSpeed,
    minDelay,
    minSpeed,
    shouldReduceMotion,
    starWidth,
  ]);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className={cn("absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1={-starWidth}
          y1="0"
          x2="0"
          y2="0"
        >
          <stop offset="0%" stopColor={trailColor} stopOpacity="0" />
          <stop offset="55%" stopColor={trailColor} stopOpacity="0.16" />
          <stop offset="88%" stopColor={trailColor} stopOpacity="0.65" />
          <stop offset="100%" stopColor={starColor} stopOpacity="1" />
        </linearGradient>
      </defs>
      <g ref={groupRef} data-shooting-star>
        <line
          x1={-starWidth}
          y1="0"
          x2="0"
          y2="0"
          stroke={`url(#${gradientId})`}
          strokeWidth={starHeight}
          strokeLinecap="round"
        />
        <circle cx="0" cy="0" r="1.8" fill={starColor} />
      </g>
    </svg>
  );
};
