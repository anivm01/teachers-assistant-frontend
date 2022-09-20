import "./Template1.scss";
import "./Template1-preview.scss"

function Template1({ templateClass, image, word }) {
        return (
          <div className={`${templateClass}`}>
            <div className={`${templateClass}__top`}>
              <img
                src={image}
                alt={word}
                className={`${templateClass}__image`}
              />
            </div>
            <div className={`${templateClass}__divider`}></div>
            <div className={`${templateClass}__bottom`}>
              <h2 className={`${templateClass}__vocabulary`}>{word}</h2>
            </div>
          </div>
        );
}

export default Template1;
