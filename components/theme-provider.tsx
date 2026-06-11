"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const storageKey = "joseph-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [showChoice, setShowChoice] = useState(false);

  const applyTheme = useCallback((nextTheme: Theme) => {
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.dataset.theme = nextTheme;
    setThemeState(nextTheme);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey) as Theme | null;
    if (saved === "light" || saved === "dark") {
      applyTheme(saved);
    } else {
      applyTheme("dark");
      setShowChoice(true);
    }
  }, [applyTheme]);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      applyTheme(nextTheme);
      localStorage.setItem(storageKey, nextTheme);
      setShowChoice(false);
    },
    [applyTheme],
  );

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
    }),
    [setTheme, theme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {showChoice && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/70 px-5 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="theme-choice-title"
          >
            <motion.div
              className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-950 p-6 text-slate-50 shadow-2xl sm:p-8"
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <p className="eyebrow">Set the atmosphere</p>
              <h2
                id="theme-choice-title"
                className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em]"
              >
                Light or dark experience?
              </h2>
              <p className="mt-3 leading-7 text-slate-400">
                Choose your preferred reading environment. You can change it
                anytime.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setTheme("dark")}
                  className="group flex min-h-36 flex-col justify-between rounded-2xl border border-indigo-400/30 bg-slate-900 p-5 text-left transition hover:-translate-y-1 hover:border-indigo-400"
                >
                  <Moon className="h-6 w-6 text-indigo-300" />
                  <span>
                    <span className="block font-display text-lg font-semibold">
                      Dark
                    </span>
                    <span className="mt-1 block text-sm text-slate-400">
                      Focused and cinematic
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  className="group flex min-h-36 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 text-left text-slate-950 transition hover:-translate-y-1 hover:border-indigo-400"
                >
                  <Sun className="h-6 w-6 text-indigo-600" />
                  <span>
                    <span className="block font-display text-lg font-semibold">
                      Light
                    </span>
                    <span className="mt-1 block text-sm text-slate-500">
                      Crisp and editorial
                    </span>
                  </span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
