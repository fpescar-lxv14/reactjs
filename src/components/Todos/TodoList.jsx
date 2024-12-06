import { useSelector, useDispatch } from "react-redux";
import { setCurrent, removeTodo, editTodo } from "../../store/todosSlice";
import { Card, CardContent, CardActions, Button, Checkbox, FormControlLabel, Typography, Container } from "@mui/material";

export default function TodoList() {
    const { todos, filtered } = useSelector(s => s.todos)
    const data = filtered.length ? filtered : todos
    return (
    <Container sx={{display:"grid", gap:"2rem"}}>
        { data?.map(item => <ItemList key={item.id} {...item}/> )}
    </Container>
)}
const ItemList = ({id,title, description,completed}) =>{
    const dispatch = useDispatch()
    return (
    <Card id={"todo_"+id} sx={{backgroundColor: completed && "#ccc" }}>
        <CardContent>
            <FormControlLabel control={
                <Checkbox type="checkbox" onChange={() => dispatch(editTodo({id, completed: !completed}))} checked={completed}/> }
            label={ <> <Typography variant="h6">{title}:</Typography>  <Typography variant="body">{description}</Typography></> }/>
        </CardContent>
        <CardActions sx={{justifyContent:"end"}}>
            <Button color="primary" onClick={()=>dispatch(setCurrent(id))}>Editar</Button>
            <Button color="error" onClick={()=>dispatch(removeTodo(id))}>Eliminar</Button>
            <Typography variant="subtitle2">
                { completed ? "FINALIZADA": "PENDIENTE" }
            </Typography>
        </CardActions>
    </Card>
)}