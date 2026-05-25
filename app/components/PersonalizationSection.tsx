import Image from "next/image";

import styles from "./PersonalizationSection.module.css";

const variables = ["[Customer Name]", "[Company Name]", "[Website URL]", "[Pain Point]"];

export default function PersonalizationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Personalize Every Variable.
            <span>Zero Latency.</span>
          </h2>
          <p className={styles.description}>
            Go beyond just names. Insert company logos on backgrounds, change
            the audio mention of their industry, and update visual callouts
            dynamically.
          </p>

          <div className={styles.chips} aria-label="Personalization variables">
            {variables.map((variable) => (
              <span key={variable} className={styles.chip}>
                {variable}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src="/images/personalized-image.png"
            alt="Personalized variable cards"
            width={640}
            height={300}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
