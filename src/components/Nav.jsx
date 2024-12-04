import { NavLink } from "react-router"

export default function Nav({menu}) {
    return (
    <nav className="navbar navbar-dark navbar-expand bg-dark p-2">
        <a href="/home" className="navbar-brand">FPR</a>
        <ul className="navbar-nav">
        { menu?.map(({link, text}, i) => 
            <li key={i}><NavLink className='nav-link' to={link}>{text}</NavLink></li>
        )}
        </ul>
    </nav>
)}