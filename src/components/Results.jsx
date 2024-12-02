import { useContext, useLayoutEffect, useRef, useState } from "react";
import { StateContext } from "../providers/State";
import Post from "./Post";

export default function Results() {
    const gridRef = useRef()
    const [cols, setCols] = useState(1)
    const {search:{q}, results} = useContext(StateContext);
    const found = results?.data && q.length >= 2;
    const getColumns = (col = 320) => {
        const width = gridRef.current.offsetWidth
        setCols(Math.floor(width / col))
    }
    useLayoutEffect(() => {
        window.addEventListener('resize', () => getColumns());
        return(window.removeEventListener('resize',() => "eliminado"))
    },[])
return (
    <section ref={gridRef} className="container">            
        <h2 style={{gridColumn: `span ${cols}`}}>{found ? "Resultados de "+q : "No se realizaron Busquedas"}</h2>
        { results?.data.map(item => <Post key={item.id} {...item}/>) }
    </section>
)}