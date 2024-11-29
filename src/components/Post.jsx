import { useState } from "react";
import Media from "./Media";

export default function Post({title, username, images, ...props}){
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => setIsOpen(!isOpen);
    return (
    <article onClick={handleClick}>
        <header>
            <h3>{title}</h3>
            <p><strong>Publicado por</strong> {username}</p>
        </header>
        <Media {...images} open={isOpen}/>
    </article>
)}