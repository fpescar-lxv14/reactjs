import { StateProvider } from "./providers/State"
import { ThemeProvider } from "./providers/Theme"

import Search from "./components/Search"
import Results from "./components/Results"
import Pagination from "./components/Pagination"

function App() {
  return (
    <ThemeProvider>
      <StateProvider>
        <Search/>
        <Results/>
        <Pagination/>
      </StateProvider>
    </ThemeProvider>
  )
}
export default App