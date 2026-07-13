import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { timeline } from "@/lib/data";

const typeColor: Record<string, string> = {
  project: "bg-[var(--rose)]",
  workshop: "bg-[var(--rose-soft)]",
  hackathon: "bg-[var(--rose-deep)]",
  research: "bg-[var(--ink)]",
  milestone: "bg-[var(--rose-deep)]",
};

export default function Achievements() {
  return (
    <section className="bg-bg px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Timeline"
          title="Achievements & milestones"
          description="Add a new entry to the `timeline` array in lib/data.ts any time."
        />

        <div className="relative border-l border-[var(--border)] pl-8">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} className="relative mb-10 last:mb-0">
              <span
                className={`absolute -left-[2.32rem] top-1 h-3 w-3 rounded-full ring-4 ring-[var(--bg)] ${typeColor[item.type]}`}
              />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--rose-deep)]">
                {item.date}
              </span>
              <h3 className="mt-1 font-display text-lg font-medium text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
