import PokemonList from './components/pokemonList'
import Navigation from './components/navigation'
import './App.css'

function App() {

  return (
    <>
      <Navigation />
      <main className="p-4">
        <PokemonList />
      </main >
    </>
  )
}

export default App
