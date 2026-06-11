"use client";

import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Gauge, GitBranch, Scale, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";

const metrics = [
  { value: 6, suffix: "+", label: "Years engineering products" },
  { value: 90, suffix: "+", label: "Recovered Lighthouse scores" },
  { value: 4, suffix: "", label: "International product engagements" },
  { value: 58, suffix: "", label: "Public GitHub repositories" },
] as const;

const principles = [
  {
    icon: Gauge,
    title: "Performance is user advocacy",
    text: "Speed, clarity, and accessibility are product qualities, not post-launch polish.",
  },
  {
    icon: GitBranch,
    title: "Make state explicit",
    text: "Reliable systems begin with deterministic data flow and visible failure paths.",
  },
  {
    icon: Scale,
    title: "Balance speed with correctness",
    text: "Ship pragmatically, while protecting the decisions that are expensive to reverse.",
  },
  {
    icon: ShieldCheck,
    title: "Design for real conditions",
    text: "Slow networks, failed payments, old browsers, and imperfect APIs are part of the product.",
  },
] as const;

export function About() {
  return (
    <section id="about" className="section-space" aria-labelledby="about-title">
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">01 · About</p>
          <h2 id="about-title" className="section-title text-balance">
            Technical depth, shaped around real product outcomes.
          </h2>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28" delay={0.08}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-elevated shadow-quiet">
              <Image
                src="/joseph-etim-headshot.jpeg"
                alt="Joseph Etim"
                fill
                
                priority
                sizes="(max-width: 524px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.12}>
              <div className="space-y-6 text-lg leading-9 text-muted">
                <p>
                  Joseph is a Product Engineer, Frontend Lead, Co-Founder,
                  Technology Consultant, and AI Engineer with more than six
                  years of experience leading and stabilizing production
                  systems across SaaS and platform environments.
                </p>
                <p>
                  His work sits at the intersection of architecture,
                  performance, reliability, and product judgment. From
                  recovering Lighthouse scores to rebuilding checkout state
                  and payment flows, he focuses on the failure points that
                  quietly shape customer trust.
                </p>
                <p>
                  He works closely with product, backend, QA, and design teams
                  to turn evolving requirements into maintainable systems,
                  prioritizing high-leverage decisions while avoiding
                  unnecessary complexity.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map((metric, index) => (
                <Metric key={metric.label} {...metric} delay={index * 0.08} />
              ))}
            </div>
          </div>
        </div>

        <Reveal className="mt-24" delay={0.1}>
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="eyebrow">How I work</p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                Principles over ceremony.
              </h3>
            </div>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <motion.article
                key={principle.title}
                className="rounded-2xl border border-line bg-surface/55 p-5 backdrop-blur"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <principle.icon className="h-5 w-5 text-accent" />
                <h4 className="mt-8 font-display font-semibold">
                  {principle.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {principle.text}
                </p>
              </motion.article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Metric({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(reducedMotion ? value : 0);

  useEffect(() => {
    if (!isInView || reducedMotion) return;
    let frame = 0;
    const duration = 950;
    const start = performance.now() + delay * 1000;
    const tick = (now: number) => {
      if (now < start) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [delay, isInView, reducedMotion, value]);

  return (
    <div ref={ref} className="rounded-2xl border border-line bg-surface/70 p-4">
      <div className="font-display text-3xl font-semibold tracking-tight">
        {display}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="mt-2 text-xs leading-5 text-muted">{label}</p>
    </div>
  );
}
