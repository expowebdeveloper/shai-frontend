"use client";

import { useState } from "react";
import Link from "next/link";

import styles from "./PricingSectionOne.module.css";

type PricingPlan = {
  name: string;
  badgeClassName: string;
  monthlyPrice: string;
  annualPrice: string;
  suffix: string;
  description: string;
  features: string[];
  disabledFeatures: string[];
  buttonLabel: string;
  href: string;
  highlighted?: boolean;
};

const plans: PricingPlan[] = [
  {
    name: "Starter",
    badgeClassName: styles.starterBadge,
    monthlyPrice: "$29",
    annualPrice: "$23",
    suffix: "/mo",
    description:
      "Perfect for individuals and hobbyists starting their journey.",
    features: [
      "10 AI Video Credits /mo",
      "720p Resolution",
      "Standard Support",
      "Advanced API Access",
    ],
    disabledFeatures: ["Advanced API Access"],
    buttonLabel: "Choose Starter",
    href: "/trial",
  },
  {
    name: "Pro",
    badgeClassName: styles.proBadge,
    monthlyPrice: "$79",
    annualPrice: "$63",
    suffix: "/mo",
    description: "The ultimate toolkit for content creators and agencies.",
    features: [
      "50 AI Video Credits /mo",
      "4K Ultra HD Export",
      "Priority Rendering Queue",
      "Custom Brand Kits",
      "Team Collaboration (up to 3)",
    ],
    disabledFeatures: [],
    buttonLabel: "Choose Pro",
    href: "/trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    badgeClassName: styles.enterpriseBadge,
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    suffix: "",
    description: "Tailored solutions for large-scale production and security.",
    features: [
      "Unlimited Credits",
      "Dedicated GPU Instances",
      "White-label Solutions",
      "24/7 Dedicated Support",
      "Custom AI Model Training",
    ],
    disabledFeatures: [],
    buttonLabel: "Contact Sales",
    href: "/contact-us",
  },
];

export default function PricingSectionOne() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h1 className={styles.title}>Simple, Scalable Pricing.</h1>
          <p className={styles.subtitle}>
            Choose the perfect plan to accelerate your video production with the
            power of generative AI. No hidden fees, cancel anytime.
          </p>

          {/* ── Toggle row ── */}
          <div className={styles.billing} aria-label="Billing cadence">
            <span
              className={
                isAnnual ? styles.billingLabel : styles.billingLabelActive
              }
            >
              Monthly
            </span>

            {/* Toggle button */}
            <button
              id="pricing-billing-toggle"
              role="switch"
              aria-checked={isAnnual}
              aria-label="Switch between monthly and annual billing"
              className={styles.toggleTrack}
              onClick={() => setIsAnnual((v) => !v)}
            >
              <span
                className={`${styles.toggleKnob} ${isAnnual ? styles.toggleKnobOn : ""}`}
              />
            </button>

            <span
              className={
                isAnnual ? styles.billingLabelActive : styles.billingLabel
              }
            >
              Annual
            </span>

            <span className={styles.saveBadge}>SAVE 20%</span>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => {
            const cardClassName = plan.highlighted
              ? styles.featuredCard
              : styles.card;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <article key={plan.name} className={cardClassName}>
                {plan.highlighted ? (
                  <div className={styles.popularBadge}>Most Popular</div>
                ) : null}

                <p className={plan.badgeClassName}>{plan.name}</p>

                <div className={styles.priceRow}>
                  <span className={styles.price}>{price}</span>
                  {plan.suffix ? (
                    <span className={styles.suffix}>{plan.suffix}</span>
                  ) : null}
                </div>

                <p className={styles.description}>{plan.description}</p>

                <ul className={styles.features}>
                  {plan.features.map((feature) => {
                    const isDisabled = plan.disabledFeatures.includes(feature);
                    return (
                      <li
                        key={feature}
                        className={isDisabled ? styles.disabledFeature : ""}
                      >
                        <span
                          className={styles.featureIcon}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href={plan.href}
                  className={
                    plan.highlighted ? styles.primaryButton : styles.button
                  }
                >
                  {plan.buttonLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
