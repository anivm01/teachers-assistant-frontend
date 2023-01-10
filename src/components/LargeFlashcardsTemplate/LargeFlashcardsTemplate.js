import SinglePage from "../SinglePage/SinglePage"
import "./LargeFlashcardsTemplate.scss"

function LargeFlashcardsTemplate({wordPairsArray, pageStyle, textStyle}) {
  return (
    <>
        {wordPairsArray.map((single, index)=>{
            return (
                <div style={pageStyle} className="large-flashcards" key={index}>
                <div className="large-flashcards__top">
                    <img
                        src={single.image}
                        alt={single.word}
                        className="large-flashcards__image"
                    />
                </div>
                <div className="large-flashcards__bottom">
                    <h2 style={textStyle} className="large-flashcards__vocabulary">{single.word}</h2>
                </div>
            </div>
            )
        })} 
    </>
  )
}

export default LargeFlashcardsTemplate