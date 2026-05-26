import Link from "next/link";

import styles from "./SolutionSectionFour.module.css";

export default function SolutionSectionFour() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <h2 className={styles.title}>Ready to scale your production?</h2>

        <p className={styles.description}>
          Join 2,500+ teams using AIVideo Pro to automate their visual
          communication workflow.
        </p>

        <div className={styles.actions}>
          <Link href="/demo" className={styles.primaryButton}>
            Talk to an Expert
          </Link>
          <Link href="/demo" className={styles.secondaryButton}>
            View Demo
            <span className={styles.playIcon} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
