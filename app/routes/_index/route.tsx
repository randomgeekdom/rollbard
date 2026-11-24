import type { Route } from "./+types/route";
import styles from "./styles.module.css";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Rollbard Studios" },
    {
      name: "description",
      content:
        "Rollbard Studios makes tabletop RPGs and video games. We make games worth retelling.",
    },
  ];
}

export default function Home() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Rollbard Studios</h1>
      <p className={styles.tagline}>We make games worth retelling.</p>
      <p className={styles.note}>New site coming soon.</p>
    </main>
  );
}
