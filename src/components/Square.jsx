export function Button(props){
    const { icon, row, col, currentPlayer:value, fn, status } = props
    const handleClick = () => (!icon) && fn && fn({row,col,value})
    return (
    <button onClick={handleClick} disabled={icon||status}>{icon}</button>
)}