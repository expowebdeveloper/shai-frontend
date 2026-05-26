import Image from "next/image";

import styles from "./AboutUsSectionFive.module.css";

const leaders = [
  {
    name: "Elena Vance",
    role: "Chief Executive Officer",
    image: "/images/user-img-1.png",
  },
  {
    name: "Dr. Marcus Chen",
    role: "Chief Technology Officer",
    image: "/images/user-img-2.png",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Design",
    image: "/images/user-img-3.png",
  },
  {
    name: "David Miller",
    role: "Chief Operating Officer",
    initials: "DM",
  },
];

export default function AboutUsSectionFive() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Led by Visionaries</h2>
          <p className={styles.subtitle}>
            A team of experts dedicated to the future of video storytelling.
          </p>
        </div>

        <div className={styles.grid}>
          {leaders.map((leader) => (
            <article key={leader.name} className={styles.card}>
              <div className={styles.portraitFrame}>
                {leader.image ? (
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={210}
                    height={244}
                    className={styles.portrait}
                  />
                ) : (
                  <div className={styles.fallbackPortrait} aria-hidden="true">
                    {leader.initials}
                  </div>
                )}
              </div>
              <h3 className={styles.name}>{leader.name}</h3>
              <p className={styles.role}>{leader.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
