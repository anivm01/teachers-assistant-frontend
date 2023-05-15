import Link from "next/link";
import styles from "../styles/page.module.scss";

export default function NewList() {
  return (
    <main className={styles.main}>
      <h2>Create a Word List</h2>
      <p>
        Choose one of the following options to begin making your word list.{" "}
      </p>
      <p>
        Whichever option you choose, you will be able to add to and edit your
        list later.
      </p>
      <Link href="/add-images">
        <h3>Option 1 - upload a set of images then add words later</h3>
      </Link>
      <h3>Option 2 - write a set of words and then add images to each later</h3>
      <h3>Option 3 - add one image/word pair at a time</h3>
    </main>
  );
}
