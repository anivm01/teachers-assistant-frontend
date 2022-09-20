import "./Template6.scss";
import "./Template6-preview.scss";

function Template6({ image, word, templateClass }) {
  return (
    <div className={templateClass}>
      <img src={image} alt={word} className={`${templateClass}__image`} />
      <h2 className={`${templateClass}__vocabulary`}>{word}</h2>
    </div>
  );
}

export default Template6;
