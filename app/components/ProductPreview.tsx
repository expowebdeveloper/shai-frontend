import Image from "next/image";

import styles from "./ProductPreview.module.css";

export default function ProductPreview() {
  return (
    <section className={styles.preview} aria-label="Product preview">
      <div className={styles.frame}>
        <Image
          src="/images/hero-image.png"
          alt="AI video personalization product dashboard"
          width={1280}
          height={760}
          className={styles.image}
          priority
        />
      </div>
    </section>
  );
}
