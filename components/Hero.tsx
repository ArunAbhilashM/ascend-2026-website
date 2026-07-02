"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ParticleBackground from "./ParticleBackground";
import GlowBackground from "./GlowBackground";
import config from "@/data/config.json";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      <ParticleBackground count={60} />
      <GlowBackground />

      <div
        className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-background opacity-50"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mb-8"
        >
          <div className="gold-glow relative">
            <Image
              src="/logo.png"
              alt="ASCEND 2026 RENEW Eagle Logo"
              width={280}
              height={280}
              className="h-40 w-auto object-contain md:h-56 lg:h-64"
              priority
            />
          </div>
        </motion.div>

        <h1 className="font-heading text-5xl font-light tracking-[0.25em] text-white md:text-7xl lg:text-8xl">
          {config.eventName}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="font-display mt-4 text-3xl tracking-[0.4em] text-gradient-gold md:text-5xl lg:text-6xl"
        >
          {config.theme}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-display mt-6 text-lg text-gold/80 md:text-xl"
        >
          {config.bibleVerse.reference}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-3 max-w-xl font-body text-base italic text-soft/70 md:text-lg"
        >
          &ldquo;{config.bibleVerse.tagline}&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="btn-primary"
          >
            Explore
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-secondary"
          >
            Register
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-button text-xs uppercase tracking-widest text-soft/40">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
