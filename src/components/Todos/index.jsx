import { useSelector } from "react-redux"

export default function Todos(){
    const {todos, filtered} = useSelector(s => s.todos)
    const data = filtered.length ? filtered : todos
    return(
    <>
        <form action="">
            
        </form>
        <ul>
            {data?.map(item => <ItemList key={item.id} {...item}/>)}
        </ul>
    </>
)}
const ItemList = ({id,title, description,completed}) =>
    <li id={"todo_"+id}>
        <p style={{backgroundColor: completed ? "#ec3" : "underline"}}>
            <strong>{title}: </strong> {description}
            <button>Editar</button>
            <button>Eliminar</button>
        </p>
    </li>