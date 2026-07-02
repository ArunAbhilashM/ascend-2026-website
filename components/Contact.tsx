"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Instagram, ExternalLink } from "lucide-react";
import config from "@/data/config.json";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative bg-secondary/50">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Get in Touch & Register</p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="glass-panel p-6">
              <div className="mb-3 flex items-center gap-2 text-gold">
                <MapPin size={20} />
                <h3 className="font-heading text-lg tracking-wide">Venue</h3>
              </div>
              <p className="font-heading text-xl text-white">
                {config.venue.name}
              </p>
              <p className="mt-2 font-body text-sm text-soft/70">
                {config.venue.address}
              </p>
              <a
                href={config.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-button text-xs uppercase tracking-widest text-gold transition-colors hover:text-gold-bright"
              >
                Open in Google Maps
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="space-y-4">
              {config.contacts.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel p-6 transition-all duration-300 hover:border-gold/20"
                >
                  <h4 className="font-heading text-lg text-white">
                    {contact.name}
                  </h4>
                  <p className="mt-1 font-body text-sm text-gold">
                    {contact.role}
                  </p>
                  <a
                    href={`tel:+91${contact.phone}`}
                    className="mt-3 inline-flex items-center gap-2 font-body text-soft/80 transition-colors hover:text-gold"
                  >
                    <Phone size={16} className="text-gold" />
                    +91 {contact.phone}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="glass-panel p-6">
              <div className="mb-4 flex items-center gap-2 text-gold">
                <Instagram size={20} />
                <h3 className="font-heading text-lg tracking-wide">
                  Follow Us
                </h3>
              </div>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                <a
                  href={config.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 overflow-hidden rounded-xl border border-white/10 transition-all hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                >
                  <Image
                    src="/instagram-qr.png"
                    alt="Instagram QR code for @CSI_ANDREWS_CHURCH"
                    width={140}
                    height={140}
                    className="h-32 w-32 object-cover"
                  />
                </a>
                <div>
                  <a
                    href={config.social.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-button text-sm uppercase tracking-widest text-gold transition-colors hover:text-gold-bright"
                  >
                    {config.social.instagram.handle}
                  </a>
                  <p className="mt-2 font-body text-sm text-soft/60">
                    Scan the QR code or follow us on Instagram for updates.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-panel overflow-hidden p-2"
          >
            <iframe
              src={config.venue.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "500px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map showing location of ${config.venue.name}`}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
