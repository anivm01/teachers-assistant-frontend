import "./LargeWritingTemplate.scss"

function LargeWritingTemplate({wordPairsArray, pageStyle, textStyle}) {
  return (
    <>
    {wordPairsArray.map((single,index)=>{
        return (
            <div style={pageStyle} className="large-writing-template" key={index}>
                <div className="large-writing-template__left">
                    <img
                    src={single.image}
                    alt={single.word}
                    className="large-writing-template__image"
                    />
                </div>
                <div className="large-writing-template__right">
                    <p style={textStyle} className="large-writing-template__vocabulary">
                    {single.word}
                    </p>
                    <p style={textStyle} className="large-writing-template__vocabulary">
                    ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
                    </p>
                </div>
            </div>
        )
    })}
    
    </>
  )
}

export default LargeWritingTemplate