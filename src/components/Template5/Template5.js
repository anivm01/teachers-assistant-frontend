import "./Template5.scss";
import "./Template5-preview.scss";

function Template5({ image, word, twoLines, templateClass }) {
  return (
    <div className={templateClass}>
      <div className={`${templateClass}__left`}>
        <img src={image} alt={word} className={`${templateClass}__image`} />
      </div>
      <div className={`${templateClass}__right`}>
        <h2 className={`${templateClass}__vocabulary`}>
          {word}
          __________________________________________________________________________________{" "}
        </h2>
        {twoLines && (
          <h2 className={`${templateClass}__vocabulary`}>
            __________________________________________________________________________________{" "}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Template5;
