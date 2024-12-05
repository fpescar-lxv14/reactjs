import { useDispatch, useSelector } from "react-redux"
import { setvalue, reset } from "../../store/sessionSlice"
import { Fragment } from "react";

export default function SessionForm(){
    const dispatch = useDispatch()
    const session = useSelector(s => s.session);
    const handle = ({target:{id,value}}) => dispatch(setvalue([id,value]))
    const getType = (t) => /email|password|number|date|radio|checkbox|tel/.test(t) ? t : "text"
    return(
        <form style={{display: "grid"}}>
        { Object.entries(session).map(([k,v],i) => 
            <Fragment key={i}>
            <label htmlFor={k}>{k}</label>
            <input id={k} 
                type={getType(k)} 
                onInput={handle}    
                value={v}
                autoComplete={1}
                required={1} />
            </Fragment>
        )}
        </form>
)}