import "./Header.scss"
import taLogo from "../../assets/svg/teachers-assistant-logo.svg"
import { Link, useNavigate } from "react-router-dom"
import LoggedInNav from "../LoggedInNav/LoggedInNav"
import LoggedOutNav from "../LoggedOutNav/LoggedOutNav"

function Header( {isLoggedIn, setIsLoggedIn } ) {
  const  navigate = useNavigate()
  const handleLogOut = () => {
    sessionStorage.setItem("loggedIn", JSON.stringify(false))
    setIsLoggedIn(false)
    navigate("/")
  }
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={taLogo} alt="teacher's assistant website logo" />
        </Link>
        <h1>Teacher's Assistant</h1>
        {isLoggedIn ? <LoggedInNav handleLogOut={handleLogOut}/> : <LoggedOutNav/>}
      </div>
    </header>
  )
}

export default Header