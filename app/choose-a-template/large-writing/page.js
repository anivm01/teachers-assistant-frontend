import LargeWriting from "../../components/LargeWriting";
import demoArray from "../../data/templateContent.json";
import styles from "../../styles/TemplatePage.module.scss";

export default function LargeWritingPage() {
  return (
    <div className={styles.page}>
      {demoArray.map((single, index) => {
        return (
          <div className={styles.writing_large} key={index}>
            <LargeWriting item={single} />
          </div>
        );
      })}
    </div>
  );
}
