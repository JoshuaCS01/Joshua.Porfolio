'use client';
import Image from "next/image";
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
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Home() {
  const navItems = [
    {
      name: "Main",
      link: "#features",
    },
    {
      name: "Employment",
      link: "#pricing",
    },
    {
      name: "Education",
      link: "#contact",
    },
    {
      name: "Projects",
      link: "#contact",
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <NavbarButton variant="primary">Contact Me</NavbarButton>
          </div>
        </NavBody>
      </Navbar>

      <main className="relative">
        {/* Desktop Only Background */}
        <div className="hidden md:block">
          <AuroraBackground>
            {/* Grid overlay */}
            <div
              className={cn(
                "absolute inset-0 pointer-events-none",
                "[background-size:100px_100px]",
                "[background-image:linear-gradient(to_right,rgba(228,228,231,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.25)_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.4)_1px,transparent_1px)]",
                "[mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_100%)]"
              )}
            />
            <section className="min-h-[90vh] flex items-center justify-center px-4 text-center">
              <Hero />
            </section>

            <section className="mt-10 w-[175vh] relative z-10 mb-10">
              <Grid />
            </section>
          </AuroraBackground>
        </div>

        {/* Mobile Simple Background */}
        <div className="md:hidden bg-white dark:bg-black-100">
          <section className="min-h-[90vh] flex items-center justify-center px-4 text-center">
            <Hero />
          </section>

          <section className="mt-50 w-full relative z-10">
            <Grid />
          </section>
        </div>
      </main>
    </div>
  );
}
