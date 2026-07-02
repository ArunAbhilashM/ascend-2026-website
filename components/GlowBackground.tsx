"use client";

import { useEffect, useRef } from "react";

interface GlowBackgroundProps {
  className?: string;
}

export default function GlowBackground({ className = "" }: GlowBackgroundProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.setProperty("--mouse-x", `${e.clientX}px`);
      glow.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212,175,55,0.08), transparent 40%)",
        }}
      />
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gold/3 blur-[100px]" />
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-gold-bright/3 blur-[100px]" />
    </div>
  );
}
