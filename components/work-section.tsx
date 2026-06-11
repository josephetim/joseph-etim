"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Search } from "lucide-react";
import { DetailModal } from "@/components/detail-modal";
import { Reveal } from "@/components/reveal";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/content/portfolio";

export function WorkSection() {
  const [category, setCategory] = useState<ProjectCategory>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = projects.filter((project) => project.featured);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory =
        category === "All" || project.categories.includes(category);
      const matchesQuery =
        !normalized ||
        [
          project.title,
          project.description,
          ...project.stack,
          ...project.categories,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section id="work" className="section-space" aria-labelledby="work-title">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">03 · Selected work</p>
          <h2 id="work-title" className="section-title text-balance">
            Systems made clearer, faster, and more dependable.
          </h2>
          <p className="section-copy">
            A mix of production engagements and verified public builds. Private
            client work is presented at the architectural and outcome level.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {featured.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={index}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>

        <Reveal className="mt-28">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Project archive</p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em]">
                All projects
              </h3>
            </div>
            <label className="relative block w-full sm:max-w-xs">
              <span className="sr-only">Search projects</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects or tools"
                className="h-12 w-full rounded-xl border border-line bg-surface/70 pl-11 pr-4 text-sm placeholder:text-muted/70 focus:border-accent focus:outline-none"
              />
            </label>
          </div>

          <div
            className="no-scrollbar mt-7 flex gap-2 overflow-x-auto pb-2"
            aria-label="Project filters"
          >
            {projectCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition ${
                  category === item ? "text-white" : "border border-line text-muted"
                }`}
              >
                {category === item && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                {item}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-2xl border border-line bg-surface/60 backdrop-blur transition hover:-translate-y-1 hover:border-accent/35 hover:shadow-quiet"
            >
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="block w-full text-left"
                aria-label={`View ${project.title} case study`}
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-elevated">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-display text-lg font-semibold tracking-tight">
                      {project.title}
                    </h4>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-elevated px-2.5 py-1 text-[0.65rem] font-medium text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-8 rounded-2xl border border-dashed border-line py-16 text-center text-muted">
            No projects match this filter.
          </div>
        )}
      </div>
      <DetailModal
        type="project"
        item={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

function FeaturedProject({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        className="group overflow-hidden rounded-3xl border border-line bg-surface/65 shadow-quiet backdrop-blur"
        whileHover={{ y: -7, scale: 1.005 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
      >
        <button
          type="button"
          onClick={onOpen}
          className="block w-full text-left"
          aria-label={`Open ${project.title} case study`}
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-elevated">
            <Image
              src={project.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-[1.035]"
            />
            <div className="absolute left-4 top-4 flex gap-2">
              {project.private && (
                <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-slate-300 backdrop-blur">
                  Private engagement
                </span>
              )}
              {project.github && (
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-slate-950/70 text-slate-300 backdrop-blur">
                  <Github className="h-3.5 w-3.5" />
                </span>
              )}
            </div>
          </div>
          <div className="p-6 sm:p-7">
            <p className="eyebrow">
              {project.categories.slice(0, 2).join(" · ")}
            </p>
            <div className="mt-3 flex items-start justify-between gap-5">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                {project.title}
              </h3>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            <p className="mt-4 max-w-xl leading-7 text-muted">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-elevated px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </button>
      </motion.article>
    </Reveal>
  );
}
