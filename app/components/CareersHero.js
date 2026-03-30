"use client"
import React from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function CareersHero(){
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -40])

  return (
    <section className="careers-hero" style={{ minHeight: 560 }}>
      <motion.div className="careers-bg careers-bg-scale" style={{ y, backgroundImage: `url(/images/career-hero-bg.jpg)` }} aria-hidden />

      <motion.div className="hero-gradient" animate={{ x: ['-10%', '10%'] }} transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} aria-hidden />

      <div className="careers-hero-inner">
        <div className="hero-left">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="hero-title" style={{ color: '#7dd3fc' }}>Career</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="hero-sub">Join a high‑impact team building AI-first products and enterprise solutions.</motion.p>

          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <Link href="/careers#open-roles" className="btn-primary">Explore Roles</Link>
            <Link href="/careers#open-roles" className="btn-ghost" style={{ marginLeft: 12 }}>Join Us</Link>
          </motion.div>

          <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <div className="stat">🚀 <strong>10+</strong> Projects Delivered</div>
            <div className="stat">🤖 <strong>AI-driven</strong> Products</div>
            <div className="stat">🌍 <strong>Global</strong> Clients</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
