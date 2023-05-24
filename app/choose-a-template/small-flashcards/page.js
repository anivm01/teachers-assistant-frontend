import SmallFlashcards from "../../components/SmallFlashcards";
import demoArray from "../../data/templateContent.json";
import styles from "../../styles/TemplatePage.module.scss";

export default function SmallFlashcardsPage() {
  return (
    <div className={styles.page}>
      {demoArray.map((single, index) => {
        return (
          <div className={styles.small} key={index}>
            <SmallFlashcards item={single} />
          </div>
        );
      })}
    </div>
  );
}
