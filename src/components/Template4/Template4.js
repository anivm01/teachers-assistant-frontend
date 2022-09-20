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
              <h2 className={`${templateClass}__vocabulary`}>
                {word}
              </h2>
              <h2 className={`${templateClass}__vocabulary`}>
                ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
              </h2>
            </div>
          </div>
  )
}

export default Template4