import styles from "./FeatureSectionFive.module.css";

const smallFeatures = [
  {
    icon: "API",
    iconClassName: styles.amberIcon,
    title: "Seamless API",
    text: "Integrate directly into your CRM or marketing stack with our REST API.",
  },
  {
    icon: "S",
    iconClassName: styles.purpleIcon,
    title: "Enterprise Security",
    text: "SOC2 Type II compliant. Bank-grade encryption for all assets.",
  },
  {
    icon: "I",
    iconClassName: styles.blueIcon,
    title: "Performance Insights",
    text: "Track view rates and engagement metrics for every video link.",
  },
];

export default function FeatureSectionFive() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Everything you need to{" "}
          <span className={styles.titleAccent}>scale video</span>
        </h2>

        <div className={styles.grid}>
          <article className={`${styles.card} ${styles.largeCard}`}>
            <span
              className={`${styles.icon} ${styles.purpleIcon}`}
              aria-hidden="true"
            >
              C
            </span>
            <h3 className={styles.cardTitle}>Automated Scene Splicing</h3>
            <p className={styles.cardText}>
              Our AI detects transitions and automatically adjusts pacing to
              match your custom soundtrack and voice-over length.
            </p>

            <div className={styles.wavePanel} aria-hidden="true">
              <div className={styles.wave}>
                {Array.from({ length: 7 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>
            </div>
          </article>

          <article className={`${styles.card} ${styles.mediumCard}`}>
            <span
              className={`${styles.icon} ${styles.blueIcon}`}
              aria-hidden="true"
            >
              A
            </span>
            <h3 className={styles.cardTitle}>Auto-Localization</h3>
            <p className={styles.cardText}>
              Translate text and sync audio in 45+ languages with localized
              adjustments.
            </p>

            <div className={styles.chips}>
              <span className={styles.chip}>English</span>
              <span className={styles.chip}>Spanish</span>
              <span className={styles.chip}>Japanese</span>
              <span className={styles.chip}>German</span>
            </div>
          </article>

          {smallFeatures.map((feature) => (
            <article
              key={feature.title}
              className={`${styles.card} ${styles.smallCard}`}
            >
              <span
                className={`${styles.icon} ${feature.iconClassName}`}
                aria-hidden="true"
              >
                {feature.icon}
              </span>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
