import { useState } from 'react'
import PokemonList from './components/pokemonList'
import Navigation from './components/navigation'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
