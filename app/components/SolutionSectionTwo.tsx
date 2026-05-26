import Image from "next/image";

import styles from "./SolutionSectionTwo.module.css";

const marketingBenefits = [
  "Dynamic localization for global markets",
  "A/B testing automation for creative assets",
];

export default function SolutionSectionTwo() {
  return (
    <section className={styles.section} aria-label="Solutions by team">
      <div className={styles.grid}>
        <article className={styles.featureCard}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              <span className={styles.icon} aria-hidden="true" />
              Marketing
            </p>

            <h2 className={styles.title}>Personalized Content at Scale</h2>

            <p className={styles.copy}>
              Generate localized, high-conversion video ads for hundreds of
              micro-segments in minutes, not months.
            </p>

            <div className={styles.checkList}>
              {marketingBenefits.map((benefit) => (
                <p key={benefit} className={styles.checkItem}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    ✓
                  </span>
                  {benefit}
                </p>
              ))}
            </div>

            <div className={styles.metricPanel}>
              <span className={styles.metricValue}>4.2x</span>
              <span className={styles.metricText}>
                Average increase in CTR for ad campaigns
              </span>
            </div>
          </div>

          <div className={styles.imagePanel}>
            <Image
              src="/images/personalized-content.png"
              alt="Analytics dashboard for personalized marketing content"
              fill
              sizes="(max-width: 1024px) 100vw, 43vw"
              className={styles.featureImage}
            />
          </div>
        </article>

        <article className={styles.compactCard}>
          <div className={styles.compactContent}>
            <p className={`${styles.eyebrow} ${styles.educationEyebrow}`}>
              <span className={styles.icon} aria-hidden="true" />
              Education
            </p>

            <h2 className={styles.title}>Accessible Learning for Everyone</h2>

            <p className={styles.copy}>
              Transform textbooks into engaging interactive video modules and
              automatically with multi-language dubbing.
            </p>

            <div className={styles.compactImageWrap}>
              <Image
                src="/images/accessible-learning.png"
                alt="Interactive education interface for accessible learning"
                fill
                sizes="(max-width: 1024px) 100vw, 31vw"
                className={styles.compactImage}
              />
            </div>

            <div className={styles.educationMetric}>
              <span className={styles.educationMetricValue}>85%</span>
              <span className={styles.educationMetricText}>
                Reduction in video production costs
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
