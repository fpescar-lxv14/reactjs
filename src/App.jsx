// Recursos
import reactLogo from "./assets/react.svg";
import menu from "./assets/menu.json";
import social from "./assets/social.json";
// Componentes
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Nav title="RJS" links={menu}/>
    <Header 
      title="ReactJS"
      subtitle="Bienvenidos al Sitio"
      icon={reactLogo}/>
    <Footer
      author="Cristian & Compañia"
      social={social} />
    </>
)}

export default App
