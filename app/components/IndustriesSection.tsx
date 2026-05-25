import Image from "next/image";
import Link from "next/link";

import styles from "./IndustriesSection.module.css";

const industries = [
  {
    title: "E-commerce",
    description: "Cart abandonment recovery that feels human.",
    image: "/images/e-commerce.png",
  },
  {
    title: "SaaS",
    description: "Onboard new users with personalized welcomes.",
    image: "/images/saas.png",
  },
  {
    title: "Education",
    description: "Course introductions tailored to each student.",
    image: "/images/education.png",
  },
  {
    title: "Marketing",
    description: "Hyper-targeted ads for every segment.",
    image: "/images/marketing.png",
  },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.copy}>
            <h2 className={styles.title}>
              Built for Every High-Growth
              <span>Industry</span>
            </h2>
            <p className={styles.description}>
              Personalized video is the unfair advantage for modern sales and
              marketing teams.
            </p>
          </div>

          <Link href="/industries" className={styles.link}>
            See All Industries
            <span className={styles.arrow} aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.grid}>
          {industries.map((industry) => (
            <article key={industry.title} className={styles.card}>
              <Image
                src={industry.image}
                alt=""
                width={42}
                height={42}
                className={styles.icon}
              />
              <h3 className={styles.cardTitle}>{industry.title}</h3>
              <p className={styles.cardText}>{industry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
