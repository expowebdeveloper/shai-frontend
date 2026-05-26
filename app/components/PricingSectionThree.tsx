import styles from "./PricingSectionThree.module.css";

const faqs = [
  {
    question: 'How do "Video Credits" work?',
    answer:
      "Each generated or rendered video uses credits based on length, resolution, and AI features. Your monthly credits reset at the start of each billing cycle.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel anytime, and your plan remains active until the end of the current billing period.",
  },
  {
    question: 'What is included in the "Custom AI Model Training"?',
    answer:
      "Enterprise teams can train models around brand style, approved voices, product visuals, and reusable content patterns.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. You can start with a trial to test the workflow before choosing the plan that fits your production volume.",
  },
];

export default function PricingSectionThree() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Frequently Asked Questions</h2>

        <div className={styles.list}>
          {faqs.map((faq) => (
            <details key={faq.question} className={styles.item}>
              <summary className={styles.question}>
                {faq.question}
                <span className={styles.chevron} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
