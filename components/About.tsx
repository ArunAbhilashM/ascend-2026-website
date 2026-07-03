"use client";

import { motion } from "framer-motion";
import config from "@/data/config.json";

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">About ASCEND</h2>
          <p className="section-subtitle">A Movement of Young Believers</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-10 max-w-3xl text-center font-body text-lg leading-relaxed text-soft/80"
        >
          {config.about.story}
        </motion.p>
      </div>
    </section>
  );
}