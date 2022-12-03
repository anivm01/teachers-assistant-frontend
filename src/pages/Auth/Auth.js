import Login from "../../components/Signup-Login/Login";
import Signup from "../../components/Signup-Login/Signup";
import "./Auth.scss";

function Auth( { newUser, setIsLoggedIn }) {
  return (
    <>
    {newUser ? <Signup /> : <Login setIsLoggedIn={setIsLoggedIn} /> }
    </>
  )
}

export default Auth