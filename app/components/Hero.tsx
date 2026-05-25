import Link from "next/link";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.badge}>NOW POWERED BY GPT-4 VISION</p>

        <h1 className={styles.title}>
          One Video.{" "}
          <span className={styles.titleAccent}>Infinite Personalization.</span>
        </h1>

        <p className={styles.description}>
          Scale your outreach with hyper-personalized AI video messaging.
          Record once, and automatically generate thousands of custom videos
          with dynamic voice and visual content.
        </p>

        <div className={styles.actions}>
          <Link href="/trial" className={styles.primaryButton}>
            Start Free Trial
          </Link>
          <Link href="/demo" className={styles.secondaryButton}>
            <span className={styles.playIcon} aria-hidden="true" />
            Watch Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
