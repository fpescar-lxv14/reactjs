import { useTodo } from "./useTodo";
import { Button, FormGroup, Input, InputLabel, TextField } from "@mui/material"
export default function TodoForm() {
    const { get, handleSubmit } = useTodo()
    return (
    <form onSubmit={handleSubmit}>
        <FormGroup>
            <InputLabel htmlFor="title">Titulo</InputLabel>
            <Input id="title"
                name="title"
                defaultValue={get("title")}
                required={true}/>
            <InputLabel htmlFor="description">Descripcion</InputLabel>
            <TextField id="description"
                name="description"
                defaultValue={get("description")}
                required={true}>
            </TextField>
            <Button type="submit">confirmar</Button>
        </FormGroup>
    </form>
)}