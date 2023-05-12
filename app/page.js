import Image from "next/image";
import styles from "./styles/page.module.scss";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
