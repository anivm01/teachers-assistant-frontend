import "./UploadsSoFar.scss"

function UploadsSoFar( { templateContents, setTemplateContents } ) {
    const remove = (i) => {
        let newTemplateContents = [...templateContents];
        newTemplateContents.splice(i, 1);
        setTemplateContents(newTemplateContents);
      };
  return (
    <div className="so-far">
    <h2 className="so-far__title"> Uploads so far:</h2>
        <ul className="so-far__list">
          {templateContents.map((single, index) => {
            return (
              <li className="so-far__item" key={index}>
                <span className="so-far__record">{single.word}</span>
                <span className="so-far__record">{single.imageFile}</span>
                <button
                  type="button"
                  className="so-far__remove"
                  onClick={() => remove(index)}
                ></button>
              </li>
            );
          })}
        </ul>
      </div>
  )
}

export default UploadsSoFar