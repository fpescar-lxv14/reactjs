import { useSteps } from "../../utils/useStep";
import AccountInfo from "./AccountInfo";
import UserInfo from "./UserInfo";
import PayInfo from "./PayInfo";

export default function Signin() {
    const { stage, ...steps } = useSteps(1,3);
    return (
    <section className="container py-5 p-3 position-relative">
        <div className="steps">
            { [1,2,3].map(step => 
                <button key={step} className={step === stage ? "active" : ""} 
                    onClick={() => steps.goToStep(step)}>
                    step
                </button> )}
        </div>
        <h2>Registrate, ¡¡es Gratis!!</h2>
        { stage === 1 && <AccountInfo {...steps} /> }
        { stage === 2 && <UserInfo {...steps} /> }
        { stage === 3 && <PayInfo {...steps} /> }
    </section>
)}