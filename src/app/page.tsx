"use client";

import { useCallback, useState } from "react";
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
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = "mobile-navigation-menu";
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

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

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              controlsId={mobileMenuId}
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            id={mobileMenuId}
            isOpen={isMobileMenuOpen}
            onClose={closeMobileMenu}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={closeMobileMenu}
                className="w-full rounded-md px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:text-neutral-200 dark:hover:bg-neutral-800"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="w-full rounded-md bg-white px-4 py-3 text-center text-sm font-bold text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Me
            </a>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main className="relative min-h-screen overflow-x-clip bg-neutral-900">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
        >
          <ShootingStars />
          <StarsBackground />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[100rem] px-4 sm:px-6 lg:px-10">
            <section id="home" className="flex min-h-[100svh] scroll-mt-24 items-center justify-center">
              <Hero />
            </section>

            <section id="about" className="relative z-10 w-full scroll-mt-28 py-14 sm:py-20">
              <Grid />
            </section>

            <section id="skills" className="relative z-10 w-full scroll-mt-28 py-14 sm:py-20">
              <Skills />
            </section>

            <section id="projects" className="relative z-10 w-full scroll-mt-28 py-14 sm:py-20">
              <Projects />
            </section>

            <section id="contact" className="relative z-10 w-full scroll-mt-28 py-14 sm:py-20">
              <Contact />
            </section>

            <p className="pb-16 text-center font-bold text-white">Thanks for stopping by!</p>
        </div>
      </main>
    </div>
  );
}
