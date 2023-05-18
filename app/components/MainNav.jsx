"use client";
import Link from "next/link";
import styles from "../styles/MainNav.module.scss";
import hamburger from "../../public/svg/hamburger.svg";
import Image from "next/image";
import { useState } from "react";

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the state when the mobile menu button is clicked
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <button
        className={styles.hamburger_button}
        type="button"
        onClick={handleToggle}
      >
        <Image src={hamburger} alt="hamburger menu" className={styles.icon} />
      </button>
      <ul
        className={`${styles.menu_desktop}
    ${isOpen ? styles.menu_mobile : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <li>
          <Link href="/create-list" className={styles.link}>
            New Word List
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            Browse Templates
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            Library
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            Login/Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}
