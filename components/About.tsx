import { Brain, Lightbulb, Rocket, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StatCounter from "./StatCounter";
import { profile, stats } from "@/lib/data";

const pillars = [
  {
    icon: Brain,
    title: "Curious by default",
    text: "I chase the 'why' behind a model's behaviour, not just the metric it produces.",
  },
  {
    icon: Lightbulb,
    title: "Research-minded",
    text: "Drawn to open problems where the literature hasn't settled the answer yet.",
  },
  {
    icon: Rocket,
    title: "Ships products",
    text: "Ideas only count once they're running — so I build, deploy, and iterate.",
  },
  {
    icon: Sparkles,
    title: "Impact-oriented",
    text: "Most excited by AI that solves a problem someone actually feels.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-bg px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="The person behind the projects"
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <p className="text-lg leading-relaxed text-[var(--ink-soft)] whitespace-pre-line">
              {profile.about}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-5">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="glass rounded-2xl p-5 transition-transform hover:-translate-y-1"
                >
                  <p.icon className="text-[var(--rose)]" size={20} />
                  <h3 className="mt-3 text-sm font-semibold text-[var(--ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-soft)]">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-20 grid grid-cols-2 gap-8 border-t border-[var(--border)] pt-12 sm:grid-cols-4">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
