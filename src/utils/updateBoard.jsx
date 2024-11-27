import { getWinner } from "./getWinner";

export const updateBoard = (prevState, newState) => {
    const { board, currentPlayer:cp, nextPlayer:np } = prevState;
    const { row, col, value } = newState
    board[row][col] = value;
    const status = getWinner(board, cp)
    return {
        board,
        currentPlayer:np,
        nextPlayer:cp,
        status
    }
}