import styles from "../crm-solutions.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroSlides} aria-hidden>
        <div className={`${styles.heroSlide} ${styles.slideOne}`} />
        <div className={`${styles.heroSlide} ${styles.slideTwo}`} />
      </div>

      <div className={styles.heroContent}>
        <h1>
          Plan. Track. Close. <br />
          <span>All in One CRM</span>
        </h1>

        <p>
          From lead generation to deal closure - manage everything with clarity
          and speed.
        </p>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.primary}>Get Started</Link>
          <Link href="/book-demo" className={styles.secondary}>Live Demo</Link>
        </div>
      </div>
    </section>
  );
}
