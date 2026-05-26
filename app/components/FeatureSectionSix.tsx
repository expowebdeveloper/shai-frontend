import Link from "next/link";

import styles from "./FeatureSectionSix.module.css";

export default function FeatureSectionSix() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <h2 className={styles.title}>Ready to automate your production?</h2>

        <p className={styles.description}>
          Join 5,000+ companies using AIVideo Pro to power their visual
          communications with neural synthesis.
        </p>

        <div className={styles.actions}>
          <Link href="/trial" className={styles.primaryButton}>
            Create Your First Video
          </Link>
          <Link href="/demo" className={styles.secondaryButton}>
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
