"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import Constellation from "./Constellation";
import TypingText from "./TypingText";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg-soft pt-24"
    >
      {/* Ambient gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-50 blur-[100px]"
        style={{ background: "var(--rose-soft)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[24rem] w-[24rem] rounded-full opacity-40 blur-[100px]"
        style={{ background: "var(--rose-deep)" }}
      />

      <Constellation />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 md:grid-cols-[1.3fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[var(--rose-deep)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--rose)]" />
            Open to AI/ML internships
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 h-8 font-mono text-base text-[var(--ink-soft)] sm:text-lg"
          >
            <TypingText text={profile.tagline} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--ink-soft)]"
          >
            A second-year CS student turning curiosity about intelligent
            systems into shipped projects and real research — one experiment
            at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--rose-soft)]/20"
            >
              <FileDown size={15} /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-[var(--rose-deep)] underline-offset-4 hover:underline"
            >
              <Mail size={15} /> Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto hidden md:block"
        >
          <div className="relative h-72 w-72 lg:h-80 lg:w-80">
            <div
              className="absolute inset-0 rounded-[2.5rem] opacity-70 blur-2xl"
              style={{ background: "var(--rose-soft)" }}
            />
            <div className="glass relative flex h-full w-full items-center justify-center overflow-hidden rounded-[2.5rem]">
              {profile.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-display text-7xl text-[var(--rose-deep)]">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[var(--ink-soft)]"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}
