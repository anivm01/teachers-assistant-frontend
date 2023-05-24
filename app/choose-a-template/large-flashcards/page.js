import LargeFlashcards from "../../components/LargeFlashcards";
import demoArray from "../../data/templateContent.json";
import styles from "../../styles/TemplatePage.module.scss";

export default function LargeFlashcardsPage() {
  return (
    <div className={styles.page}>
      {demoArray.map((single, index) => {
        return (
          <div className={styles.large} key={index}>
            <LargeFlashcards item={single} />
          </div>
        );
      })}
    </div>
  );
}
