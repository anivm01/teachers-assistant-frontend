import styles from "../styles/SmallFlashcards.module.scss";
import localFont from "next/font/local";
import Image from "next/image";
const myFont = localFont({ src: "../fonts/TeachingPrintRegular.woff2" });

export default function SmallFlashcards({ item }) {
  return (
    <div className={`${styles.flashcard} ${myFont.className}`}>
      <div className={styles.top}>
        <div className={styles.image_box}>
          <Image src={item.src} alt={item.word} className={styles.image} fill />
        </div>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.vocabulary}>{item.word}</h2>
      </div>
    </div>
  );
}
