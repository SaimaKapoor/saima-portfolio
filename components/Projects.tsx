"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

const categories = ["All", "AI/ML", "Research", "Web/Backend", "Systems"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="bg-bg px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="From research benchmarks to full-stack systems — built to be used, not just demoed."
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-[var(--ink)] text-[var(--bg)]"
                  : "glass text-[var(--ink-soft)] hover:text-[var(--ink)]"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className="group glass relative flex flex-col rounded-3xl p-7"
              >
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-medium text-[var(--ink)]">
                    {p.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-[var(--rose-soft)]/25 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--rose-deep)]">
                    {p.category}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2 text-xs leading-relaxed text-[var(--ink-soft)]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--rose)]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[var(--ink-soft)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3 border-t border-[var(--border)] pt-5">
                  {p.github && (
                    <a
                      href={p.github}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink)] transition-colors hover:text-[var(--rose-deep)]"
                    >
                      <Github size={15} /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink)] transition-colors hover:text-[var(--rose-deep)]"
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
