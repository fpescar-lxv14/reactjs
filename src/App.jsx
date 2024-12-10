import { BrowserRouter } from "react-router";
import AppRouter from "./components/AppRouter.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
      <NavBar/>
    </BrowserRouter>
)}
export default App