import styles from "./ContactSectionOne.module.css";

export default function ContactSectionOne() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Badge */}
        <span className={styles.badge}>• We&apos;re here to help</span>

        {/* Hero text */}
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.description}>
          Have questions about our AI-powered video creation tools? Our team of
          experts is ready to help you transform your workflow.
        </p>

        {/* Two-column grid */}
        <div className={styles.grid}>
          {/* ── Contact form card ── */}
          <div className={styles.formCard}>
            <div className={styles.fieldGroup}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  className={styles.input}
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-email">
                  Work Email
                </label>
                <input
                  id="contact-email"
                  className={styles.input}
                  type="email"
                  placeholder="jane@company.com"
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-company">
                  Company
                </label>
                <input
                  id="contact-company"
                  className={styles.input}
                  type="text"
                  placeholder="Acme Inc."
                />
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="contact-subject">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  className={styles.input}
                  type="text"
                  placeholder="General Inquiry"
                  defaultValue="General Inquiry"
                />
              </div>

              <div className={`${styles.fieldFull}`}>
                <label className={styles.label} htmlFor="contact-message">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="How can we help you?"
                />
              </div>
            </div>

            <button id="contact-send-button" className={styles.submitButton}>
              Send Message
            </button>
          </div>

          {/* ── Side column ── */}
          <div className={styles.sideColumn}>
            {/* Our Offices card */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Our Offices</h2>
              <ul className={styles.officeList}>
                <li className={styles.officeItem}>
                  <span className={styles.officeIcon}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#7040dc"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div className={styles.officeDetails}>
                    <span className={styles.officeName}>
                      San Francisco (HQ)
                    </span>
                    <span className={styles.officeAddress}>
                      123 AI Plaza, Market St.
                      <br />
                      San Francisco, CA 94103
                    </span>
                  </div>
                </li>

                <li className={styles.officeItem}>
                  <span className={styles.officeIcon}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#7040dc"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div className={styles.officeDetails}>
                    <span className={styles.officeName}>London</span>
                    <span className={styles.officeAddress}>
                      45 Innovation Way, Shoreditch
                      <br />
                      London, EC2A 4NE
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Contact card */}
            <div className={styles.card}>
              <p className={styles.directContactLabel}>Direct Contact</p>
              <p className={styles.contactEmail}>support@example.com</p>
              <div className={styles.socialRow}>
                {/* Globe / website */}
                <a
                  href="#"
                  id="contact-social-web"
                  className={styles.socialBtn}
                  aria-label="Website"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="#"
                  id="contact-social-twitter"
                  className={styles.socialBtn}
                  aria-label="Twitter"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  id="contact-social-linkedin"
                  className={styles.socialBtn}
                  aria-label="LinkedIn"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <polyline points="8 21 12 17 16 21" />
                    <line x1="12" y1="17" x2="12" y2="11" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
