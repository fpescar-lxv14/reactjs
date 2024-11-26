import { useState } from "react"

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
      <ul className="control-panel">
      { Object.entries(state).map(([k,v],i) => 
        typeof v !== "object" &&
        <li key={i}><strong>{k}: </strong>{v ?? "-"}</li>
      )}
      </ul>
      <div className="tic-tac-toe">
      { state.board.flat().map((item,i) => 
        <button key={i} onClick={changePlayer}>{item} {i}</button>
      )}
      </div>
    </>
  )
}
export default App