import { BrowserRouter, Routes, Route, NavLink } from "react-router"

import Home from "./components/Home"
import Login from "./components/Login"
import Signin from "./components/Signin"

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li><NavLink to="home">Pagina Principal</NavLink></li>
        <li><NavLink to="login">Iniciar Sesion</NavLink></li>
        <li><NavLink to="signin">Registrarse</NavLink></li>
      </ul>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/*" element={
          <header>
            <h2>Ruta no encontrada</h2>
            <p>Lo sentimos, pero nunca antes habia ocurrido algo asi</p>
          </header>
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App