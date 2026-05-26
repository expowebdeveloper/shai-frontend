import Image from "next/image";

import styles from "./AboutUsSectionTwo.module.css";

const stats = [
  { value: "2019", label: "Inception" },
  { value: "250+", label: "Patents Pending" },
];

export default function AboutUsSectionTwo() {
  return (
    <section className={styles.section} id="story">
      <div className={styles.inner}>
        <div className={styles.imageFrame}>
          <Image
            src="/images/found.png"
            alt="Founders in a research office reviewing synthetic media systems"
            width={512}
            height={512}
            className={styles.image}
          />
        </div>

        <article className={styles.card}>
          <p className={styles.eyebrow}>The Genesis</p>
          <h2 className={styles.title}>Founded on Engineering Excellence</h2>

          <div className={styles.copy}>
            <p>
              Born in a high-density research lab, AIVideoPro started with a
              single question: Why does AI content feel so distant? Our
              founders, a team of MIT engineers and Oscar-winning visual effects
              artists, set out to solve the “uncanny valley” of synthetic media.
            </p>
            <p>
              Today, we’ve built the world’s most sophisticated personalization
              engine, allowing brands to speak to millions of customers
              individually without ever losing the human touch.
            </p>
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
