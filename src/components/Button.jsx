import { useState } from "react"

function Button(props){
    const [clicked, setClicked] = useState(false)
    const handleClick = () => setClicked(!clicked) 
    return (
        <button onClick={handleClick}>
            {props.text}: {clicked ? "+1" : "0"}
        </button>
)}
export default Button