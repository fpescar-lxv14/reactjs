import { useState } from "react"
import { ControlPanel } from "./components/ControlPanel"

function App() {
  const board = Array.from({length:3}).map(_=>Array.from({length:3}).map(_=> ""))
  const [state, setState] = useState({
    currentPlayer: "O",
    nextPlayer: "X",
    board,
    status: undefined
  })
  const changePlayer = () => {
    const { currentPlayer:cp, nextPlayer:np } = state;
    setState( (prevState) => ({
      ...prevState,
      currentPlayer:np,
      nextPlayer:cp
    }))
  }
  return (
    <>
      <h1>Ta-Te-Ti</h1>
      <ControlPanel {...state}/>
      <div className="tic-tac-toe">
      { state.board.flat().map((item,i) => 
        <button key={i} onClick={changePlayer}>{item} {i}</button>
      )}
      </div>
    </>
  )
}
export default App