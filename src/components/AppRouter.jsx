import { Routes, Route } from "react-router";
import Counter from "./Counter"
import Session from "./Session/"
import Todos from "./Todos/"

export default function AppRouter(){
    return(
    <Routes>
        <Route path="counter" element={<Counter/>} />
        <Route path="session" element={<Session/>} />
        <Route path="todos" element={<Todos/>} />
        <Route path="*" element={<h2>Bienvenido al Sitio</h2>}/>
    </Routes>
)}