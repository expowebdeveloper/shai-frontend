import Image from "next/image";

import styles from "./DemoPlayerSection.module.css";

const stats = [
  { value: "99.8%", label: "Lip-sync Accuracy" },
  { value: "45ms", label: "Avg. Rendering" },
  { value: "120+", label: "Languages Supported" },
];

export default function DemoPlayerSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.playerFrame}>
          <Image
            src="/images/demo-player.png"
            alt="Demo video player preview"
            width={960}
            height={510}
            className={styles.image}
          />
        </div>

        <div className={styles.stats} aria-label="Video generation metrics">
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
