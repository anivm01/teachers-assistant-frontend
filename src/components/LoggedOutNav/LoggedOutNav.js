import { NavLink } from "react-router-dom"
import "./LoggedOutNav.scss"

function LoggedOutNav() {
  return (
    <div className="header__nav">
        <NavLink className="header__link" to="/login">Login</NavLink>
        <NavLink className="header__link" to="/signup">Signup</NavLink>
    </div>
  )
}

export default LoggedOutNav