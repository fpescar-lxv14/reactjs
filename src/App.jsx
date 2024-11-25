// Recursos
import "./index.css";
import "./App.css";
import reactLogo from "./assets/react.svg";
import menu from "./assets/menu.json";
import social from "./assets/social.json";
// Componentes
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Button from "./components/Button";

function App() {
  return (
    <>
    <Nav title="RJS" links={menu}/>
    <Header 
      title="ReactJS"
      subtitle="Bienvenidos al Sitio"
      icon={reactLogo}/>
    <Button text="me gusta" />
    <Button text="me encanta" />
    <Button text="me divierte" />
    <Footer
      author="Cristian & Compañia"
      social={social} />
    </>
)}

export default App
