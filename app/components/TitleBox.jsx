import styles from "../styles/TitleBox.module.scss";
import titleBoxImage from "../../public/svg/title-box-img.svg";
import Image from "next/image";
export default function TitleBox({ title }) {
  return (
    <div className={styles.box}>
      <Image
        className={styles.image}
        src={titleBoxImage}
        alt="teacher typeing on laptop"
      />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
