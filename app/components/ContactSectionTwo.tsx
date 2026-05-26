import Image from "next/image";
import Link from "next/link";

import styles from "./ContactSectionTwo.module.css";

export default function ContactSectionTwo() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── World-map card ── */}
        <div className={styles.mapCard}>
          <Image
            src="/images/global.png"
            alt="World map showing global coverage"
            fill
            className={styles.mapImage}
            sizes="(max-width: 768px) 100vw, 1060px"
            priority
          />

          {/* Subtle darkening overlay */}
          <div className={styles.mapOverlay} />

          {/* Dot marker — approximate San Francisco position */}
          <span className={styles.mapDot} style={{ top: "37%", left: "18%" }} />

          {/* Centre badge */}
          <div className={styles.mapBadge}>
            <p className={styles.mapBadgeTitle}>Global Coverage</p>
            <p className={styles.mapBadgeText}>
              Processing millions of videos across 4 continents.
            </p>
          </div>
        </div>

        {/* ── Quick-help CTA ── */}
        <div className={styles.ctaCard}>
          <div className={styles.ctaLeft}>
            <span className={styles.ctaIcon}>
              {/* question-mark icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </span>
            <div className={styles.ctaTextGroup}>
              <span className={styles.ctaTitle}>Need quick help?</span>
              <span className={styles.ctaSubtitle}>
                Check our documentation or common troubleshooting steps.
              </span>
            </div>
          </div>

          <Link
            href="/help"
            id="contact-help-center-link"
            className={`${styles.ctaLink} group`}
          >
            Go to Help Center
            <svg
              className={styles.ctaArrow}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
