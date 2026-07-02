"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import config from "@/data/config.json";

export default function Guidelines() {
  return (
    <section id="guidelines" className="section-padding relative">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Guidelines</h2>
          <p className="section-subtitle">General Rules & Regulations</p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {config.guidelines.map((guideline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel flex items-start gap-4 p-5 transition-all duration-300 hover:border-gold/20"
            >
              <CheckCircle2
                size={20}
                className="mt-0.5 shrink-0 text-gold"
                aria-hidden="true"
              />
              <p className="font-body text-sm leading-relaxed text-soft/80 md:text-base">
                {guideline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
