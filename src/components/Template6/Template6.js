import "./Template6.scss";
import "./Template6-preview.scss";

function Template6({ image, word, templateClass }) {
  return (
    <div className={templateClass}>
      <img src={image} alt={word} className={`${templateClass}__image`} />
      <p className={`${templateClass}__vocabulary`}>{word}</p>
    </div>
  );
}

export default Template6;
