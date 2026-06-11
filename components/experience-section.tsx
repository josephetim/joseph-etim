"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { DetailModal } from "@/components/detail-modal";
import { Reveal } from "@/components/reveal";
import { experiences, type Experience } from "@/content/portfolio";

export function ExperienceSection() {
  const [selected, setSelected] = useState<Experience | null>(null);

  return (
    <section
      id="experience"
      className="section-space"
      aria-labelledby="experience-title"
    >
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">02 · Experience</p>
          <h2 id="experience-title" className="section-title">
            Product leadership under real-world constraints.
          </h2>
          <p className="section-copy">
            Production work across the United Kingdom, Nigeria, and France,
            with a focus on reliability, performance, architecture, and
            cross-functional delivery.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute bottom-10 left-[0.68rem] top-8 w-px bg-line sm:left-[1.18rem]" />
          <div className="space-y-5">
            {experiences.map((experience, index) => (
              <Reveal key={experience.company} delay={index * 0.07}>
                <motion.button
                  type="button"
                  onClick={() => setSelected(experience)}
                  className="group relative grid w-full grid-cols-[1.5rem_1fr] gap-4 text-left sm:grid-cols-[2.5rem_1fr] sm:gap-7"
                  whileHover="hover"
                >
                  <span className="relative z-10 mt-8 grid h-6 w-6 place-items-center rounded-full border border-line bg-canvas sm:h-10 sm:w-10">
                    <motion.span
                      className="h-2 w-2 rounded-full bg-accent"
                      variants={{ hover: { scale: 1.65 } }}
                    />
                  </span>
                  <article className="rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:border-accent/40 group-hover:shadow-quiet sm:p-7">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          {experience.duration}
                        </p>
                        <h3 className="mt-3 font-display text-xl font-semibold tracking-[-0.025em] sm:text-2xl">
                          {experience.title}
                        </h3>
                        <p className="mt-1 font-medium text-muted">
                          {experience.company}
                        </p>
                      </div>
                      <span className="flex items-center gap-2 text-xs text-muted">
                        <MapPin className="h-3.5 w-3.5" />
                        {experience.location}
                      </span>
                    </div>
                    <p className="mt-5 max-w-3xl leading-7 text-muted">
                      {experience.summary}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink">
                      View role and impact
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </article>
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <DetailModal
        type="experience"
        item={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
