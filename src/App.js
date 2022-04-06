import SearchPage from "./pages/SearchPage"
import Header from "./components/Layout/Header"
import SearchProvider from './store/SearchProvider'

function App() {
  return (
    <SearchProvider>
      <Header/>
      <main>
        <SearchPage />
      </main>
    </SearchProvider>
  )
}

export default App
