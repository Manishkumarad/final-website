"use client";
import React from "react";

const USE_CASES = [
  { title: "Finance Automation", items: ["Invoice intake & OCR", "Payment reconciliation"] },
  { title: "Education / ScholarAI", items: ["Scholarship matching pipelines", "Student assistance bots"] },
  { title: "CRM & Sales Ops", items: ["Lead enrichment & scoring", "Automated follow-ups"] },
  { title: "Autonomous Agents", items: ["Task automation", "Cross-system workflow execution"] },
];

export default function UseCases() {
  return (
    <div className="usecases">
      <div className="usecases-grid">
        {USE_CASES.map((u, i) => (
          <article key={i} className="usecase-card card">
            <h4 className="usecase-title">{u.title}</h4>
            <ul className="usecase-list">
              {u.items.map((it, idx) => <li key={idx} className="usecase-item">{it}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
