import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-bg-soft px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-display text-sm text-[var(--ink)]">
          {profile.name}
          <span className="text-[var(--rose)]">.</span>
        </p>
        <p className="text-center text-xs text-[var(--ink-soft)]">
          Designed and built with curiosity, creativity, and countless cups of coffee.
        </p>
        <p className="text-xs text-[var(--ink-soft)]">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
