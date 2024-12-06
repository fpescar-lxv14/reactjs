import TodoForm from "./TodoForm"
import TodoFilter from "./TodoFilter"
import TodoList from "./TodoList"
import { Container } from "@mui/material"

export default function Todos(){
    return(
    <Container>
        <TodoForm/>
        <TodoFilter/>
        <TodoList/>
    </Container>
)}
