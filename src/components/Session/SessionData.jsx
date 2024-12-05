import { useSelector } from "react-redux"

export default function SessionData(){
    const session = useSelector(state => state.session)
    return(
    <ul>
    { Object.entries(session).map(([k,v],i) => 
        <li key={i}><strong>{k}:</strong> {v}</li>
    )}
    </ul>
)}