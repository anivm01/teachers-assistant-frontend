import "./GameCardsTemplate.scss"

function GameCardsTemplate({wordPairsArray, pageStyle, textStyle}) {
  return (
    <>
    {wordPairsArray.map((single,index)=>{
        return (
            <div style={pageStyle} className="game-cards-template" key={index}>
                <img src={single.image} alt={single.word} className="game-cards-template__image" />
                <p style={textStyle} className="game-cards-template__vocabulary">{single.word}</p>
            </div>
        )
    })}
    </>
  )
}

export default GameCardsTemplate