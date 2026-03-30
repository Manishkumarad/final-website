"use client";
import React from "react";

const CARDS = [
  { title: "Workflow Automation", body: "Automate end-to-end business processes and reduce cycle time." },
  { title: "AI Assistants & Bots", body: "Customer self-service, internal knowledge assistants, and process triggers." },
  { title: "Data Ingestion & Processing", body: "Extract, normalize and enrich data for downstream systems." },
  { title: "Decisioning & Orchestration", body: "Policy-driven recommendations and automated orchestration across systems." },
];

export default function AutomationCards() {
  return (
    <div className="automation-grid">
        {CARDS.map((c, i) => (
          <article key={i} className="automation-card card">
            <div className="automation-top">
              <span className="automation-index">{String(i + 1).padStart(2, "0")}</span>
              <span className="automation-dot" aria-hidden />
            </div>
            <h4 className="automation-title">{c.title}</h4>
            <p className="automation-body">{c.body}</p>
          </article>
        ))}
    </div>
  );
}
