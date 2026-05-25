import Image from "next/image";

import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    quote:
      '"AIVideoPro changed how we do sales. Our response rates jumped from 2% to 18% in the first month."',
    name: "Sarah Miller",
    title: "VP Sales, CloudScale",
    image: "/images/user-img-1.png",
  },
  {
    quote:
      '"The realism is terrifyingly good. It’s the only AI video tool that doesn’t feel ‘uncanny valley.’"',
    name: "David Chen",
    title: "Founder, GrowthFlow",
    image: "/images/user-img-2.png",
  },
  {
    quote:
      '"Rendering thousands of videos used to take days. Now it takes twenty minutes. Pure magic."',
    name: "Elena Rodriguez",
    title: "Marketing Director, FinTechly",
    image: "/images/user-img-3.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Loved by Revenue Teams</h2>

        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className={styles.card}>
              <div className={styles.stars} aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <p className={styles.quote}>{testimonial.quote}</p>

              <div className={styles.author}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className={styles.avatar}
                />
                <div>
                  <h3 className={styles.name}>{testimonial.name}</h3>
                  <p className={styles.role}>{testimonial.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
