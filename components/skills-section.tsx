import { Award, GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { certifications, skillGroups } from "@/content/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="section-space"
      aria-labelledby="skills-title"
    >
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow">04 · Skills & expertise</p>
          <h2 id="skills-title" className="section-title">
            Broad enough to lead. Deep where reliability depends on it.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur transition hover:border-accent/30">
                <h3 className="font-display text-lg font-semibold">
                  {group.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line bg-elevated/60 px-3 py-1.5 text-xs font-medium text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <article className="h-full rounded-3xl border border-line bg-surface/60 p-7 backdrop-blur sm:p-8">
              <GraduationCap className="h-6 w-6 text-accent" />
              <p className="mt-10 eyebrow">Education</p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                Bachelor of Engineering (B.Eng), Honours
              </h3>
              <p className="mt-2 text-muted">University of Uyo</p>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="rounded-3xl border border-line bg-surface/60 p-7 backdrop-blur sm:p-8">
              <Award className="h-6 w-6 text-accent" />
              <p className="mt-10 eyebrow">Certifications</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {certifications.map((certification) => (
                  <div
                    key={certification.title}
                    className="rounded-2xl border border-line bg-elevated/45 p-4"
                  >
                    <h4 className="font-display text-sm font-semibold">
                      {certification.title}
                    </h4>
                    <p className="mt-1 text-xs text-muted">
                      {certification.issuer}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
