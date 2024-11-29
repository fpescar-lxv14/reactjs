import { useContext, useEffect, useState } from "react";
import { StateContext } from "../providers/State";
import Post from "./Post";

export default function Results() {
    const [posts, setPosts] = useState([]);
    const {search:{q}, results} = useContext(StateContext);
    const found = results?.data && q.length >= 2;
    useEffect(() => {setPosts(results?.data ?? [])},[results?.data]);
return (
    <section className="container">            
        <h2>{found ? "Resultados de "+q : "No se realizaron Busquedas"}</h2>
        { posts.map(item => <Post key={item.id} {...item}/>) }
    </section>
)}