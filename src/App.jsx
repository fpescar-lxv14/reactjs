import { useState } from "react"
import { ControlPanel } from "./components/ControlPanel"
import { GameBoard } from "./components/GameBoard"
import { Button } from "./components/Button.jsx"

function App() {
  const board = Array.from({length:3}).map((_,i,arr)=> arr.map(_=> ""))
  const [state, setState] = useState({
    currentPlayer: "O",
    nextPlayer: "X",
    board,
    status: undefined
  })
  const gameStart = () => alert("empieza el juego")
  const checkWinner = (arr, icon) => {
    for(let i = 0; i < arr.length; i++){
      const row = arr[i].map(item => item)
      const col = arr.map((_,n) => arr[n][i])
      const d1 = arr.map((_,n) => arr[n][n])
      const d2 = arr.map((_,n) => arr[n][arr.length - (n + 1)])
      
      if (
        row.every(item => item === icon) || 
        col.every(item => item === icon) || 
        d1.every(item => item === icon) || 
        d2.every(item => item === icon)
      ) 
      return "hay un ganador"
    }
    if (arr.flat().every(item => item !== "")) return "Empate"
  }
  const checkBoard = (row, col, value) => {
    setState(prevState => {
      const { board, currentPlayer:cp, nextPlayer:np } = prevState;
      board[row][col] = value;
      const status = checkWinner(board, cp)
      return {
        board,
        currentPlayer:np,
        nextPlayer:cp,
        status
      }
  })}
  return (
    <>
      <h1>Ta-Te-Ti</h1>
      <ControlPanel {...state}/>
      <GameBoard fn={checkBoard} {...state}/>
      <Button type="control" 
        icon="#" 
        text="empezar juego" 
        fn={gameStart} />
    </>
  )
}
export default App