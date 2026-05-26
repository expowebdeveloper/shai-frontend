"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { ADDRESS_1, ADDRESS_2, CONTACT_EMAIL } from "../../lib/constants";

import styles from "./ContactSectionOne.module.css";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export default function ContactSectionOne() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    defaultValues: {
      subject: "General Inquiry",
    },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    // TODO: replace with real API call
    await new Promise((r) => setTimeout(r, 800));
    console.log("Contact form submitted:", data);
    reset();
  };

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
            {isSubmitSuccessful && (
              <p className={styles.successMessage}>
                ✓ Message sent! We&apos;ll get back to you shortly.
              </p>
            )}

            <form
              id="contact-form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className={styles.fieldGroup}>
                {/* Name */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-name">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Jane Doe"
                    className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                    {...register("name", {
                      required: "Name is required",
                      minLength: { value: 2, message: "At least 2 characters" },
                    })}
                  />
                  {errors.name && (
                    <span className={styles.errorText}>
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Work Email */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-email">
                    Work Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="jane@company.com"
                    className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className={styles.errorText}>
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Company */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-company">
                    Company
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    placeholder="Acme Inc."
                    className={`${styles.input} ${errors.company ? styles.inputError : ""}`}
                    {...register("company", {
                      required: "Company is required",
                    })}
                  />
                  {errors.company && (
                    <span className={styles.errorText}>
                      {errors.company.message}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="contact-subject">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="General Inquiry"
                    className={`${styles.input} ${errors.subject ? styles.inputError : ""}`}
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <span className={styles.errorText}>
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className={styles.fieldFull}>
                  <label className={styles.label} htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    placeholder="How can we help you?"
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "At least 10 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <span className={styles.errorText}>
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </div>

              <button
                id="contact-send-button"
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>
            </form>
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
                    <span className={styles.officeName}>{ADDRESS_1.label}</span>
                    <span className={styles.officeAddress}>
                      {ADDRESS_1.line1}
                      <br />
                      {ADDRESS_1.line2}
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
                    <span className={styles.officeName}>{ADDRESS_2.label}</span>
                    <span className={styles.officeAddress}>
                      {ADDRESS_2.line1}
                      <br />
                      {ADDRESS_2.line2}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Contact card */}
            <div className={styles.card}>
              <p className={styles.directContactLabel}>Direct Contact</p>
              <p className={styles.contactEmail}>{CONTACT_EMAIL}</p>
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
