import { BottomNavigation, BottomNavigationAction, List } from "@mui/material"
import { AlarmOn, Checklist, Pages, Person } from "@mui/icons-material"
import { NavLink } from "react-router"
export default function Nav(){
    return(
    <BottomNavigation>
        <NavLink to="counter">
            <BottomNavigationAction label="contador" icon={<AlarmOn/>} showLabel/>
        </NavLink>
        <NavLink to="session">
            <BottomNavigationAction label="datos de usuario" icon={<Person/>} showLabel/>
        </NavLink>
        <NavLink to="todos">
            <BottomNavigationAction label="lista de tareas" icon={<Checklist/>} showLabel/>
        </NavLink>
        <NavLink to={"posts"}>
            <BottomNavigationAction label="publicaciones" icon={<Pages/>} showLabel/>
        </NavLink>
    </BottomNavigation>
)}