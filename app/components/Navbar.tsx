import Link from "next/link";

import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.logo} aria-label="Go to homepage">
          LOGO
        </Link>

        <div className={styles.links}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.active ? styles.activeLink : styles.link}
              aria-current={link.active ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/login" className={styles.loginLink}>
            Login
          </Link>
          <Link href="/trial" className={styles.trialButton}>
            Start Free Trial
          </Link>
        </div>
      </nav>
    </header>
  );
}
