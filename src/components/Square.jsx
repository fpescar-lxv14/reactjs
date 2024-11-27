import { useState } from "react"

export function Button({row, col, currentPlayer:cP, fn, status}){
    const [icon, setIcon] = useState()
    const fill = () => {
    if(!icon) {
        setIcon(cP)
        fn && fn(row,col,cP)
    }}
    return (
    <button onClick={fill} disabled={icon || status}>{icon}</button>
)}