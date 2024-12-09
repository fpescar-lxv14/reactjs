import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTodo } from "./useTodo";
import { Button, FormGroup, Input, InputLabel, TextField } from "@mui/material"
export default function TodoForm() {
    const { get, handleSubmit } = useTodo()
    const [val, setVal] = useState({title: "", description: ""})
    const { current } = useSelector(s => s.todos)
    useEffect(() => { setVal({
        title: get('title') ?? "",
        description: get('description') ?? ""
    })}, [current])
    return (
    <form onSubmit={handleSubmit}>
        <FormGroup>
            <InputLabel htmlFor="title">Titulo</InputLabel>
            <input id="title"
                name="title"
                defaultValue={val.title}
                required={true}/>
            <InputLabel htmlFor="description">Descripcion</InputLabel>
            <textarea id="description"
                name="description"
                defaultValue={val.description}
                required={true}></textarea>
            <Button type="submit">confirmar</Button>
        </FormGroup>
    </form>
)}