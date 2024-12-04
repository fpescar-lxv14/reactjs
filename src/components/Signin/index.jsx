import { useSteps } from "../../utils/useStep";
import { Steps } from "../Steps";
import AccountInfo from "./AccountInfo";
import UserInfo from "./UserInfo";
import PayInfo from "./PayInfo";

export default function Signin() {
    const { stage, ...steps } = useSteps(1,3);
    const info = { total: 3, ...steps }
    return (
    <section className="container py-5 p-3 position-relative">
        <Steps {...info}/>
        <h2>Registrate, ¡¡es Gratis!!</h2>
        { stage === 1 && <AccountInfo {...steps} /> }
        { stage === 2 && <UserInfo {...steps} /> }
        { stage === 3 && <PayInfo {...steps} /> }
    </section>
)}