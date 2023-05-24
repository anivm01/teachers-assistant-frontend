import styles from "../styles/MediumFlashcards.module.scss";
import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/TeachingPrintRegular.woff2" });

export default function MediumFlashcards({ item }) {
  return (
    <div className={`${styles.flashcard} ${myFont.className}`}>
      <div className={styles.image_box}>
        <img src={item.src} alt={item.word} className={styles.image} />
      </div>
      {/* <div className="medium-flashcards-template__divider"></div> */}
      <div className={styles.text_box}>
        <h2 className={styles.vocabulary}>{item.word}</h2>
      </div>
    </div>
  );
}
