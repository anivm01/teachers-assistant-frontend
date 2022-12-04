import "./SwitchButton.scss"

function SwitchButton({setNewUser}) {
  return (
    <div className="switch-button">
        <input onChange={()=>{setNewUser(current => !current)}} className="switch-button__checkbox" type="checkbox"></input>
        <label className="switch-button__label" htmlFor=""><span className="switch-button__span">Login</span></label>
    </div>
  )
}

export default SwitchButton