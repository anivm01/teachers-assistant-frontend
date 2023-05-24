import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/TeachingPrintRegular.woff2" });
import styles from "../styles/GameCards.module.scss";
import Image from "next/image";

export default function GameCards({ item }) {
  return (
    <div className={`${styles.box} ${myFont.className}`}>
      <div className={styles.image_box}>
        <Image src={item.src} alt={item.word} className={styles.image} fill />
      </div>
      <p className={styles.vocabulary}>{item.word}</p>
    </div>
  );
}
