import { useSelector, useDispatch } from "react-redux";
import { setCurrent, removeTodo } from "../../store/todosSlice";

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
    return (
    <li id={"todo_"+id}>
        <p style={{backgroundColor: completed ? "#ec3" : "underline"}}>
            <strong>{title}: </strong> {description}
            <button onClick={()=>dispatch(setCurrent(id))}>Editar</button>
            <button onClick={()=>dispatch(removeTodo(id))}>Eliminar</button>
        </p>
    </li>
)}