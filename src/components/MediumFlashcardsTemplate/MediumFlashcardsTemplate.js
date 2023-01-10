import "./MediumFlashcardsTemplate.scss"

function MediumFlashcardsTemplate({wordPairsArray, pageStyle, textStyle}) {
  return (
    <>
    {wordPairsArray.map((single, index)=>{
        return (
            <div style={pageStyle} className="medium-flashcards-template" key={index}>
                <div className="medium-flashcards-template__left">
                    <img src={single.image} alt={single.word} className="medium-flashcards-template__image" />
                </div>
                <div className="medium-flashcards-template__divider"></div>
                <div className="medium-flashcards-template__right">
                    <h2 style={textStyle} className="medium-flashcards-template__vocabulary">{single.word}</h2>
                </div>
            </div>
        )
    })}
    </>
  )
}

export default MediumFlashcardsTemplate