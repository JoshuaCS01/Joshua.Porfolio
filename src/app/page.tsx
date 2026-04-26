'use client';
import Image from "next/image";
import { CgArrowDown } from "react-icons/cg";
import Hero from "@/components/Hero";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu
} from "@/components/ui/resizable-navbar";
import Grid from "@/components/Grid";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];

  return (
    <div className="min-h-screen ">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <NavbarButton variant="primary" href = "#contact">Contact Me</NavbarButton>
          </div>
        </NavBody>
      </Navbar>

      <main className="relative">
        {/* Desktop Only Background */}
        <div className=" relative min-h-screen w-full bg-neutral-900 overflow-hidden">

          {/* BACKGROUND LAYER */}
          <div className="absolute inset-0 z-0">
            <ShootingStars />
            <StarsBackground />
          </div>

          {/* CONTENT LAYER */}
          <div className="relative z-10 mx-5 lg:mx-25 ">

            <section id="home" className="min-h-screen flex items-center justify-center px-4 text-center">
              <Hero />
            </section>

            <section id="about" className="w-full relative z-10 mb-10 scroll-mt-60">
              <Grid />
            </section>

            <section id="skills" className="w-full relative z-10 md:mb-70 lg:mb-70 mb-40  scroll-mt-66">
              <Skills />
            </section>

            <section id="projects" className="w-full relative z-10 mb-10 scroll-mt-30">
              <Projects />
            </section>

            <section id="contact" className="w-full relative z-10 mb-10">
              <Contact />
            </section>


            <p className="text-white text-center mb-25 font-bold">Thanks for stopping by</p>
          </div>
        </div>
      </main>
    </div>
  );
}
