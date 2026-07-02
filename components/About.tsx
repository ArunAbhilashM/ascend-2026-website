"use client";

import { motion } from "framer-motion";
import { Heart, Users, Sparkles, Handshake, BookOpen } from "lucide-react";
import config from "@/data/config.json";

const icons = [Users, Sparkles, Handshake, BookOpen, Heart];

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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {config.about.purposes.map((purpose, index) => {
            const Icon = icons[index] || Heart;
            return (
              <motion.div
                key={purpose.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-panel group p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-[0_8px_40px_rgba(212,175,55,0.1)]"
              >
                <div className="mb-4 inline-flex rounded-xl bg-gold/10 p-3 text-gold transition-colors group-hover:bg-gold/20">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading text-xl tracking-wide text-white">
                  {purpose.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-soft/70">
                  {purpose.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
