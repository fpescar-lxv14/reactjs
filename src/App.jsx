import { StateProvider } from "./providers/State"

import Search from "./components/Search"
import Results from "./components/Results"
import Pagination from "./components/Pagination"

function App() {
  return (
    <StateProvider>
      <Search/>
      <Results/>
      <Pagination/>
    </StateProvider>
  )
}
export default App