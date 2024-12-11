import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCandidates } from "../store/candidateSlice";
import Card from "./Card";

export default function Candidates() {
    const dispatch = useDispatch();
    const { loading, results, error } = useSelector(s => s.candidates);
    const url = import.meta.env.VITE_URL ?? 'https://randomuser.me/api/?results=20'
    useEffect(() => {
        !results.length && dispatch(getCandidates(url))
    },[])
    return (
    <>{  
        loading ? "...Buscando Candidatos" : 
        results.map(item => <Card key={item.login?.uuid} {...item}/>)
    }
    </>
)}
