import Link from "next/link";

import styles from "./PricingSection.module.css";

const plans = [
  {
    name: "Starter",
    price: "$49",
    suffix: "/mo",
    features: [
      "50 Personalized Videos",
      "720p HD Quality",
      "Email Support",
    ],
    button: "Choose Starter",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$199",
    suffix: "/mo",
    features: [
      "1,000 Personalized Videos",
      "1080p Full HD Quality",
      "Custom Landing Pages",
      "API Access",
    ],
    button: "Choose Pro",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    suffix: "",
    features: [
      "Unlimited Videos",
      "4K Ultra HD Quality",
      "Dedicated Account Manager",
      "Custom AI Training",
    ],
    button: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Simple, Scalable Pricing</h2>
          <p className={styles.subtitle}>
            No hidden fees. Choose the plan that fits your volume.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={plan.highlighted ? styles.featuredCard : styles.card}
            >
              {plan.highlighted ? (
                <div className={styles.badge}>MOST POPULAR</div>
              ) : null}

              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceRow}>
                <span className={styles.price}>{plan.price}</span>
                {plan.suffix ? <span className={styles.suffix}>{plan.suffix}</span> : null}
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <Link
                href={plan.highlighted ? "/trial" : "/contact"}
                className={plan.highlighted ? styles.primaryButton : styles.secondaryButton}
              >
                {plan.button}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
