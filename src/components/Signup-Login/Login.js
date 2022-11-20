import { useState } from "react"
import axios from "axios";
import "./Signup-Login.scss"
import { useNavigate } from "react-router-dom";
import API_URL from "../../utils/api"


function Login( {setLoginVisible, setIsLoggedIn, isLoggedIn}) {

  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const redirect = useNavigate()

  const changeEmail = (event) => {
    setEmailInput(event.target.value)
  }

  const changePassword = (event) => {
    setPasswordInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`${API_URL}/users/login`, {
      email: event.target.email.value,
      password: event.target.password.value
    })
    .then((response)=>{
      setIsLoggedIn(true)
      sessionStorage.setItem("authToken", response.data.token)
      sessionStorage.setItem("loggedIn", "true")
      redirect("/account")
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
        {isLoginError && <h2>{errorMessage}</h2>}
    </main>
  )
}

export default Login