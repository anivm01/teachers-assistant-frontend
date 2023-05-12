import Image from "next/image";
import styles from "../styles/Header.module.scss";
import Link from "next/link";
import logo from "../../public/svg/teachers-assistant-logo.svg";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="site logo" className={styles.icon} />
        </Link>
        <h1 className={styles.title}>Teacher's Assistant</h1>
        <MainNav />
      </div>
    </header>
  );
}
