import { useState } from "react"
import axios from "axios";
import "./Signup-Login.scss"
import { useNavigate } from "react-router-dom";
import API_URL from "../../utils/api"



function Signup() {
  
  const navigate = useNavigate();
  const [isSignupError, setIsSignupError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [signupInputs, setSignupInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleSignupInputChange = (event) => {
    const { name, value } = event.target;
    setSignupInputs({
      ...signupInputs,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target.name.value || !event.target.email.value || !event.target.password.value) {
      setIsSignupError(true)
      setErrorMessage("Make sure to fill out all the fields")
      return
    }
    
    const userInfo = {
      email: event.target.email.value,
      name: event.target.name.value,
      password: event.target.password.value
    }

    const signUp = async () => {
      try {
        const response = await axios.post(`${API_URL}/users/signup`, userInfo);
        if (!response.data) {
          setIsSignupError(true)
          setErrorMessage("Something went wrong. Try again later!")
          return
        } 
        navigate("/login")
      } catch (error) {
        setIsSignupError(true)
        if(!error.response.data.message){
          setErrorMessage("Something went wrong. Try again later")
        }
        setErrorMessage(error.response.data.message)
      }
    };
    signUp();
  }
  
  return (
    <main className="auth">
        <form onSubmit={handleSubmit}  className="auth__form" >
        <h1 className="auth__title">Sign Up</h1>
          <label className="auth__label" htmlFor="name">
            Name
          </label>
          <input className="auth__input" type="text" name="name" onChange={handleSignupInputChange} value={signupInputs.name}/>
          <label className="auth__label" htmlFor="email">
            Email
          </label>
          <input className="auth__input" type="email" name="email" onChange={handleSignupInputChange} value={signupInputs.email}/>
          <label className="auth__label" htmlFor="password">
            Password
          </label>
          <input className="auth__input" type="password" name="password" onChange={handleSignupInputChange} value={signupInputs.password}/>
          {isSignupError && <h2 className="auth__error">{errorMessage}</h2>}
          <input type="submit" className="auth__submit" name="submit"/>
        </form>
    </main>
  )
}

export default Signup