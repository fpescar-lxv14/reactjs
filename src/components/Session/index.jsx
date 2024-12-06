import { Container } from "@mui/material"
import SessionData from "./SessionData"
import SessionForm from "./SessionForm"
export default function Session(){
    return (
    <Container>
        <h2>Datos de Usuario</h2>
        <SessionForm/>
        <SessionData/>
    </Container>
)}