"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import React, { useCallback, useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages as string[]);
      })
      .catch((error) => console.error("Failed to load images", error));
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: ReturnType<typeof setInterval> | undefined;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  const transitionDuration = shouldReduceMotion ? 0.01 : 0.75;
  const slideVariants = {
    initial: {
      opacity: shouldReduceMotion ? 1 : 0,
      scale: shouldReduceMotion ? 1 : 1.015,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: transitionDuration,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: {
      opacity: shouldReduceMotion ? 1 : 0,
      scale: shouldReduceMotion ? 1 : 0.995,
      transition: {
        duration: transitionDuration,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
      data-direction={direction}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/25 z-40", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence initial={false} mode="sync">
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
