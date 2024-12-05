import { NavLink } from "react-router"
export default function Nav(){
    return(
    <nav>
        <ul>
            <li><NavLink to="counter">Contador</NavLink></li>
            <li><NavLink to="session">Datos de Usuario</NavLink></li>
            <li><NavLink to="todos">Lista de Tareas</NavLink></li>
        </ul>
    </nav>
)}