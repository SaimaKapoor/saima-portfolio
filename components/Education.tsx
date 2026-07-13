import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="bg-bg-soft px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Background" title="Education" />

        <Reveal>
          <div className="glass flex flex-col gap-5 rounded-3xl p-8 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--rose-soft)]/25">
              <GraduationCap size={22} className="text-[var(--rose-deep)]" />
            </div>
            <div>
              <h3 className="font-display text-xl font-medium text-[var(--ink)]">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-[var(--rose-deep)]">
                Focus: {education.focus}
              </p>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">
                {education.institution} — {education.year}
              </p>
              <ul className="mt-4 space-y-1.5">
                {education.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2 text-sm text-[var(--ink-soft)]"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--rose)]" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
