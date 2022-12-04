import './MainNav.scss'
import LoggedInNav from '../LoggedInNav/LoggedInNav'
import LoggedOutNav from '../LoggedOutNav/LoggedOutNav'

function MainNav({setIsLoggedIn, isLoggedIn}) {
  return (
    <nav className="nav">
      {isLoggedIn ? <LoggedInNav setIsLoggedIn={setIsLoggedIn} /> : <LoggedOutNav />}
    </nav>
  )
}

export default MainNav