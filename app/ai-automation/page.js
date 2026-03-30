import React from "react";
import AIHero from "../components/AIHero";
import ProblemSolution from "../components/ProblemSolution";
import AutomationCards from "../components/AutomationCards";
import UseCases from "../components/UseCases";
import ProcessSteps from "../components/ProcessSteps";
import Results from "../components/Results";
import DemoSection from "../components/DemoSection";
import CTA from "../components/CTA";
import styles from './ai-automation.module.css';

export default function AIAutomationPage() {
  return (
    <main className={`ai-automation-page bg-dark text-white ${styles.page}`}>
      <AIHero />

      <section className={`container mx-auto ${styles.leadSection}`}>
        <ProblemSolution />
      </section>

      <section className={`container mx-auto ${styles.section} ${styles.automationSection}`}>
        <h2 className={`section-title ${styles.sectionHeading} ${styles.centerHeading}`}>What We Automate</h2>
        <AutomationCards />
      </section>

      <section className={`container mx-auto ${styles.section}`}>
        <h2 className={`section-title ${styles.sectionHeading} ${styles.centerHeading}`}>Use Cases</h2>
        <UseCases />
      </section>

      <section className={`container mx-auto ${styles.section}`}>
        <ProcessSteps />
      </section>

      

      <section className={`container mx-auto ${styles.section}`}>
        <Results />
      </section>

      <section id="book-demo" className={`container mx-auto ${styles.section}`}>
        <DemoSection />
      </section>

      <section id="contact" className={`container mx-auto ${styles.ctaSection}`}>
        <CTA />
      </section>
    </main>
  );
}
