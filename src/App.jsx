import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import reactLogo from "./assets/react.svg"

function App() {
  const social = [
    { 
      link: "https://facebook.com/profile", 
      text: "facebook"
    },
    { 
      link: "https://instagram/profile", 
      text: "instagram"
    },
    { 
      link: "https://api.whatsapp.com/send?phone=1103030456&text=Buenos+dias,+quisiera+hacer+una+consulta...", 
      text: "whatsapp"
    }
  ]
  const menu = [
    {
      link: "#", text: "inicio"
    },
    {
      link: "#services", text: "servicios"
    },
    {
      link: "#contact", text: "contacto"
    }
  ]
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
