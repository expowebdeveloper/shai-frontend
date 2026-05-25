import Link from "next/link";

import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <h2 className={styles.title}>
          Start Creating Personalized Videos at
          <span>Scale</span>
        </h2>
        <p className={styles.description}>
          Join 2,000+ companies using AIVideoPro to turn their sales funnel
          into a personalized journey.
        </p>

        <div className={styles.actions}>
          <Link href="/trial" className={styles.primaryButton}>
            Start Your Free Trial
          </Link>
          <Link href="/demo" className={styles.secondaryButton}>
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </section>
  );
}
