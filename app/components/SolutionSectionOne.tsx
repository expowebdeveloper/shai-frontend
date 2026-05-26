import Link from "next/link";

import styles from "./SolutionSectionOne.module.css";

export default function SolutionSectionOne() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.badge}>Enterprise Ready Solutions</p>

        <h1 className={styles.title}>
          Solutions for Every{" "}
          <span className={styles.titleAccent}>High-Growth Team.</span>
        </h1>

        <p className={styles.description}>
          Scale your content production effortlessly with industry-specific AI
          models tailored for Marketing, Education, and Software development.
        </p>

        <div className={styles.actions}>
          <Link href="/demo" className={styles.primaryButton}>
            Talk to an Expert
          </Link>
          <Link href="/use-cases" className={styles.secondaryButton}>
            View Use Cases
          </Link>
        </div>
      </div>
    </section>
  );
}
