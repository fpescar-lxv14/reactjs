import { useDispatch, useSelector } from "react-redux"
import { addTodo, editTodo, removeTodo, setCurrent } from "../../store/todosSlice"

export default function Todos(){
    const dispatch = useDispatch()
    const {todos, current, filtered} = useSelector(s => s.todos)
    const data = filtered.length ? filtered : todos
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        if (!current){
            data.id = Number(todos[todos.length - 1]?.id) + 1 ?? 1
            data.completed = 0
            dispatch(addTodo(data))
        }
        else {
            dispatch(editTodo({id: current, ...data}))
            dispatch(setCurrent(null))
        }
        e.target.reset();
    }
    const get = (key) => current ? todos.find(item => current === item.id)[key] : ""
    return(
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Titulo</label>
            <input id="title" 
                type="text" 
                name="title" 
                defaultValue={get("title")}
                required={true}/>
            <label htmlFor="description">Descripcion</label>
            <textarea id="description"  
                name="description"
                defaultValue={get("description")}
                required={true}></textarea>
            <button>confirmar</button>
        </form>
        <ul>
            {data?.map(item => <ItemList key={item.id} {...item}/>)}
        </ul>
    </>
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