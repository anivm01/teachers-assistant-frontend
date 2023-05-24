import localFont from "next/font/local";
const myFont = localFont({ src: "../fonts/TeachingPrintDottedLined.woff2" });
import styles from "../styles/LargeWriting.module.scss";
import Image from "next/image";

export default function LargeWriting({ item }) {
  return (
    <div className={`${styles.item} ${myFont.className}`}>
      <div className={styles.image_box}>
        <Image src={item.src} alt={item.word} className={styles.image} fill />
      </div>
      <pre className={`${styles.vocabulary} ${myFont.className}`}>
        {item.word}
        {
          "                                                                     "
        }
      </pre>
    </div>
  );
}
