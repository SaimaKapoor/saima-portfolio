"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

// Signature hero graphic: a sparse field of nodes that quietly drift and link
// to nearby neighbours — a literal "network" standing in for the idea of a
// trained model, and for the connections Saima is trying to build. Reacts to
// the cursor by letting nearby links glow brighter.
export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let mouse = { x: -9999, y: -9999 };
    let raf = 0;

    function isDark() {
      return document.documentElement.classList.contains("dark");
    }

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * devicePixelRatio;
      canvas!.height = height * devicePixelRatio;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.scale(devicePixelRatio, devicePixelRatio);

      const count = Math.min(70, Math.floor((width * height) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);
      const linkColor = isDark()
        ? "239, 156, 184"
        : "182, 84, 117";
      const nodeColor = isDark() ? "244, 184, 205" : "214, 103, 140";

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const mDist = Math.min(
              Math.hypot(a.x - mouse.x, a.y - mouse.y),
              Math.hypot(b.x - mouse.x, b.y - mouse.y)
            );
            const boost = mDist < 160 ? 1 - mDist / 160 : 0;
            const opacity = (1 - dist / 140) * 0.35 + boost * 0.4;
            ctx!.strokeStyle = `rgba(${linkColor}, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        const mDist = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        const boost = mDist < 160 ? 1 - mDist / 160 : 0;
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(${nodeColor}, ${0.55 + boost * 0.45})`;
        ctx!.arc(n.x, n.y, n.r + boost * 1.5, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function onMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
    function onLeave() {
      mouse = { x: -9999, y: -9999 };
    }

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    if (reduceMotion) {
      step();
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full"
    />
  );
}
