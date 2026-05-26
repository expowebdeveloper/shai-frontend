import styles from "./AboutUsSectionThree.module.css";

const principles = [
  {
    icon: "R",
    iconClassName: styles.purpleIcon,
    title: "Innovation",
    text: "We don’t just follow trends; we define the bleeding edge of generative video and real-time rendering.",
  },
  {
    icon: "∞",
    iconClassName: styles.blueIcon,
    title: "Scalability",
    text: "Designed for the enterprise. Our architecture handles billions of renders with uncompromising stability.",
  },
  {
    icon: "C",
    iconClassName: styles.amberIcon,
    title: "Connection",
    text: "Technology is the tool, but connection is the goal. We prioritize empathy in every pixel we generate.",
  },
];

export default function AboutUsSectionThree() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>The Core Principles We Live By</h2>
          <p className={styles.subtitle}>
            How we make decisions every single day.
          </p>
        </div>

        <div className={styles.grid}>
          {principles.map((principle) => (
            <article key={principle.title} className={styles.card}>
              <span
                className={`${styles.icon} ${principle.iconClassName}`}
                aria-hidden="true"
              >
                {principle.icon}
              </span>
              <h3 className={styles.cardTitle}>{principle.title}</h3>
              <p className={styles.cardText}>{principle.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
