import "./Header.scss"
import taLogo from "../../assets/svg/teachers-assistant-logo.svg"
import { Link, NavLink } from "react-router-dom"

function Header( {isLoggedIn, setIsLoggedIn} ) {
  return (
    <header className="header">
        <Link to="/">
        <img className="header__logo" src={taLogo} alt="teacher's assistant website logo" />
        </Link>
        {!isLoggedIn && <div>
          <NavLink className="header__link" to="/login">Login</NavLink>
          <NavLink className="header__link" to="/signup">Signup</NavLink>
        </div>}
        {isLoggedIn && <div>
          <NavLink className="header__link" to="/account">Account</NavLink>
          <NavLink className="header__link" to="/templates">Templates</NavLink>
        </div>}
    </header>
  )
}

export default Header