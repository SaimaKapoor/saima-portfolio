"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-bg-soft px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="A snapshot of what I currently build with — growing every semester."
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items], idx) => (
            <Reveal key={category} delay={idx * 0.08}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--rose-deep)]">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -3, scale: 1.04 }}
                    className="glass cursor-default rounded-full px-4 py-2 text-sm text-[var(--ink)] transition-shadow hover:shadow-[0_8px_24px_-8px_var(--rose-glow)]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
