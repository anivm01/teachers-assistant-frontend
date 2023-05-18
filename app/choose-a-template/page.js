"use client";
import { useWordList } from "../context/WordListContext";
import style from "../styles/page.module.scss";
export default function ChooseTemplate() {
  const wordList = useWordList();
  console.log(wordList);
  return <main className={style.main}></main>;
}
