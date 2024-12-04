import { useState, useEffect } from 'react'

const Contact = () => {
    const [contact, setContact] = useState()
    useEffect(()=>{ setTimeout(()=>setContact('anonimous'),2000) },[])
    return (
    <header>
        <h2>Gracias por ponerte en Contacto</h2>
        <p>en unos momentos recibiras una notificacion por parte de { contact ?? "..." }</p>
    </header>
)}
export default Contact