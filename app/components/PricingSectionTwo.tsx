import styles from "./PricingSectionTwo.module.css";

const features = [
  {
    feature: "Video Credits /mo",
    starter: "10",
    pro: "50",
    enterprise: "Unlimited",
  },
  {
    feature: "Max Resolution",
    starter: "720p",
    pro: "4K",
    enterprise: "8K / Cinematic",
    proStrong: true,
  },
  {
    feature: "AI Voiceovers",
    starter: "5 voices",
    pro: "All 100+ voices",
    enterprise: "Custom Voice Cloning",
    proStrong: true,
  },
  {
    feature: "API Access",
    starter: "-",
    pro: "Standard",
    enterprise: "High-priority Rate Limits",
    proStrong: true,
  },
  {
    feature: "Storage",
    starter: "5 GB",
    pro: "100 GB",
    enterprise: "Unlimited",
    proStrong: true,
  },
];

export default function PricingSectionTwo() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Compare all features</h2>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Starter</th>
                <th scope="col" className={styles.proHeader}>
                  Pro
                </th>
                <th scope="col">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row) => (
                <tr key={row.feature}>
                  <td>{row.feature}</td>
                  <td>{row.starter}</td>
                  <td className={styles.proCell}>
                    <span className={row.proStrong ? styles.strong : ""}>
                      {row.pro}
                    </span>
                  </td>
                  <td>{row.enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
