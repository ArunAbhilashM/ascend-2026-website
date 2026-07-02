"use client";

import { motion } from "framer-motion";
import GlowBackground from "./GlowBackground";
import config from "@/data/config.json";
import { scrollToSection } from "@/lib/utils";

export default function ClosingCTA() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
      <GlowBackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl text-center"
      >
        <h2 className="font-display text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
          {config.closing.headline}
        </h2>

        <p className="mt-8 whitespace-pre-line font-body text-lg leading-relaxed text-soft/70 md:text-xl">
          {config.closing.subtext}
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToSection("contact")}
          className="btn-primary mt-12"
        >
          {config.closing.buttonText} ❤️
        </motion.button>
      </motion.div>
    </section>
  );
}
