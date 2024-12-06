import { useDispatch } from "react-redux"
import { filterTodos } from "../../store/todosSlice"
import { RadioGroup, FormControlLabel, Radio } from "@mui/material"

export default function TodoFilter() {
    const dispatch = useDispatch()
    const filter = ({target}) => dispatch(filterTodos(target.value))
    return (
    <RadioGroup row sx={{justifyContent: "center"}}>
        <FormControlLabel label="TODAS" value={2}
            control={<Radio/>} onChange={filter}/>
        <FormControlLabel label="COMPLETADAS" value={1}
            control={<Radio/>} onChange={filter}/>
        <FormControlLabel label="INCOMPLETAS" value={0}
            control={<Radio/>} onChange={filter}/>
    </RadioGroup>      
)}