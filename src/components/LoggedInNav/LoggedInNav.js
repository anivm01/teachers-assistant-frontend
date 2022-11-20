import { NavLink } from "react-router-dom"
import "./LoggedInNav.scss"

function LoggedInNav( {handleLogOut} ) {
  return (
    <div className="header__nav">
        <NavLink className="header__link" to="/account">Your PDFs</NavLink>
        <NavLink className="header__link" to="/templates">Templates</NavLink>
        <button onClick={handleLogOut} className="header__link"> Logout </button>          
    </div>
  )
}

export default LoggedInNav