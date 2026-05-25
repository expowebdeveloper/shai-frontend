import Link from "next/link";

import styles from "./Footer.module.css";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Video Engine", href: "/product/video-engine" },
      { label: "Integrations", href: "/integrations" },
      { label: "API Docs", href: "/docs/api" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4c2.1 2.2 3.2 4.9 3.2 8s-1.1 5.8-3.2 8M12 4c-2.1 2.2-3.2 4.9-3.2 8s1.1 5.8 3.2 8" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.7 10.7 6.6-4.4M8.7 13.3l6.6 4.4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              LOGO
            </Link>
            <p className={styles.description}>
              The leading platform for hyper-scale AI video personalization.
              Built for the modern revenue engine.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav
              key={column.title}
              className={styles.column}
              aria-label={column.title}
            >
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2024 AIVideoPro. All rights reserved.
          </p>
          <div className={styles.socials} aria-label="Footer actions">
            <Link href="/language" aria-label="Language settings">
              <GlobeIcon />
            </Link>
            <Link href="/share" aria-label="Share">
              <ShareIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
