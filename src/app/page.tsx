'use client';
import { MouseEvent, useCallback, useEffect, useState } from "react";
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
import { SpaceDepthBackground } from "@/components/ui/space-depth-background";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "#home",
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

  const scrollToSection = useCallback((sectionId: string, updateHash = true) => {
    const section = document.querySelector<HTMLElement>(`.site-container > #${sectionId}`);
    const inner = section?.querySelector<HTMLElement>("[data-section-inner]");

    if (!section || !inner) return;

    const visibleNavBottom = Array.from(
      document.querySelectorAll<HTMLElement>("[data-site-nav-surface]"),
    ).reduce((bottom, nav) => {
      const rect = nav.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return bottom;

      const matrix = new DOMMatrixReadOnly(getComputedStyle(nav).transform);
      const settledOffset = sectionId === "home" ? 0 : Math.max(0, 20 - matrix.m42);
      return Math.max(bottom, rect.bottom + settledOffset);
    }, 0);
    const navClearance = Math.max(72, visibleNavBottom + 16);
    const innerRect = inner.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();
    const usableHeight = window.innerHeight - navClearance;
    const innerTop = innerRect.top + window.scrollY;
    const sectionTop = sectionRect.top + window.scrollY;
    const top = sectionId === "home"
      ? 0
      : innerRect.height <= usableHeight
        ? innerTop - navClearance - (usableHeight - innerRect.height) / 2
        : sectionTop - navClearance - 12;

    if (updateHash) {
      window.history.pushState(null, "", `#${sectionId}`);
    }
    window.scrollTo({
      top: Math.max(0, top),
      behavior: updateHash ? "smooth" : "auto",
    });
  }, []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
    closeMobile = false,
  ) => {
    event.preventDefault();
    if (closeMobile) setIsMobileMenuOpen(false);
    scrollToSection(sectionId);
  };

  useEffect(() => {
    let settleTimer: ReturnType<typeof setTimeout> | undefined;
    const scrollFromHash = () => {
      const sectionId = window.location.hash.slice(1);
      if (!sectionId) return;

      requestAnimationFrame(() => scrollToSection(sectionId, false));
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => scrollToSection(sectionId, false), 1500);
    };

    scrollFromHash();
    window.addEventListener("hashchange", scrollFromHash);
    return () => {
      clearTimeout(settleTimer);
      window.removeEventListener("hashchange", scrollFromHash);
    };
  }, [scrollToSection]);

  return (
    <div className="min-h-screen ">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems}
            onItemClick={(item, event) => handleNavClick(event, item.link.slice(1))}
          />
          <div className="flex items-center gap-3">
            <NavbarButton variant="primary" href="#contact" onClick={(event: MouseEvent<HTMLAnchorElement>) => handleNavClick(event, "contact")}>Contact Me</NavbarButton>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="flex size-11 items-center justify-center rounded-full bg-neutral-900/80"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
            >
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
              />
            </button>
          </MobileNavHeader>
          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="w-full rounded-md px-3 py-2 text-base text-white hover:bg-white/10"
                onClick={(event) => handleNavClick(event, item.link.slice(1), true)}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="#contact" className="w-full" onClick={(event: MouseEvent<HTMLAnchorElement>) => handleNavClick(event, "contact", true)}>
              Contact Me
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <main className="relative">
        {/* Desktop Only Background */}
        <div className=" relative min-h-screen w-full bg-neutral-900 overflow-hidden">

          {/* BACKGROUND LAYER */}
          <div className="absolute inset-0 z-0">
            <SpaceDepthBackground />
            <ShootingStars className="z-10" />
          </div>

          {/* CONTENT LAYER */}
          <div className="site-container relative z-10">

            <section id="home" className="chapter-section chapter-section--hero justify-center text-center">
              <div className="chapter-section__inner" data-section-inner><Hero /></div>
            </section>

            <section id="about" className="chapter-section z-10">
              <div className="chapter-section__inner" data-section-inner><Grid /></div>
            </section>

            <section id="skills" className="chapter-section chapter-section--skills z-10">
              <div className="chapter-section__inner" data-section-inner><Skills /></div>
            </section>

            <section id="projects" className="chapter-section z-10">
              <div className="chapter-section__inner" data-section-inner><Projects /></div>
            </section>

            <section id="contact" className="chapter-section z-10">
              <div className="chapter-section__inner" data-section-inner><Contact /></div>
            </section>

            <p className="text-white text-center mb-25 font-bold">Thanks for stopping by!</p>
          </div>
        </div>
      </main>
    </div>
  );
}
