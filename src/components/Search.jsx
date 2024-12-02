import { useContext, useRef } from "react"
import { ThemeContext } from "../providers/Theme";
import { StateContext } from "../providers/State"
import Button from "./Button";

export default function Search() {
    const qRef = useRef(), limitRef = useRef();
    const { getStyle } = useContext(ThemeContext)
    const {setParam, searchResults } = useContext(StateContext);
    const get = (ref) => ref.current.value
    const handleSubmit = (e) => {
        e.preventDefault()
        if (qRef.current.value.length > 2){
            setParam('q', get(qRef));
            setParam("limit", get(limitRef));
            searchResults()
            qRef.current.value = ""
            qRef.current.focus()
        }
    }
    return (
    <form onSubmit={handleSubmit}>
        <input style={getStyle()} ref={qRef}/>
        <select style={getStyle()} ref={limitRef} defaultValue={20}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
        </select>
        <Button text="buscar"/>
    </form>
)}