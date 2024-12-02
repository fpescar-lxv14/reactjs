## React Router

Biblioteca estándar para el __manejo de rutas__ en aplicaciones React. `react-router` permite definir y gestionar rutas de manera declarativa, haciendo que la navegación en la aplicación sea fluida y eficiente.

`react-router-dom` es la versión diseñada específicamente para _aplicaciones web_, proporcionando componentes adicionales para manejar la navegación y la gestión de rutas en el entorno del navegador.

### Tabla de Contenidos
* [Instalación](#instalación)
* [Componentes](#componentes)
    * BrowserRouter
    * Routes
    * Route
    * Link
    * NavLink
    * useParams
    * useHistory
    * useNavigate
    * useLocation
* [Configuracion](#configuracion)
    * Rutas Anidadas
    * Rutas Dinamicas
    * Rutas Protegidas
    * Redirecciones

### Instalación

Para comenzar a usar `react-router-dom`, debemos instalar la biblioteca utilizando npm o yarn:

```bash
npm install react-router-dom
yarn add react-router-dom
```

### Componentes

* __BrowserRouter__ Contenedor principal que envuelve tu aplicación React para habilitar la funcionalidad de enrutamiento. Utiliza la API de historial del navegador para mantener tu UI en sincronía con la URL.
    ```jsx
    import { BrowserRouter as Router } from 'react-router-dom';
    function App() {
    return (
        <Router>
        {/* Componentes de tu aplicación */}
        </Router>
    )}
    ```
* __Routes__: `Routes` es el contenedor para los componentes `Route`, los cuales definen las rutas específicas dentro de tu aplicación.
* __Route__: Cada `Route` está asociada a un componente que se renderiza cuando la URL coincide con la ruta especificada.
    ```jsx
    import { Routes, Route } from 'react-router-dom';
    function App() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    )}
    ```
* __Link__: Componentes que permiten la navegación entre rutas sin necesidad de recargar la página.
* __NavLink__: similar a `Link`, pero permite agregar estilos activos automáticamente cuando la ruta coincide.
    ```jsx
    import { Link, NavLink } from 'react-router-dom';
    function Navigation() {
    return (
    <nav>
        <Link to="/">Home</Link>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
    </nav>
    )}
    ```
* __useParams__: Hook que permite acceder a los parámetros dinámicos de la URL, lo cual es útil para rutas que necesitan datos específicos como un ID.
    ```jsx
    import { useParams } from 'react-router-dom';
    function UserProfile() {
        const { userId } = useParams();
        return <div>User ID: {userId}</div>;
    }
    ```
* __useHistory__: Hook de versiones anteriores de React Router, reemplazado por `useNavigate` en versiones más recientes. 
* __useNavigate__: Este Hook se utiliza para programáticamente navegar entre rutas o manipular el historial de navegación.
    ```jsx
    import { useNavigate } from 'react-router-dom';
    function NavigateButton() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate('/about')}>
        Go to About Page
        </button>
    )}
    ```
* __useLocation__: Hook que proporciona información sobre la ubicación actual, como la ruta, el estado y la clave de navegación. Es útil para obtener detalles adicionales sobre la URL activa.
    ```jsx
    import { useLocation } from 'react-router-dom';

    function LocationDisplay() {
    const location = useLocation();
    
    return <div>Current Location: {location.pathname}</div>;
    }
    ```

### Configuracion

* __Rutas Anidadas__ React Router permite definir una ruta que puede contener sub-rutas que se renderizan dentro del componente padre.
    ```jsx
    function Dashboard() {
    return (
        <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        </Routes>
    )}
    ```
* __Rutas Dinámicas__: Puede utilizar parámetros en la URL. Ideal para aplicaciones que requieren rutas basadas en identificadores específicos.
    ```jsx
    function App() {
    return (
        <Routes>
        <Route path="users/:userId" element={<UserProfile />} />
        </Routes>
    )}
    ```
* __Rutas protegidas__ Para asegurar que solo usuarios autenticados puedan acceder, se pueden utilizar componentes de orden superior (HOCs) o Hooks personalizados.
    ```jsx
    function PrivateRoute({element, ...props}) {
        const isAuth = useAuth();
        return (
        <Route {...props} element={isAuth ? element : <Navigate to="/login"/>} />
    )}
    ```
* __Redirecciones__: Permiten cambiar automáticamente la URL del navegador a otra ruta. Esto es útil para manejar rutas no válidas o redirigir después de una acción específica.
    ```jsx
    import { Navigate } from 'react-router-dom';
    function NotFound() {
        return <Navigate to="/" />;
    }
    ```
    
[volver](../readme.md)