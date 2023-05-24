"use client";
import { useWordList, useWordListUpdate } from "../context/WordListContext";
import Image from "next/image";
import style from "../styles/WordList.module.scss";
import Link from "next/link";

export default function WordList() {
  const wordList = useWordList();
  const updateWordList = useWordListUpdate();

  console.log(wordList);

  return (
    <div className={style.container}>
      <label className={style.button}>
        {wordList.length > 0 ? "Add More Images" : "Add Images"}
        <input
          className={style.img_input}
          type="file"
          name="image"
          onChange={(e) => updateWordList.addImagesToList(e)}
          accept="image/png, image/jpg, image/gif, image/jpeg"
          multiple
        />
      </label>
      <div className={style.gallery}>
        {wordList.map((single, index) => {
          return (
            <form key={index} className={style.preview}>
              <button
                className={style.remove}
                type="button"
                onClick={() => updateWordList.removeFromList(index)}
              >
                Remove
              </button>
              <div className={style.image_box}>
                <Image
                  className={style.image}
                  src={single.src}
                  alt={`upload number ${index + 1}`}
                  fill
                />
              </div>
              <input
                className={style.word}
                type="text"
                value={wordList[index].word || ""}
                onChange={(e) =>
                  updateWordList.addToWordList(e.target.value, index)
                }
              />
            </form>
          );
        })}
      </div>
      {wordList.length > 0 && (
        <>
          <p className={style.instructions}>
            Once you're happy with your word list proceed to choose a template
          </p>
          <Link className={style.next} href="/choose-a-template">
            Choose A Template
          </Link>
        </>
      )}
    </div>
  );
}
