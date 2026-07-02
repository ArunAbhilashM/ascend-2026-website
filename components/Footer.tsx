"use client";

import { motion } from "framer-motion";
import { Cross } from "lucide-react";
import config from "@/data/config.json";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-background px-6 py-16 md:px-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-gold"
        >
          <Cross
            size={24}
            className="animate-pulse-glow"
            aria-hidden="true"
          />
        </motion.div>

        <p className="font-heading text-2xl tracking-[0.2em] text-white">
          {config.eventName}
        </p>
        <p className="font-display mt-2 text-xl tracking-[0.3em] text-gold">
          {config.theme}
        </p>
        <p className="mt-2 font-body text-sm text-soft/50">
          {config.bibleVerse.reference}
        </p>

        <div className="mt-8 h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <p className="mt-8 font-body text-sm text-soft/40">
          Made with ❤️ for the Glory of God
        </p>
      </div>
    </footer>
  );
}
