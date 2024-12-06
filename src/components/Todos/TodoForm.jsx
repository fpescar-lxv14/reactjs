import { useTodo } from "./useTodo";

export default function TodoForm() {
    const { get, handleSubmit } = useTodo()
    return (
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
)}