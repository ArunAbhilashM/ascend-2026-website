"use client";

import { motion } from "framer-motion";
import config from "@/data/config.json";

export default function Theme() {
  return (
    <section id="theme" className="section-padding relative overflow-hidden">
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 h-[2px] w-[200px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 h-[200px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-gold/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display text-6xl font-light tracking-[0.3em] text-gradient-gold md:text-8xl lg:text-9xl"
        >
          {config.theme}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-panel gold-glow mx-auto mt-16 max-w-3xl p-10 md:p-14"
        >
          <p className="font-display mb-6 text-xl text-gold md:text-2xl">
            {config.bibleVerse.reference} ({config.bibleVerse.translation})
          </p>

          <div className="space-y-6">
            {config.bibleVerse.sentences.map((sentence, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.3 }}
                className="font-body text-lg leading-relaxed text-soft/90 md:text-xl"
              >
                &ldquo;{sentence}&rdquo;
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
