import styles from "./FeatureSectionOne.module.css";

export default function FeatureSectionOne() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.badge}>Engineering Excellence</p>

        <h1 className={styles.title}>
          The Tech Behind <span className={styles.accent}>the Magic</span>
        </h1>

        <p className={styles.description}>
          Experience the next generation of video synthesis. Our architecture
          combines neural rendering with cloud-scale infrastructure to automate
          your creative workflow.
        </p>

        <div
          className={styles.visual}
          aria-label="Neural video synthesis preview"
        >
          <span className={styles.energyRing} aria-hidden="true" />
          <button
            className={styles.playButton}
            type="button"
            aria-label="Play feature video"
          />
        </div>
      </div>
    </section>
  );
}
