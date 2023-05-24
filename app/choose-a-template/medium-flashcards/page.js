import MediumFlashcards from "../../components/MediumFlashcards";
import demoArray from "../../data/templateContent.json";
import styles from "../../styles/TemplatePage.module.scss";

export default function MediumFlashcardsPage() {
  return (
    <div className={styles.page}>
      {demoArray.map((single, index) => {
        return (
          <div className={styles.medium} key={index}>
            <MediumFlashcards item={single} />
          </div>
        );
      })}
    </div>
  );
}
