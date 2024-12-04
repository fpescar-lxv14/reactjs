import React, { useEffect, useState } from 'react'

export default function Gallery(props) {
    const [content, setContent] = useState();
    useEffect(() => {
        const timer = setTimeout(() => {
            setContent(Math.round(Math.random()) ? "videos" : "imagenes" )
        }, 1000)
    },[])
    return (
    <header>
        <h2>Bienvenido a la Galeria</h2>
        <p>Aqui hay { content } de todo tipo</p>
    </header>
)}