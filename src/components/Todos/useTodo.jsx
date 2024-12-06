import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo, setCurrent } from "../../store/todosSlice";

export function useTodo () {
    const dispatch = useDispatch()
    const {todos, current } = useSelector(s => s.todos)
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        if (!current){
            data.id = Number(todos[todos.length - 1]?.id) + 1 || 1
            data.completed = 0
            dispatch(addTodo(data))
        }
        else {
            dispatch(editTodo({id: current, ...data}))
            dispatch(setCurrent(null))
        }
        e.target.reset();
    }
    const get = (key) => current ? todos.find(item => current === item.id)[key] : undefined
    return { handleSubmit, get }
}