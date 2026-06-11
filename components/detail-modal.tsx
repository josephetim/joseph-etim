"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";
import type { Experience, Project } from "@/content/portfolio";

type DetailModalProps =
  | { type: "project"; item: Project | null; onClose: () => void }
  | { type: "experience"; item: Experience | null; onClose: () => void };

export function DetailModal(props: DetailModalProps) {
  const { item, onClose } = props;
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!item) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previousFocus?.focus();
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/75 p-0 backdrop-blur-lg sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) onClose();
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="detail-modal-title"
        >
          <motion.div
            className="no-scrollbar relative max-h-[94dvh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-line bg-surface shadow-2xl sm:rounded-3xl"
            initial={
              reducedMotion ? false : { opacity: 0, y: 70, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 270, damping: 28 }}
            drag={reducedMotion ? false : "y"}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 130 || info.velocity.y > 700) onClose();
            }}
          >
            <div className="sticky top-0 z-10 flex justify-end bg-gradient-to-b from-surface via-surface/90 to-transparent p-4 pb-8">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-elevated/90 text-muted transition hover:text-ink"
                aria-label="Close details"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {props.type === "project" ? (
              <ProjectDetails project={item as Project} />
            ) : (
              <ExperienceDetails experience={item as Experience} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <article className="-mt-8 px-5 pb-10 sm:px-10 sm:pb-12">
      <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-line bg-elevated">
        <Image
          src={project.image}
          alt=""
          fill
          priority
          sizes="(max-width: 900px) 100vw, 850px"
          className="object-cover"
        />
      </div>
      <div className="mt-8 flex flex-wrap items-start justify-between gap-5">
        <div>
          <p className="eyebrow">{project.categories.slice(0, 2).join(" · ")}</p>
          <h2
            id="detail-modal-title"
            className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-5xl"
          >
            {project.title}
          </h2>
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-xl border border-line transition hover:border-accent hover:text-accent"
              aria-label={`${project.title} on GitHub`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 items-center gap-2 rounded-xl bg-ink px-4 text-sm font-semibold text-canvas transition hover:-translate-y-0.5"
            >
              Visit project
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
        {project.description}
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <DetailBlock title="The problem" body={project.problem} />
        <DetailBlock title="Role & approach" body={project.approach} />
        <DetailList title="Technical decisions" items={project.decisions} />
        <DetailList title="Challenges addressed" items={project.challenges} />
      </div>
      <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/[0.06] p-6">
        <DetailList title="Impact" items={project.impact} />
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-line bg-elevated/60 px-3 py-1.5 text-xs font-medium text-muted"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

function ExperienceDetails({ experience }: { experience: Experience }) {
  return (
    <article className="-mt-4 px-5 pb-10 sm:px-10 sm:pb-12">
      <p className="eyebrow">{experience.location}</p>
      <h2
        id="detail-modal-title"
        className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-5xl"
      >
        {experience.title}
      </h2>
      <a
        href={experience.link}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-accent"
      >
        {experience.company}
        <ExternalLink className="h-4 w-4" />
      </a>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">
        {experience.summary}
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <DetailList title="Scope" items={experience.bullets} />
        <DetailList title="Impact" items={experience.impact} />
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-line bg-elevated/60 px-3 py-1.5 text-xs font-medium text-muted"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em]">
        {title}
      </h3>
      <p className="mt-3 leading-7 text-muted">{body}</p>
    </div>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em]">
        {title}
      </h3>
      <ul className="mt-3 space-y-3 text-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-7">
            <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
