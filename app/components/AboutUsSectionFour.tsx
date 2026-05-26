import styles from "./AboutUsSectionFour.module.css";

const stats = [
  { value: "1B+", label: "Videos Rendered", colorClassName: styles.purple },
  { value: "50+", label: "Languages Supported", colorClassName: styles.blue },
  { value: "99.9%", label: "Uptime Guaranteed", colorClassName: styles.amber },
];

export default function AboutUsSectionFour() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <span className={`${styles.value} ${stat.colorClassName}`}>
              {stat.value}
            </span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
