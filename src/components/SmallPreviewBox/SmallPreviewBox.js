import "./SmallPreviewBox.scss"


function SmallPreviewBox({title, buttonFunction, cta, children}) {
  return (
    <div className="small-preview-box">
    <h3 className="small-preview-box__description">{title}</h3>
    <div className="small-preview-box__blur small-preview-box__blur--top"></div>
    <div className="small-preview-box__option">
        {children}
    </div>
    <div className="small-preview-box__blur small-preview-box__blur--bottom"></div>
    <button className="small-preview-box__button" onClick={buttonFunction}>
        {cta}
    </button>
    </div>
  )
}

export default SmallPreviewBox