import { GenerateIcon, RecordIcon, UploadIcon } from "./svgIcons";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    title: "1. Record",
    description:
      "Film a short base video. Our AI analyzes your cadence, expressions, and tone.",
    icon: RecordIcon,
  },
  {
    title: "2. Upload",
    description:
      "Import your customer list via CSV or API. Map variables like name or company.",
    icon: UploadIcon,
  },
  {
    title: "3. Generate",
    description:
      "Our engine renders unique versions for every lead, matching your voice perfectly.",
    icon: GenerateIcon,
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>A Modern Process for Global Scale</h2>
          <p className={styles.subtitle}>
            From raw recording to thousands of personalized assets in minutes.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <article key={step.title} className={styles.card}>
              <div className={styles.icon}>{step.icon}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
