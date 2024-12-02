import { NavLink } from "react-router"

export default function Nav() {
    return (
    <nav className="navbar navbar-dark navbar-expand bg-dark p-2">
        <a href="/home" className="navbar-brand">FPR</a>
        <ul className="navbar-nav">
            <li><NavLink className={'nav-link'} to="home">Pagina Principal</NavLink></li>
            <li><NavLink className={'nav-link'} to="login">Iniciar Sesion</NavLink></li>
            <li><NavLink className={'nav-link'} to="signin">Registrarse</NavLink></li>
        </ul>
    </nav>
)}