import { useState } from "react"
import axios from "axios";
import "./Signup-Login.scss"
import closeIcon from "../../assets/svg/close-icon.svg";
import { Navigate } from "react-router-dom";


function Login( {setLoginVisible, setIsLoggedIn, isLoggedIn}) {
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const changeEmail = (event) => {
    setEmailInput(event.target.value)
  }

  const changePassword = (event) => {
    setPasswordInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://api.teachersassistant.site/users/login", {
      email: event.target.email.value,
      password: event.target.password.value
    })
    .then((response)=>{
      setIsLoggedIn(true)
      sessionStorage.setItem("authToken", response.data.token)
    })
    .catch((error)=>{
      setIsLoginError(true)
      setErrorMessage(error)
    })

  }
  
  return (
    <main className="auth">
        <form onSubmit={handleSubmit} className="auth__form" >
        <h1 className="auth__title">Login</h1>
          <label className="auth__label" htmlFor="email">
            Email
            <input className="auth__input" type="email" name="email" onChange={changeEmail} value={emailInput}/>
          </label>
          <label className="auth__label" htmlFor="password">
            Password
            <input className="auth__input" type="password" name="password" onChange={changePassword} value={passwordInput}/>
          </label>
            <input type="submit" className="auth__submit" name="submit"/>
        </form>
        {isLoggedIn && <Navigate to="/account"/>}
    </main>
  )
}

export default Login