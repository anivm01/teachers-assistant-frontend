"use client";
import { useEffect, useState } from "react";
import { useWordList, useWordListUpdate } from "../context/WordListContext";
import Image from "next/image";
import style from "../styles/AddMultipleImages.module.scss";
import Link from "next/link";

export default function AddMultipleImages() {
  const wordList = useWordList();
  const updateWordList = useWordListUpdate();
  const [previewImages, setPreviewImages] = useState([]);

  const addImages = (event) => {
    //collect uploaded files
    const files = event.target.files;

    //store uploaded files into context
    const uploads = [];
    for (let file of files) {
      const upload = {
        file: file,
        file_name: file.name,
      };
      uploads.push(upload);
    }
    const update = [...wordList, ...uploads];
    updateWordList(update);

    //generate preivews of the files stored in the context
    const images = [];
    for (let i = 0; i < update.length; i++) {
      const file = update[i].file;

      //use File Reader object to generate a preview of the files that have just been uploaded
      const reader = new FileReader();

      reader.onload = (e) => {
        images.push(e.target.result);

        if (images.length === update.length) {
          setPreviewImages(images);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index) => {
    const words = [...wordList];
    words.splice(index, 1);
    updateWordList(words);

    const images = [];

    for (let i = 0; i < words.length; i++) {
      const file = words[i].file;

      //use File Reader object to generate a preview of the files that have just been uploaded
      const reader = new FileReader();

      reader.onload = (e) => {
        images.push(e.target.result);

        if (images.length === words.length) {
          setPreviewImages(images);
        }
      };

      reader.readAsDataURL(file);
    }
  };
  console.log(wordList);
  return (
    <div className={style.container}>
      <label className={style.button}>
        {wordList.length > 0 ? "Add More Images" : "Add Images"}
        <input
          className={style.img_input}
          type="file"
          name="image"
          onChange={addImages}
          accept="image/png, image/jpg, image/gif, image/jpeg"
          multiple
        />
      </label>

      <div className={style.gallery}>
        {previewImages.map((single, index) => {
          return (
            <div key={index} className={style.preview}>
              <div className={style.image_box}>
                <Image
                  className={style.image}
                  src={single}
                  alt={`upload number ${index + 1}`}
                  fill
                />
              </div>
              <button
                className={style.remove}
                type="button"
                onClick={() => removeImage(index)}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      {wordList.length > 0 && (
        <div className={style.next}>
          <p className={style.instructions}>
            If you're happy with your choice of images proceed to the next step
          </p>
          <Link className={style.button} href="/add-images/add-words">
            Next Step
          </Link>
          <p>
            Don't worry it is possible to add and remove images later as well
          </p>
        </div>
      )}
    </div>
  );
}
