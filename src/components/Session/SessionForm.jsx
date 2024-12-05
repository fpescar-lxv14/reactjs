import { useDispatch, useSelector } from "react-redux"
import { setvalue, reset } from "../../store/sessionSlice"

export default function SessionForm(){
    const dispatch = useDispatch()
    const {username, email, password} = useSelector(s => s.session);
    const handle = ({target:{id,value}}) => dispatch(setvalue([id,value]))
    return(
        <form style={{display: "grid"}}>
            <label htmlFor="username">Nombre de Usuario</label>
            <input id="username" type="text" onInput={handle} value={username}/>
            <label htmlFor="email">Correo Electronico</label>
            <input id="email" type="text" onInput={handle} value={email}/>
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" onInput={handle} value={password}/>
        </form>
)}