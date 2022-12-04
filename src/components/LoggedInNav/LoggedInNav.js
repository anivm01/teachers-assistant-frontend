import { NavLink, useNavigate } from "react-router-dom"

function LoggedInNav( {setIsLoggedIn} ) {
  const  navigate = useNavigate()
  const handleLogOut = () => {
    sessionStorage.setItem("loggedIn", JSON.stringify(false))
    setIsLoggedIn(false)
    navigate("/")
  }
  return (
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/account">Saved PDFs</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/templates">New PDF</NavLink>
        </li>
        <li className="nav__item">
          <button onClick={handleLogOut} className="nav__link">Logout</button>  
        </li>
      </ul>
  )
}

export default LoggedInNav