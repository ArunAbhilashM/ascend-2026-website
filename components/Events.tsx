"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Theater,
  Film,
  Palette,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import events from "@/data/events.json";
import type { Event } from "@/lib/types";
import EventModal from "./EventModal";

const iconMap: Record<string, LucideIcon> = {
  mic: Mic,
  theater: Theater,
  film: Film,
  palette: Palette,
  "book-open": BookOpen,
};

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section id="events" className="section-padding relative bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Events</h2>
          <p className="section-subtitle">Competitions & Creative Expressions</p>
          <p className="mx-auto mt-4 max-w-xl font-body text-soft/60">
            Click on any event to view its complete rules and regulations.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(events as Event[]).map((event, index) => {
            const Icon = iconMap[event.icon] || Mic;
            return (
              <motion.button
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedEvent(event)}
                className="glass-panel group cursor-pointer p-8 text-left transition-all duration-300 hover:border-gold/40 hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                aria-label={`View rules for ${event.title}`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="inline-flex rounded-xl bg-gold/10 p-3 text-gold transition-colors group-hover:bg-gold/20">
                    <Icon size={24} />
                  </div>
                  <span className="text-2xl" aria-hidden="true">
                    {event.emoji}
                  </span>
                </div>

                <h3 className="font-heading text-xl tracking-wide text-white">
                  {event.title}
                </h3>

                <span className="mt-2 inline-block rounded-full border border-white/10 px-2 py-0.5 font-button text-[10px] uppercase tracking-widest text-soft/50">
                  {event.type}
                </span>

                <p className="mt-4 font-body text-sm leading-relaxed text-soft/60">
                  {event.description}
                </p>

                <p className="mt-4 font-button text-xs uppercase tracking-widest text-gold/60 transition-colors group-hover:text-gold">
                  View Rules →
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </section>
  );
}
