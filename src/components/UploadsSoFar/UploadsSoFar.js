import "./UploadsSoFar.scss"
import { Carousel } from '@trendyol-js/react-carousel';


function UploadsSoFar( { templateContents, setTemplateContents } ) {
    const remove = (i) => {
        let newTemplateContents = [...templateContents];
        newTemplateContents.splice(i, 1);
        setTemplateContents(newTemplateContents);
      };
  return (
    <div className="so-far">
    <h2 className="so-far__title"> Your current list:</h2>
        <ul className="so-far__list">
          {templateContents.map((single, index) => {
            return (
              <li className="so-far__item" key={index}>
                <button
                  type="button"
                  className="so-far__remove"
                  onClick={() => remove(index)}
                ></button>
                <div className="so-far__card">  
                  <img className="so-far__image" src={single.image} alt={single.imageFile}/>
                  <h3 className="so-far__record">{single.word}</h3>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
  )
}

export default UploadsSoFar