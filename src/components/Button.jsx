import { useContext } from "react"
import { ThemeContext } from "../providers/Theme"

export default function Button({text, ...props}) {
    const { getStyle } = useContext(ThemeContext)
return (
    <button style={getStyle()} className="button" {...props}>
        {text}
    </button>
)}