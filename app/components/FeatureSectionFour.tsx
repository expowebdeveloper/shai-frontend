import styles from "./FeatureSectionFour.module.css";

const stats = [
  { value: "0.4s", label: "Edge Latency" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function FeatureSectionFour() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Global Cloud <span className={styles.accent}>Rendering</span>
          </h2>
          <p className={styles.copy}>
            Scale from one video to one million without breaking a sweat. Our
            distributed GPU network ensures sub-60-second rendering for complex
            4K assets, anywhere in the world.
          </p>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={styles.visual}
          aria-label="Global cloud rendering network"
        >
          <div className={styles.syncCard}>
            <span className={styles.syncIcon} aria-hidden="true">
              #
            </span>
            <h3 className={styles.syncTitle}>Syncing Nodes...</h3>
            <p className={styles.syncText}>
              Optimizing route across 42 global data centers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
