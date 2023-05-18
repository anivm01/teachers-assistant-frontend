import AddMultipleImages from "../components/WordList";
import TitleBox from "../components/TitleBox";
import style from "../styles/page.module.scss";
import WordList from "../components/WordList";

export default function CreateList() {
  return (
    <main className={style.main}>
      <TitleBox title="Create your word list" />
      <WordList />
    </main>
  );
}
