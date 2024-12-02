import { useContext } from "react";
import { StateContext } from "../providers/State";
import Post from "./Post";

export default function Results() {
    const {search:{q}, results} = useContext(StateContext);
    const found = results?.data && q.length >= 2;
return (
    <section className="container">            
        <h2>{found ? "Resultados de "+q : "No se realizaron Busquedas"}</h2>
        { results?.data.map(item => <Post key={item.id} {...item}/>) }
    </section>
)}