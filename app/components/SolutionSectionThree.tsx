import Image from "next/image";

import styles from "./SolutionSectionThree.module.css";

const metrics = [
  { value: "90%", label: "Faster Documentation" },
  { value: "12x", label: "User Engagement" },
];

export default function SolutionSectionThree() {
  return (
    <section className={styles.section}>
      <article className={styles.card}>
        <div className={styles.imagePanel}>
          <Image
            src="/images/automated.png"
            alt="Developer monitors showing automated product walkthrough code"
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.icon} aria-hidden="true">
              #
            </span>
            SaaS &amp; Software
          </p>

          <h2 className={styles.title}>Automated Product Walkthroughs</h2>

          <p className={styles.copy}>
            Keep your documentation alive. Automatically update product tour
            videos every time you release a new feature deployment.
          </p>

          <div className={styles.metrics}>
            {metrics.map((metric) => (
              <div key={metric.label} className={styles.metricCard}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
