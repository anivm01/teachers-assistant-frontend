import "./SinglePage.scss"

function SinglePage({children, style}) {

  return (
    <div style={style} className="single-page">
        {children}
    </div>
  )
}

export default SinglePage