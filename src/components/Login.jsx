import { Container } from "./Container";
import { useSteps } from "../utils/useStep"
import { Steps } from "./Steps";

export default function Login() {
    const {stage, ...steps} = useSteps(1,2);
    const info = { total: 2, stage, ...steps }
    return (
    <Container>
        <h2>Iniciar Sesion</h2>
        <Steps {...info} />
        { stage === 1 && 
        <fieldset className="form-floating">
            <input id="username" name="username" className="form-control" type="text" placeholder="..."/>
            <label htmlFor="username">Usuario o Correo</label>
        </fieldset> }
        { stage === 2 && 
        <fieldset className="form-floating">
            <input id="password" name="password" className="form-control" type="password" placeholder="..."/>
            <label htmlFor="password">Contraseña</label>
        </fieldset> }
    </Container>
)}