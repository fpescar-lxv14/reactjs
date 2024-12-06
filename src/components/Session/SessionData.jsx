import { useSelector } from "react-redux"
import { List, ListItem, ListItemText } from "@mui/material"

export default function SessionData(){
    const session = useSelector(state => state.session)
    return(
    <List dense={true}>
    { Object.entries(session).map(([k,v],i) => 
        <ListItem key={i}>
            <ListItemText primary={v} secondary={k}/>
        </ListItem>
    )}
    </List>
)}