import { useContext, useRef } from "react"
import { StateContext } from "../providers/State"

export default function Search() {
    const qRef = useRef(), limitRef = useRef();
    const {setParam, searchResults } = useContext(StateContext);
    const get = (ref) => ref.current.value
    const handleSubmit = (e) => {
        e.preventDefault()
        setParam('q', get(qRef));
        setParam("limit", get(limitRef));
        searchResults()
    }
    return (
    <form onSubmit={handleSubmit}>
        <input ref={qRef}/>
        <select ref={limitRef} defaultValue={20}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
        </select>
        <button>buscar</button>
    </form>
)}