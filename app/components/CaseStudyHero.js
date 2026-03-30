"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CaseStudyHero({ image, title, subtitle }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -120]);

  return (
    <section className="case-hero relative overflow-hidden rounded-2xl mb-12" style={{ minHeight: 320 }}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          y,
          scale: 1.06,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl p-8">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="section-title">
          {title}
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }} className="section-sub">
          {subtitle}
        </motion.p>
      </div>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45))' }} aria-hidden />
    </section>
  );
}
