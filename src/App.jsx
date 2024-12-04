import { BrowserRouter } from "react-router"
import Nav from "./components/Nav"
import AppRouter from "./components/AppRouter"
import { appRoutes } from "./models/approutes"
import { navigation } from "./models/navigation"

function App() {  
  return (
    <BrowserRouter>
      <Nav menu={navigation}/>
      <AppRouter routes={appRoutes}/>
    </BrowserRouter>
  )
}
export default App