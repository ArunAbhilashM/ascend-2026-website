"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";
import config from "@/data/config.json";

interface LoadingScreenProps {
  onEnter: () => void;
}

export default function LoadingScreen({ onEnter }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);
  const verseRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(
        [lightRef.current, logoRef.current, titleRef.current, themeRef.current, verseRef.current, buttonRef.current],
        { opacity: 1 }
      );
      if (themeRef.current) themeRef.current.textContent = config.theme;
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(lightRef.current, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1 })
      .fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, filter: "brightness(0)" },
        { opacity: 1, scale: 1, filter: "brightness(1)", duration: 2 },
        "-=0.5"
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.8"
      );

    if (themeRef.current) {
      const letters = config.theme.split("");
      themeRef.current.innerHTML = "";
      letters.forEach((letter, i) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.opacity = "0";
        span.style.display = "inline-block";
        themeRef.current!.appendChild(span);
        tl.to(span, { opacity: 1, y: 0, duration: 0.4, ease: "back.out(2)" }, `-=${i === 0 ? 0.3 : 0.35}`);
      });
    }

    tl.fromTo(
      verseRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.2"
    ).fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6 },
      "-=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
      role="dialog"
      aria-label="Welcome to ASCEND 2026"
    >
      <ParticleBackground count={40} />

      <div
        ref={lightRef}
        className="absolute h-32 w-32 rounded-full bg-gold/20 blur-3xl opacity-0"
        aria-hidden="true"
      />

      <div ref={logoRef} className="relative z-10 mb-8 opacity-0">
        <div className="gold-glow relative">
          <Image
            src="/renew_logo.png"
            alt="ASCEND 2026 RENEW Logo"
            width={200}
            height={200}
            className="h-32 w-auto object-contain md:h-44"
            priority
          />
        </div>
      </div>

      <h1
        ref={titleRef}
        className="font-heading relative z-10 text-3xl font-light tracking-[0.3em] text-white opacity-0 md:text-5xl"
      >
        {config.eventName}
      </h1>

      <div
        ref={themeRef}
        className="font-display relative z-10 mt-4 text-4xl font-light tracking-[0.5em] text-gold md:text-6xl"
      />

      <p
        ref={verseRef}
        className="font-display relative z-10 mt-6 text-lg text-soft/80 opacity-0 md:text-xl"
      >
        {config.bibleVerse.reference}
      </p>

      <button
        ref={buttonRef}
        onClick={onEnter}
        className="btn-primary relative z-10 mt-12 opacity-0"
        aria-label="Enter the website"
      >
        Enter
      </button>
    </div>
  );
}
