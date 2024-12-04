import { BrowserRouter, NavLink, Routes, Route } from "react-router"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"
import NotFound from "./components/NotFound.jsx"
function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* Links de Navegacion (api History) */}
        <NavLink to="/home">Inicio</NavLink>
        <NavLink to="/gallery">Galeria</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </nav>
      {/* Switch (renderizado condicional) */}
      <Routes>
        {/* Evaluaciones de path y devuelve componente o contenido */}
        <Route path="home" element={<Home/>} />
        <Route path="gallery" element={<Gallery/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App