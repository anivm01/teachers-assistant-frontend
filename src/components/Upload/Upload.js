import "./Upload.scss";
import addImage from "../../assets/svg/add-image-icon.svg";
import React, { useState } from "react";

function Upload({
  templateContents,
  setTemplateContents,
  uploadFields,
  setUploadFields,
  index,
}) {
  const [textInput, setTextInput] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imgFileName, setImgFileName] = useState("Choose an image to upload");
  const [uploadError, setUploadError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onVocabularyChange = (event) => {
    setTextInput(event.target.value);
  };
  const onImageChange = (event) => {
    setImageURL(URL.createObjectURL(event.target.files[0]));
    setImgFileName(event.target.files[0].name)
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!imageURL || !textInput) {
      setUploadError(true);
      return;
    }
    if (submitted) {
      return;
    }
    const newContent = {
      image: imageURL,
      word: textInput,
      id: index,
    };
    setUploadError(false);
    setTemplateContents([...templateContents, newContent]);
    setUploadFields([...uploadFields, uploadFields.length]);
    setSubmitted(true);
    console.log(imgFileName)
  };

  const remove = (i) => {
    if (!imageURL || !textInput) {
      return;
    }
    let newUploadFields = [...uploadFields];
    newUploadFields.splice(i, 1);
    setUploadFields(newUploadFields);
    let newTemplateContents = [...templateContents];
    newTemplateContents.splice(i, 1);
    setTemplateContents(newTemplateContents);
    setSubmitted(false);
    setTextInput("");
  };
  return (
    <form onSubmit={onSubmit} className="upload">
      <label className="upload__text-label">
        Add a word or phrase
        <input
          className="upload__text-input"
          type="text"
          name="vocabulary"
          value={textInput || ""}
          onChange={onVocabularyChange}
        />
      </label>
      <label className="upload__image-label">
        {imgFileName}
        <img
          className="upload__custom-image-input"
          src={addImage}
          alt="add new icon"
        />
        <input
          className="upload__image-input"
          type="file"
          name="image"
          onChange={onImageChange}
          accept="image/png, image/jpg, image/gif, image/jpeg"
        />
      </label>
      {!submitted && <input className="upload__submit" type="submit" />
        }
      {submitted && (
        <button type="button" onClick={() => remove(index)}>
          reset
        </button>
      )}
      <p>
        {uploadError
          ? "You must input both an image and text for these templates"
          : ""}
      </p>
    </form>
  );
}

export default Upload;
