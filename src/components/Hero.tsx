'use client';
import React from 'react';
import { motion } from "motion/react";
import MagicButton from './ui/MagicButton';
import { LayoutTextFlip } from './ui/layout-text-flip';
import { FocusCards } from './ui/focus-cards';


export function FocusCardsDemo() {
  const cards = [
    {
      title: "Joshua Cherenfant",
      src: "../images/temptest.jpg",
    }]
  return <FocusCards cards={cards} />;
}


  const Hero = () => {
    return (
      <>
      <div className="grid w-full items-center gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,32rem)] xl:gap-12">
        <div className="mx-auto max-w-3xl text-center">

          <h2 className="font-display mb-6 text-[clamp(1rem,2vw,1.5rem)] uppercase tracking-[-0.02em] text-white">
            Hi, Welcome to my Portfolio :)
          </h2>
          <motion.div
            data-hero-headline
            className="relative mx-auto grid w-fit max-w-full min-w-0 grid-cols-[max-content_minmax(0,1fr)] items-baseline justify-center gap-[clamp(0.375rem,1vw,0.75rem)] text-center text-white"
          >
            <LayoutTextFlip
              text="I am "
              words={["a Software Engineer", "a Web Developer", "a Team-player", "Joshua Cherenfant"]}
            />
          </motion.div>
          <p className="mx-auto mb-8 mt-7 max-w-2xl text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed text-white/80">
            A Passionate Software Engineer specializing in Java, React, Next.js, and TypeScript.
            I build scalable, full-stack applications focused on clean architecture, performance, and user experience.
          </p>

          <a href="/JoshuaCherenfant_Resume.docx" download>
            <MagicButton
              title="Download Resume"
              icon={<img className="w-8" src="/images/download.svg" alt="LinkedIn" />}
              position="right"
            />
          </a>

        </div>
        <FocusCardsDemo />
      </div>
      </>
    );
  };

  export default Hero;
