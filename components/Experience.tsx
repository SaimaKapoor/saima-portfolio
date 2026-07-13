import { Code2, Trophy, FlaskConical, Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const groups = [
  {
    icon: FlaskConical,
    title: "AI/ML Workshops",
    text: "Hands-on sessions on classical ML, data preprocessing, and applied deep learning. Add your specific workshops here.",
  },
  {
    icon: Trophy,
    title: "Hackathons",
    text: "Time-boxed builds with a small team, shipping a working prototype end-to-end under pressure. Add your specific hackathons here.",
  },
  {
    icon: Code2,
    title: "Research Work",
    text: "Ongoing comparative study of XGBoost vs. deep learning for drug response prediction on biomedical datasets.",
  },
  {
    icon: Users,
    title: "Leadership & Team Projects",
    text: "Led small project teams from scoping to delivery across coursework and personal builds. Add specific roles here.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-bg-soft px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Beyond the classroom"
          title="Experience & activities"
          description="Edit lib/data.ts and this component to drop in your real workshops, hackathons, and roles."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--rose-soft)]/25">
                  <g.icon size={18} className="text-[var(--rose-deep)]" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-[var(--ink)]">
                  {g.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-soft)]">
                  {g.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
