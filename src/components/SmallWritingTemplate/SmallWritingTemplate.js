import "./SmallWritingTemplate.scss"

function SmallWritingTemplate({wordPairsArray, pageStyle, textStyle}) {
  return (
    <>
    {wordPairsArray.map((single, index)=>{
        return (
            <div style={pageStyle} className="small-writing-template" key={index}>
                <div className="small-writing-template__left">
                    <img src={single.image} alt={single.word} className="small-writing-template__image" />
                </div>
                <div className="small-writing-template__right">
                    <h2 style={textStyle} className="small-writing-template__vocabulary">
                    {single.word}
                    __________________________________________________________________________________{" "}
                    </h2>
                </div>
            </div>
        )
    })}
    
    </>
  )
}

export default SmallWritingTemplate