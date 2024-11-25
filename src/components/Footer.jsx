import Link from "./Link";
function Footer(props){
    const year = new Date().getFullYear()
    const { author, social } = props
    return (
    <footer>
        <ul>{ 
            social.map((item,i) => 
            <Link key={i} target="_blank" {...item}/>
        )}
        </ul>
        <p>&copy;{year} Todos los derechos reservados {author}</p>
    </footer>
)}
export default Footer;