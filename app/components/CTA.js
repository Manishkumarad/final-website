"use client";
import React from "react";

export default function CTA() {
  return (
    <div className="container">
      <div className="cta card p-12 bg-gradient-to-r from-[#0b1220] to-[#1b0450] text-center">
        <h3 className="text-2xl font-bold mb-4">Transform operations with AI Automation</h3>
        <p className="text-muted mb-6">Schedule a discovery workshop or request a tailored demo to evaluate fit and ROI.</p>
        <div className="cta-actions">
          <a href="#book-demo" className="btn btn-primary">Request Demo</a>
          <a href="#contact" className="btn btn-outline">Talk to Sales</a>
        </div>
      </div>
    </div>
  );
}
