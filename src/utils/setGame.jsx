export const createBoard = (n) => 
    Array.from({length:n}).map((_,i,arr)=> arr.map(_=> ""))
export const setGame = () => ({
    currentPlayer: "O",
    nextPlayer: "X",
    board: createBoard(3),
    status: ""
})