import { NavLink } from "react-router-dom"

function LoggedOutNav() {
  return (
    <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/templates">Make a PDF</NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/authentication">Login / Signup</NavLink>
        </li>
        {/* <li className="nav__item">
          <button onClick={handleLogin} className="nav__link"> Login </button> 
          <button onClick={handleSignup} className="nav__link"> Signup</button> 
        </li> */}
      </ul>
  )
}

export default LoggedOutNav