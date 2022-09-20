import "./Template2.scss";
import "./Template2-preview.scss";

function Template2({ image, word, templateClass }) {
  return (
    <div className={templateClass}>
      <div className={`${templateClass}__left`}>
        <img src={image} alt={word} className={`${templateClass}__image`} />
      </div>
      <div className={`${templateClass}__divider`}></div>
      <div className={`${templateClass}__right`}>
        <h2 className={`${templateClass}__vocabulary`}>{word}</h2>
      </div>
    </div>
  );
}

export default Template2;
