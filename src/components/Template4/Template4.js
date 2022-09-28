import "./Template4.scss";
import "./Template4-preview.scss";

function Template4( {word, image, templateClass} ) {
  return (
    <div className={templateClass}>
            <div className={`${templateClass}__left`}>
              <img
                src={image}
                alt={word}
                className={`${templateClass}__image`}
              />
            </div>
            <div className={`${templateClass}__right`}>
              <p className={`${templateClass}__vocabulary`}>
                {word}
              </p>
              <p className={`${templateClass}__vocabulary`}>
                ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
              </p>
            </div>
          </div>
  )
}

export default Template4