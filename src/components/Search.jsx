import { useContext } from "react"
import { StateContext } from "../providers/State"

export default function Search() {
    const { setParam, searchResults } = useContext(StateContext)
return (
    <>
        <input type="text" onInput={(e) => setParam("q", e.target.value)}/>
        <button onClick={searchResults}>buscar</button>
    </>
)}
