import { useState } from "react"
import axios from "axios";
import "./Signup-Login.scss"
import closeIcon from "../../assets/svg/close-icon.svg";
import { Navigate } from "react-router-dom";


function Signup( {setSignupVisible, setIsLoggedIn, isLoggedIn}) {
  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [isSignedUp, setIsSignedUp] = useState(false);


  const changeName = (event) => {
    setNameInput(event.target.value)
  }

  const changeEmail = (event) => {
    setEmailInput(event.target.value)
  }

  const changePassword = (event) => {
    setPasswordInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/users/signup", {
      email: event.target.email.value,
      name: event.target.name.value,
      password: event.target.password.value
    })
    .then(()=>{
      setIsSignedUp(true)
      console.log("signed up")
      setIsSignedUp(true)
    })
    .catch(error => {
      console.log(error)
    })
  }

  if (isSignedUp) {
    return <Navigate to="/login" />
  }
  
  return (
    <main className="auth">
        <form onSubmit={handleSubmit} className="auth__form" >
        <h1 className="auth__title">Sign Up</h1>
          <label className="auth__label" htmlFor="name">
            Name
            <input className="auth__input" type="text" name="name" onChange={changeName} value={nameInput}/>
          </label>
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
    </main>
  )
}

export default Signup