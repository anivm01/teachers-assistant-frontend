import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import API_URL from "../../utils/api"


function Login( { setIsLoggedIn }) {

  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate()

  const changeEmail = (event) => {
    setEmailInput(event.target.value)
  }

  const changePassword = (event) => {
    setPasswordInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target.email.value || !event.target.password.value) {
      setIsLoginError(true)
      setErrorMessage("Make sure to fill out all the fields")
      return
    }

    const userInfo = {
      email: event.target.email.value,
      password: event.target.password.value
    }

    const login = async () => {
      try {
          const response = await axios.post(`${API_URL}/users/login`, userInfo);
          if (!response.data) {
            setIsLoginError(true)
            setErrorMessage("Something went wrong. Check your email and password and try again!")
            return
          }
          setIsLoggedIn(true)
          sessionStorage.setItem("authToken", response.data.token)
          sessionStorage.setItem("loggedIn", "true")
          navigate("/account")
      } catch (error) {
        setIsLoginError(true)
        if(!error.response.data.message){
          setErrorMessage("Something went wrong. Try again later")
        }
        setErrorMessage(error.response.data.message)
      }
    };
    login();
  }
  
  return (
    <form onSubmit={handleSubmit} className="auth__form" >
    <h1 className="auth__title">Login</h1>
      <label className="auth__label" htmlFor="email">
        Email
      </label>
      <input className={`auth__input ${emailInput ? "auth__input--filled" : ""}`} type="email" name="email" onChange={changeEmail} value={emailInput}/>
      <label className="auth__label" htmlFor="password">
        Password
      </label>
      <input className={`auth__input ${passwordInput ? "auth__input--filled" : ""}`} type="password" name="password" onChange={changePassword} value={passwordInput}/>
      {isLoginError && <h2 className="auth__error">{errorMessage}</h2>}
      <input type="submit" className="auth__submit" name="submit"/>
    </form>
  )
}

export default Login