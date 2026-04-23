'use client';
import React from 'react';
import { motion } from "motion/react";
import { AuroraBackground } from './ui/aurora-background';
import { cn } from '@/lib/utils';
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/MagicButton';

const Hero = () => {
  return (
  <div className="w-full px-6 sm:px-8">
    <div className="max-w-4xl mx-auto text-center">

      <h2 className="text-white text-sm sm:text-base tracking-[0.3em] uppercase mb-4">
        Joshua Cherenfant
      </h2>

      <TextGenerateEffect
        className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
        words="Software Engineer | Java & Web Applications"
      />

      <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
        Passionate Software Engineer specializing in Java, React and modern web technologies.
        I build scalable, full-stack applications focused on clean architecture, performance, and user experience.
      </p>

      <a href="/about">
        <MagicButton
          title="LinkedIn"
          icon={<img  className = "w-8" src="/images/linkedIn.svg" alt="LinkedIn" />}
          position="right"
        />
      </a>
    </div>
  </div>
  );
};

export default Hero;