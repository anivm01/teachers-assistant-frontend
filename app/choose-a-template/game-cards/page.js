import GameCards from "../../components/GameCards";
import demoArray from "../../data/templateContent.json";
import styles from "../../styles/TemplatePage.module.scss";

export default function GameCardsPage() {
  return (
    <div className={styles.page}>
      {demoArray.map((single, index) => {
        return (
          <div className={styles.game} key={index}>
            <GameCards item={single} />
          </div>
        );
      })}
    </div>
  );
}
