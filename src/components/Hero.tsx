"use client";

import React from "react";
import MagicButton from "./ui/MagicButton";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import { FocusCards } from "./ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Joshua Cherenfant",
      src: "../images/temptest.jpg",
    },
  ];

  return <FocusCards cards={cards} />;
}

const Hero = () => {
  return (
    <div className="grid w-full max-w-7xl items-center gap-10 py-20 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,32rem)] xl:gap-14">
      <div className="flex min-w-0 flex-col items-center text-center">
        <h2 className="mb-6 font-bold uppercase tracking-[0.16em] text-white text-lg sm:text-2xl sm:tracking-[0.2em]">
          Hi, Welcome to my Portfolio :)
        </h2>

        <LayoutTextFlip
          text="I am "
          words={[
            "a Software Engineer",
            "a Web Developer",
            "a Team-player",
            "Joshua Cherenfant",
          ]}
        />

        <p className="mb-8 mt-8 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
          A Passionate Software Engineer specializing in Java, React, Next.js, and TypeScript.
          I build scalable, full-stack applications focused on clean architecture, performance, and user experience.
        </p>

        <a href="/JoshuaCherenfant_Resume.docx" download>
          <MagicButton
            title="Download Resume"
            icon={
              <img
                className="w-8"
                src="/images/download.svg"
                alt="Download resume"
              />
            }
            position="right"
          />
        </a>
      </div>

      <div className="mx-auto w-full max-w-lg">
        <FocusCardsDemo />
      </div>
    </div>
  );
};

export default Hero;
