import { BrowserRouter } from "react-router"
import Nav from "./components/Nav"
import AppRouter from "./components/AppRouter"
function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <AppRouter/>
    </BrowserRouter>
  )
}
export default App