import { useSteps } from "../utils/useStep"
import { Steps } from "./Steps";

export default function Login() {
    const {stage, ...steps} = useSteps(1,2);
    const info = { total: 2, ...steps }
    return (
        <>
            <h2>Iniciar Sesion</h2>
            <Steps {...info}></Steps>
        </>
)}