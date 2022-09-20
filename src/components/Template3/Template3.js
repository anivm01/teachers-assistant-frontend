import "./Template3.scss";
import "./Template3-preview.scss";

function Template3 ( {word, image, templateClass} ) {
  return (
    <div className={templateClass}>
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
  )
}

export default Template3