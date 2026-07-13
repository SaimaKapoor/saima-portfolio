"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Github, Linkedin, Mail, FileDown, Send } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#d6678c", "#e8a0bf", "#b14a6e", "#ffffff"],
    });

    const subject = encodeURIComponent(`Portfolio message from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="bg-bg px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something intelligent"
          description="Open to internships, research collaborations, and good conversations about AI."
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="glass flex items-center gap-3 rounded-2xl p-4 text-sm text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              <Mail size={18} className="text-[var(--rose-deep)]" /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              className="glass flex items-center gap-3 rounded-2xl p-4 text-sm text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              <Linkedin size={18} className="text-[var(--rose-deep)]" /> LinkedIn
            </a>
            <a
              href={profile.github}
              className="glass flex items-center gap-3 rounded-2xl p-4 text-sm text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              <Github size={18} className="text-[var(--rose-deep)]" /> GitHub
            </a>
            <a
              href={profile.resumeUrl}
              className="glass flex items-center gap-3 rounded-2xl p-4 text-sm text-[var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              <FileDown size={18} className="text-[var(--rose-deep)]" /> Download resume
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass flex flex-col gap-4 rounded-3xl p-7">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[var(--ink-soft)]">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--rose)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[var(--ink-soft)]">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--rose)]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-[var(--ink-soft)]">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-transparent px-4 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[var(--rose)]"
                  placeholder="What would you like to talk about?"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-[1.02]"
              >
                <Send size={15} /> Send message
              </button>
              <p className="text-center text-[11px] text-[var(--ink-soft)]">
                Opens your email client — swap in Formspree/Resend for a fully hosted form.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
