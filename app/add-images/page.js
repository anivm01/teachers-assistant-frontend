import AddMultipleImages from "../components/AddMultipleImages";
import style from "../styles/page.module.scss";

export default function AddImages() {
  return (
    <main className={style.main}>
      <div className={style.title_box}>
        <h2>Add your image set</h2>
      </div>
      <AddMultipleImages />
    </main>
  );
}
