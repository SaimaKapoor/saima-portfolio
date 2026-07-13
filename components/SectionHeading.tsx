import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--rose-deep)]">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-[var(--ink)] sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
