"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"), { ssr: true });
const Theme = dynamic(() => import("@/components/Theme"), { ssr: true });
const Events = dynamic(() => import("@/components/Events"), { ssr: true });
const Guidelines = dynamic(() => import("@/components/Guidelines"), {
  ssr: true,
});
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });
const ClosingCTA = dynamic(() => import("@/components/ClosingCTA"), {
  ssr: true,
});
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

export default function Home() {
  const [ready, setReady] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const hasEntered = sessionStorage.getItem("ascend-entered");
    if (hasEntered) {
      setShowLoading(false);
      setEntered(true);
    }
    setReady(true);
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem("ascend-entered", "true");
    setShowLoading(false);
    setEntered(true);
  };

  if (!ready) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoading && (
          <LoadingScreen key="loading" onEnter={handleEnter} />
        )}
      </AnimatePresence>

      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Theme />
            <Events />
            <Guidelines />
            <Contact />
            <ClosingCTA />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
