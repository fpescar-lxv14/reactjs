import { useDispatch, useSelector } from "react-redux"
import { increment, decrement, setnumber } from "../store/counterSlice"

export default function Counter () {
    const dispatch = useDispatch();
    const { number } = useSelector(state => state.counter)
    const handle = (action,payload) => dispatch(action(payload))
    return(
    <section>
        <h2>Contador: { number }</h2>
        <button onClick={()=>handle(decrement,1)}>-</button>
        <input type="number" 
            onChange={({target}) => handle(setnumber, Number(target.value))} 
            value={number}/>
        <button onClick={()=>handle(increment,1)}>+</button>
    </section>
)}