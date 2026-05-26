import Link from "next/link";

import styles from "./ContactSectionThree.module.css";

export default function ContactSectionThree() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <h2 className={styles.title}>Join the Revolution</h2>

        <p className={styles.description}>
          Help us shape the future of how humanity interacts with AI. We are
          always looking for visionary engineers, designers, and storytellers.
        </p>

        <div className={styles.actions}>
          <Link href="/careers" className={styles.primaryButton}>
            Apply Now
          </Link>
          <Link href="/trial" className={styles.secondaryButton}>
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
