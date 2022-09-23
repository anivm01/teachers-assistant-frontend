import "./Header.scss"
import taLogo from "../../assets/svg/teachers-assistant-logo.svg"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
        <Link to="/">
        <img className="header__logo" src={taLogo} alt="teacher's assistant website logo" />
        </Link>
    </header>
  )
}

export default Header