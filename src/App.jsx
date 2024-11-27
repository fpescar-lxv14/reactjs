import { useState } from "react"
import { ControlPanel } from "./components/ControlPanel"
import { GameBoard } from "./components/GameBoard"
import { Button } from "./components/Button"

import { setGame } from "./utils/setGame"
import { updateBoard } from "./utils/updateBoard"
function App() {
  const [state, setState] = useState(setGame);
  const gameStart = () => confirm("¡Desea Iniciar una nueva partida!") && setState(setGame);
  const checkBoard = (newS) => setState((prevS) => updateBoard(prevS,newS));
  return (
    <>
      <h1>Ta-Te-Ti</h1>
      <ControlPanel {...state}/>
      <GameBoard fn={checkBoard} {...state}/>
      <Button type="control" icon="#" text="empezar juego" fn={gameStart}/>
    </>
  )
}
export default App