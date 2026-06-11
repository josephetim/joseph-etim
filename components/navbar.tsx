"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navigation } from "@/content/portfolio";
import { useTheme } from "@/components/theme-provider";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className="glass-panel mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl px-3 sm:px-4"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-xl px-2 py-2"
          aria-label="Joseph Etim, back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-elevated/70 font-display text-sm font-bold text-accent transition group-hover:-rotate-3 group-hover:border-accent">
            JE
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            Joseph Etim
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-lg px-3 py-2 text-sm text-muted transition hover:text-ink"
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-line bg-elevated/60 text-muted transition hover:border-accent/50 hover:text-ink"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -45, scale: 0.65 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.65 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
          <a
            href="/Joseph-Etim-Resume.pdf"
            download
            className="hidden h-10 items-center gap-2 rounded-xl bg-ink px-4 text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-lg sm:flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-elevated/60 lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-slate-950/60 backdrop-blur-md lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute inset-y-0 right-0 flex w-[min(90vw,24rem)] flex-col border-l border-line bg-surface p-5"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 330, damping: 32 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold">
                  Navigate
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-line"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-16 flex flex-col gap-2">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-4 font-display text-2xl font-semibold tracking-tight transition hover:bg-elevated"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.06 }}
                  >
                    <span className="mr-4 font-mono text-xs text-accent">
                      0{index + 1}
                    </span>
                    {item.label}
                  </motion.a>
                ))}
              </div>
              <a
                href="/Joseph-Etim-Resume.pdf"
                download
                className="mt-auto flex h-12 items-center justify-center gap-2 rounded-xl bg-ink font-semibold text-canvas"
              >
                <Download className="h-4 w-4" />
                Download resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
