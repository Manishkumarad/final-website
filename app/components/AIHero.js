"use client";
import React, { useEffect, useRef } from "react";
import gsap from "../utils/gsap";

export default function AIHero() {
  const rootRef = useRef();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(".hero-bg", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          scrub: true,
        },
      });

      // Floating nodes bobbing
      gsap.to(".floating-node", {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
        stagger: 0.25,
      });

      // Pulsing (scale) for nodes
      gsap.to(".floating-node", {
        scale: 1.18,
        transformOrigin: "50% 50%",
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
        stagger: 0.22,
      });

      // Gentle rotation to give organic motion
      gsap.to(".floating-node", {
        rotation: 6,
        transformOrigin: "50% 50%",
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
        stagger: 0.35,
      });

      // Text reveal
      const tl = gsap.timeline();
      tl.from(".hero-title", { y: 30, opacity: 0, duration: 0.8 });
      tl.from(
        ".hero-sub",
        { y: 20, opacity: 0, duration: 0.6 },
        "-=0.4"
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={rootRef}
      className="hero ai-automation-hero relative z-20"
      style={{
        paddingTop: "calc(var(--nav-h) + 96px)",
        paddingBottom: "104px",
        backgroundImage:
          "linear-gradient(110deg, rgba(2, 8, 20, 0.86), rgba(2, 6, 18, 0.78)), url('/images/ai-automation-herobg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-bg absolute inset-0 pointer-events-none opacity-40" />
      <div className="container relative mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="hero-left space-y-6">
          <h1 className="hero-title text-4xl md:text-5xl font-bold" style={{ color: '#93c5fd' }}>AI Automation for the Enterprise</h1>
          <p className="hero-sub max-w-xl text-muted">Accelerate operations, reduce costs, and improve compliance with end-to-end AI-driven workflows.</p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Contact Sales</a>
            <a href="#book-demo" className="btn btn-outline">Request Demo</a>
          </div>
        </div>

        <div className="hero-right flex justify-end">
          <div className="ai-visual bg-gradient-to-br from-[#08112a] to-[#2b0466] rounded-2xl p-4 shadow-glow relative overflow-hidden">
            {/* Inline SVG visual: futuristic AI nodes, pipelines and panels (dark, blue/violet glow) */}
            <svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#2b0b66" />
                  <stop offset="100%" stopColor="#06132a" />
                </linearGradient>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#9b6bff" stopOpacity="1" />
                  <stop offset="60%" stopColor="#6f4bff" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#0b1220" stopOpacity="0" />
                </radialGradient>
                <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <rect width="100%" height="100%" rx="14" fill="url(#g1)" opacity="0.18" />

              {/* pipelines */}
              <g stroke="#5ee4ff" strokeOpacity="0.12" strokeWidth="2" fill="none">
                <path d="M24 40 C120 10, 200 10, 300 40" />
                <path d="M60 120 C160 90, 260 90, 420 120" />
              </g>

              {/* nodes */}
              <g filter="url(#glow)">
                <circle className="floating-node" cx="80" cy="48" r="10" fill="url(#nodeGlow)" />
                <circle className="floating-node" cx="200" cy="36" r="8" fill="url(#nodeGlow)" />
                <circle className="floating-node" cx="320" cy="52" r="14" fill="url(#nodeGlow)" />
                <circle className="floating-node" cx="120" cy="132" r="9" fill="url(#nodeGlow)" />
                <circle className="floating-node" cx="360" cy="116" r="12" fill="url(#nodeGlow)" />
                <circle className="floating-node" cx="260" cy="88" r="6" fill="url(#nodeGlow)" />
              </g>

              {/* small UI panels */}
              <g fill="#0b1220" stroke="#6b4dff" strokeWidth="1" opacity="0.95">
                <rect x="18" y="168" rx="6" ry="6" width="96" height="56" fill="#061028" />
                <rect x="132" y="156" rx="6" ry="6" width="140" height="76" fill="#07122a" />
                <rect x="288" y="176" rx="6" ry="6" width="166" height="44" fill="#07122a" />
              </g>

              {/* connection lines with glow */}
              <g stroke="#7c5cff" strokeWidth="1.6" strokeOpacity="0.9" filter="url(#glow)">
                <line x1="88" y1="48" x2="200" y2="36" />
                <line x1="200" y1="36" x2="320" y2="52" />
                <line x1="120" y1="132" x2="200" y2="36" />
                <line x1="360" y1="116" x2="320" y2="52" />
              </g>

              {/* subtle data dots */}
              <g fill="#9adcff" opacity="0.9">
                <circle cx="260" cy="84" r="2.2" />
                <circle cx="300" cy="96" r="2" />
                <circle cx="220" cy="68" r="1.6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
