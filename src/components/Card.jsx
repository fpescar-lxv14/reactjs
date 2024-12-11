import { useDispatch } from "react-redux"
import { useNavigate } from "react-router";
import { fetchOne, rejectCandidate } from "../store/candidateSlice";
import { select } from "../store/selectionSlice";

export default function Card (props){
    const url = import.meta.env.VITE_URL ?? "https://randomuser.me/api"
    const { login, name, email, phone, cell, picture } = props
    const to = useNavigate()
    const dispatch = useDispatch()
    const reject = () => {
        dispatch(rejectCandidate(login.uuid))
        dispatch(fetchOne(url))
    };
    const choose = () => dispatch(select(props))
    const profile = () => to(`${login.uuid}`)
    return(
        <article>
            <img src={picture.large} alt={login.uuid} />
            <h2>{name.title} {name.last} {name.first}</h2>
            <ul>
                <li><strong>correo:</strong> <a href={"mailto:"+email}>{email}</a></li>
                <li><strong>Telefono: </strong> <a href={"tel:"+phone}>{phone}</a></li>
                <li><strong>Celular: </strong> <a href={"tel:"+cell}>{cell}</a></li>
            </ul>
            <button onClick={reject}>Rechazar</button>
            <button onClick={choose}>Seleccionar</button>
            <button onClick={profile}>Ver Perfil</button>
        </article>
)}