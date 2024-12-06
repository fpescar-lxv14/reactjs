import { useDispatch } from "react-redux"
import { filterTodos, resetFilter } from "../../store/todosSlice"

export default function TodoFilter() {
    const dispatch = useDispatch()
    const showAll = () => dispatch(resetFilter())
    return (
    <div>
        <input id="all" onChange={showAll} type="radio" name="filtered" />
        <label htmlFor="all">TODAS</label>

        <input id="completed" onChange={() => dispatch(filterTodos(true))} type="radio" name="filtered" />
        <label htmlFor="completed">COMPLETADAS</label>
        
        <input id="pending" onChange={() => dispatch(filterTodos(false))} type="radio" name="filtered"/>
        <label htmlFor="pending">INCOMPLETAS</label>
    </div>
)}
