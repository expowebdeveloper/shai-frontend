import Image from "next/image";

import styles from "./FeatureSectionThree.module.css";

export default function FeatureSectionThree() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Intelligent Placeholder Detection</h2>
        <p className={styles.description}>
          Our AI automatically scans your video to find text fields, logos, and
          voice-over cues using advanced computer vision.
        </p>

        <div className={styles.frame}>
          <Image
            src="/images/feature3.png"
            alt="Video editor detecting dynamic placeholder fields and logo areas"
            width={597}
            height={314}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
