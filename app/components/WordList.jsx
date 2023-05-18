"use client";
import { useEffect, useState } from "react";
import { useWordList, useWordListUpdate } from "../context/WordListContext";
import Image from "next/image";
import style from "../styles/WordList.module.scss";
import Link from "next/link";

export default function WordList() {
  const wordList = useWordList();
  const updateWordList = useWordListUpdate();
  const [previewImages, setPreviewImages] = useState([]);
  const [previewWords, setPreviewWords] = useState([]);

  useEffect(() => {
    const images = [];
    const words = [];
    for (let i = 0; i < wordList.length; i++) {
      const word = wordList[i].word;
      words.push(word);
      const file = wordList[i].file;
      //use File Reader object to generate a preview of the files that have just been uploaded
      const reader = new FileReader();

      reader.onload = (e) => {
        images.push(e.target.result);

        if (images.length === wordList.length) {
          setPreviewImages(images);
          setPreviewWords(words);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [wordList]);

  const addWords = (word, index) => {
    setPreviewWords((prevWords) => {
      const updatedWords = [...prevWords];
      updatedWords[index] = word;
      return updatedWords;
    });
  };

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
        {previewImages.map((single, index) => {
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
                  src={single}
                  alt={`upload number ${index + 1}`}
                  fill
                />
              </div>
              <input
                className={style.word}
                type="text"
                value={previewWords[index] || " "}
                onChange={(e) => addWords(e.target.value, index)}
                onBlur={(e) =>
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
