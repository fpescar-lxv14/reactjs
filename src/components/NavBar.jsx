import { NavLink } from "react-router";

export default function NavBar(){
    return (
    <nav>
        <NavLink to="/">GEFA</NavLink>
        <button>&equiv;</button>
        <ul>
            <li><NavLink to="candidates">Candidatos</NavLink></li>
            <li><NavLink to="selection">Seleccion</NavLink></li>
            <li><NavLink to="faqs">Preguntas frecuentes</NavLink></li>
        </ul>
    </nav>
)}