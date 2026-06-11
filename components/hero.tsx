"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { roles } from "@/content/portfolio";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const interval = window.setInterval(
      () => setRoleIndex((current) => (current + 1) % roles.length),
      2800,
    );
    return () => window.clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
      aria-labelledby="hero-title"
    >
      <div className="container-shell relative pb-20 pt-16 sm:pb-24">
        <motion.div
          className="max-w-5xl"
          initial={reducedMotion ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09 } },
          }}
        >
          <HeroLine>
            <div className="inline-flex items-center gap-3 rounded-full border border-line bg-surface/60 px-3 py-2 text-xs font-medium text-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
              </span>
              Open to select product and engineering engagements
            </div>
          </HeroLine>

          <HeroLine>
            <p className="mt-10 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Product Engineer · Frontend Lead · Co-Founder
            </p>
          </HeroLine>

          <HeroLine>
            <h1
              id="hero-title"
              className="mt-5 text-balance font-display text-[clamp(3.5rem,10vw,8.4rem)] font-semibold leading-[0.87] tracking-[-0.075em]"
            >
              Joseph Etim
            </h1>
          </HeroLine>

          <HeroLine>
            <div className="mt-7 flex min-h-10 items-center text-xl font-medium text-muted sm:text-3xl">
              <span className="mr-2 text-line">/</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  className="text-ink"
                  initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </HeroLine>

          <HeroLine>
            <p className="mt-8 max-w-2xl text-balance text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              I build and stabilize digital products where performance,
              architecture, and user trust matter. Six years turning complex
              frontend systems into calm, reliable experiences.
            </p>
          </HeroLine>

          <HeroLine>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-xl bg-ink px-6 font-semibold text-canvas transition hover:-translate-y-1 hover:shadow-glow"
              >
                Explore selected work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-[3.25rem] items-center justify-center rounded-xl border border-line bg-surface/50 px-6 font-semibold backdrop-blur transition hover:-translate-y-1 hover:border-accent/60"
              >
                Get in touch
              </a>
            </div>
          </HeroLine>
        </motion.div>

        <motion.a
          href="#about"
          className="absolute bottom-2 right-5 hidden items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted transition hover:text-ink sm:flex lg:right-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reducedMotion ? 0 : 1.1 }}
        >
          Scroll to explore
          <motion.span
            animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}

function HeroLine({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
