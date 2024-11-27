import { Button } from "./Square"

export const GameBoard = ({board, ...props}) =>
<div className="tic-tac-toe">{ 
    board?.flat().map((_,i) => 
    <Button key={i} 
        row={Math.floor(i / 3)} 
        col={i % 3}
        {...props}/>
    )}
</div>