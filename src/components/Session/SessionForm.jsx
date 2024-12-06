import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setvalue } from "../../store/sessionSlice"
import { Input, InputLabel } from "@mui/material";

export default function SessionForm(){
    const dispatch = useDispatch()
    const session = useSelector(s => s.session);
    const handle = ({target:{id,value}}) => dispatch(setvalue([id,value]))
    const getType = (t) => /email|password|number|date|radio|checkbox|tel/.test(t) ? t : "text"
    return(
        <form style={{display: "grid"}}>
        { Object.entries(session).map(([k,v],i) => 
            <Fragment key={i}>
            <InputLabel htmlFor={k}>{k}</InputLabel>
            <Input id={k} 
                type={getType(k)} 
                onInput={handle}    
                value={v}/>
            </Fragment>
        )}
        </form>
)}