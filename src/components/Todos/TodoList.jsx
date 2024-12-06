import { useSelector, useDispatch } from "react-redux";
import { setCurrent, removeTodo, editTodo } from "../../store/todosSlice";
import { useId } from "react";

export default function TodoList() {
    const { todos, filtered } = useSelector(s => s.todos)
    const data = filtered.length ? filtered : todos
    return (
    <ul>{ 
        data?.map(item => <ItemList key={item.id} {...item}/>
    )}
    </ul>
)}
const ItemList = ({id,title, description,completed}) =>{
    const dispatch = useDispatch()
    const selfId = useId()
    return (
    <li id={"todo_"+id}>
        <p style={{backgroundColor: completed ? "#ec3" : "#eee"}}>
            <input id={selfId} type="checkbox" onChange={() => dispatch(editTodo({id, completed: !completed}))} checked={completed}/>
            <label htmlFor={selfId}>
                <strong>{title}: </strong> {description}
            </label>
            <button onClick={()=>dispatch(setCurrent(id))}>Editar</button>
            <button onClick={()=>dispatch(removeTodo(id))}>Eliminar</button>
            <hr />
            { completed ? "finalizada": "pendiente" }
        </p>
    </li>
)}