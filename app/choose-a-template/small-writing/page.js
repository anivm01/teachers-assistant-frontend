import SmallWriting from "../../components/SmallWriting";
import demoArray from "../../data/templateContent.json";
import styles from "../../styles/TemplatePage.module.scss";

export default function SmallWritingPage() {
  return (
    <div className={styles.page}>
      {demoArray.map((single, index) => {
        return (
          <div className={styles.writing_small} key={index}>
            <SmallWriting item={single} />
          </div>
        );
      })}
    </div>
  );
}
