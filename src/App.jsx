import { BrowserRouter, NavLink, Routes, Route } from "react-router"
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
        <Route path="home" element={<h2>Estas en Casa</h2>} />
        <Route path="gallery" element={<h2>Bienvenido a la Galeria</h2>} />
        <Route path="contact" element={<h2>Contactanos cuando Quieras</h2>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App