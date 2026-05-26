import Link from "next/link";

import styles from "./AboutUsSectionOne.module.css";

export default function AboutUsSectionOne() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Our Mission: Humanizing AI Video.</h1>

        <p className={styles.description}>
          We bridge the gap between algorithmic precision and human connection,
          making high-quality video storytelling accessible to every creator on
          the planet.
        </p>

        <div className={styles.actions}>
          <Link href="/about-us#story" className={styles.primaryButton}>
            Our Story
          </Link>
          <Link href="/careers" className={styles.secondaryButton}>
            View Open Roles
          </Link>
        </div>
      </div>
    </section>
  );
}
