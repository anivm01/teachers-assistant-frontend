import Link from "next/link";
import styles from "../styles/SmallPreviewBox.module.scss";
export default function SmallPreviewBox({ title, url, children }) {
  return (
    <div className={styles.box}>
      <h3 className={styles.description}>{title}</h3>
      <div className={`${styles.blur} ${styles.blur_top}`}></div>
      <div className={styles.option}>{children}</div>
      <div className={`${styles.blur} ${styles.blur_bottom}`}></div>
      <Link href={url} className={styles.button}>
        Select
      </Link>
    </div>
  );
}
