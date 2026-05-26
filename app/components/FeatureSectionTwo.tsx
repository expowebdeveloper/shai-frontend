import Image from "next/image";

import styles from "./FeatureSectionTwo.module.css";

const engineFeatures = [
  {
    icon: "S",
    iconClassName: styles.purpleIcon,
    title: "CSV/API Data Injection",
    text: "Connect your datasets directly to the render pipeline.",
  },
  {
    icon: "+",
    iconClassName: styles.blueIcon,
    title: "Real-time Visual Merging",
    text: "Seamless compositing at 4K resolution.",
  },
  {
    icon: "R",
    iconClassName: styles.amberIcon,
    title: "Adaptive Resolution Scaling",
    text: "Outputs optimized for every platform and device.",
  },
];

export default function FeatureSectionTwo() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.visualStack}>
          <article className={`${styles.imageCard} ${styles.primaryCard}`}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/dynamic1.png"
                alt="Personalized video template with dynamic business profile"
                fill
                sizes="(max-width: 640px) 100vw, 340px"
                className={styles.image}
              />
            </div>
            <p className={styles.cardCaption}>Dynamic Asset Replacement</p>
            <p className={styles.cardText}>
              Swapping contextually aware variables
            </p>
          </article>

          <article className={`${styles.imageCard} ${styles.secondaryCard}`}>
            <div className={styles.imageWrap}>
              <Image
                src="/images/dynamic2.png"
                alt="Template variations rendered on a production tablet"
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className={styles.image}
              />
            </div>
            <p className={styles.cardCaption}>High-Frequency Variation</p>
            <p className={styles.cardText}>Real-time name and logo injection</p>
          </article>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Dynamic Personalization Engine</h2>
          <p className={styles.copy}>
            Our core engine takes a single master template and generates
            thousands of unique versions in minutes. Inject custom names,
            variables, and visual assets without losing render quality.
          </p>

          <div className={styles.features}>
            {engineFeatures.map((feature) => (
              <div key={feature.title} className={styles.featureItem}>
                <span
                  className={`${styles.featureIcon} ${feature.iconClassName}`}
                  aria-hidden="true"
                >
                  {feature.icon}
                </span>
                <div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureText}>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
