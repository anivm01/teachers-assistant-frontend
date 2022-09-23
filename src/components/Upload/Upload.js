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
  const [imgFileName, setImgFileName] = useState("");
  const [uploadError, setUploadError] = useState(false);

  const onVocabularyChange = (event) => {
    setTextInput(event.target.value);
  };
  const onImageChange = (event) => {
    setImageURL(URL.createObjectURL(event.target.files[0]));
    setImgFileName(event.target.files[0].name);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!imageURL || !textInput) {
      setUploadError(true);
      return;
    }
    const newContent = {
      image: imageURL,
      word: textInput,
      imageFile: imgFileName,
      id: index,
    };
    setUploadError(false);
    setTemplateContents([...templateContents, newContent]);
    setUploadFields([...uploadFields, uploadFields.length]);
    console.log(imgFileName);
    setImageURL("")
    setImgFileName("")
    setTextInput("")
    event.target.reset()
  };

  return (
    <>
    <form onSubmit={onSubmit} className="upload">
      <label className="upload__image-label">
        Image: <span className="upload__file-name">{imgFileName}</span>
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
        <div className="upload__bottom">
        <label className="upload__text-label">
          Vocabulary:
          <input
            className="upload__text-input"
            type="text"
            name="vocabulary"
            value={textInput || ""}
            onChange={onVocabularyChange}
          />
        </label>
        <h2 className="upload__title">Click the plus button to make your template</h2>  
          <input className="upload__submit" type="submit" />
          {uploadError && (
            <p className="upload__error">
              "You must input both an image and text for these templates"
            </p>
    )}
        </div>
    </form>
    
    </>
  );
}

export default Upload;
