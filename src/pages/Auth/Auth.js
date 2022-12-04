import { useEffect, useState } from "react";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import "./Auth.scss";

function Auth( { setIsLoggedIn, isNavVisible, setIsNavVisible }) {
  const [newUser, setNewUser] = useState(false)
  useEffect(()=>{
    if(isNavVisible){
      setIsNavVisible(false)
    }
  }, [])
  return (
    <main className="auth">
      <SwitchButton setNewUser={setNewUser}/>
    {newUser ? <Signup setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn} /> }
    </main>
  )
}

export default Auth