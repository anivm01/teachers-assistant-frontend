import "./SmallFlashcardsTemplate.scss"

function SmallFlashcardsTemplate({wordPairsArray, pageStyle, textStyle}) {
  return (
    <>
    {wordPairsArray.map((single, index)=>{
      return (
        <div style={pageStyle} className="small-flashcards-template" key={index}>
          <div className="small-flashcards-template__top">
          <img
              src={single.image}
              alt={single.word}
              className="small-flashcards-template__image"
          />
          </div>
          <div className="small-flashcards-template__divider"></div>
          <div className="small-flashcards-template__bottom">
            <h2 style={textStyle} className="small-flashcards-template__vocabulary">{single.word}</h2>
          </div>
        </div>
      )
    })}
    </>
  )
}

export default SmallFlashcardsTemplate