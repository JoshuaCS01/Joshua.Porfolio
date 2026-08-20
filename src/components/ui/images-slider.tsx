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
  const shouldReduceMotion = Boolean(useReducedMotion());

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
    let cancelled = false;
    const loadPromises = images.map((image) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((nextLoadedImages) => {
        if (!cancelled) setLoadedImages(nextLoadedImages);
      })
      .catch((error) => console.error("Failed to load images", error));

    return () => {
      cancelled = true;
    };
  }, [images]);

  useEffect(() => {
    if (shouldReduceMotion) return;

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
      }, 8000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval !== undefined) clearInterval(interval);
    };
  }, [
    autoplay,
    handleNext,
    handlePrevious,
    images.length,
    shouldReduceMotion,
  ]);

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
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/25 z-40", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence initial={false}>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: direction === "up" ? 6 : -6 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              shouldReduceMotion
                ? undefined
                : { opacity: 0, y: direction === "up" ? -6 : 6 }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="image h-full w-full absolute inset-0 object-cover object-center"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
