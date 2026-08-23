'use client';
import React from 'react';
import { motion } from "motion/react";
import { cn } from '@/lib/utils';
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
      {/* Dekstop LAYER */}
      <div className="w-full px-6 sm:px-8 hidden md:flex">
        <div className="max-w-4xl mx-auto text-center my-auto">

          <h2 className="text-white text-xl sm:text-2xl tracking-[0.2em] uppercase mb-4 font-bold">
            Hi, Welcome to my Portfolio :)
          </h2>
          <br />


          <motion.div className="relative text-white mx-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
            <LayoutTextFlip
              text="I am "
              words={["a Software Engineer", "a Web Developer", "a Team-player", "Joshua Cherenfant"]}
            />
          </motion.div>
          <br></br>

          <p className="text-white/80 sm:text-lg md:text-xl  lg:text-xl  text-base leading-relaxed mb-8">
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
        <div className="max-w-4xl mx-auto text-center">

        </div>
      </div>


      {/* Mobile LAYER */}
      <div className="w-full px-6 sm:px-8 md:hidden">
        <div className="max-w-4xl mx-auto text-center my-auto">

          <h2 className="text-white text-xl sm:text-2xl tracking-[0.2em] uppercase mb-4 font-bold">
            Hi, Welcome to my Portfolio :)
          </h2>
          <motion.div className="relative text-white mx-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
            <LayoutTextFlip
              text="I am "
              words={["a Software Engineer", "a Web Developer", "a Team-player", "Joshua Cherenfant"]}
            />
          </motion.div>
          <br></br>

          <FocusCardsDemo/>
          <br></br>

          <p className="text-white/80 sm:text-lg md:text-xl  lg:text-xl  text-base leading-relaxed mb-5">
            A Passionate Software Engineer specializing in Java, React, Next.js, and TypeScript.
          </p>

          <a href="/JoshuaCherenfant_Resume.docx" download>
            <MagicButton
              title="Download Resume"
              icon={<img className="w-8" src="/images/download.svg" alt="LinkedIn" />}
              position="right"
            />
          </a>

        </div>
      </div>
      </>
    );
  };

  export default Hero;