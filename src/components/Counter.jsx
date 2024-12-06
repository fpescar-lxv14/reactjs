import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, setnumber } from "../store/counterSlice"

import { Button, Input } from "@mui/material";
// import { AddIcon, RemoveIcon } from "@mui/icons-material"

export default function Counter () {
    const dispatch = useDispatch();
    const { number } = useSelector(state => state.counter)
    const handle = (action,payload) => dispatch(action(payload))
    return(
    <section>
        <h2>Contador: { number }</h2>
        <Button variant="contained" color="error" onClick={()=>handle(decrement,1)}>
            {/* <RemoveIcon/> */} -
        </Button>
        <Input type="number" variant="filled"
            onChange={({target}) => handle(setnumber, Number(target.value))} 
            value={number}/>
        <Button variant="contained" color="success" onClick={()=>handle(increment,1)}>
            {/* <AddIcon/> */} +
        </Button>
    </section>
)}