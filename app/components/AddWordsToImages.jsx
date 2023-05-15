import { useEffect, useState } from "react";
import { useWordList, useWordListUpdate } from "../context/WordListContext";

export default function AddWordsToImages() {
  const wordList = useWordList();
  const updateWordList = useWordListUpdate();
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    const images = [];
    for (let i = 0; i < wordList.length; i++) {
      const file = wordList[i].file;
      //use File Reader object to generate a preview of the files that have just been uploaded
      const reader = new FileReader();

      reader.onload = (e) => {
        images.push(e.target.result);

        if (images.length === wordList.length) {
          setPreviewImages(images);
        }
      };
      reader.readAsDataURL(file);
    }
  }, [wordList]);
  console.log(wordList);
  return (
    <div>
      <h2>Add a word or phrase for each image</h2>
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
    </div>
  );
}
