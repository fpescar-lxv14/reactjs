import { NavLink } from "react-router"

export default function Nav() {
    return (
    <nav>
        <ul>
            <li><NavLink to="home">Pagina Principal</NavLink></li>
            <li><NavLink to="login">Iniciar Sesion</NavLink></li>
            <li><NavLink to="signin">Registrarse</NavLink></li>
        </ul>
    </nav>
)}