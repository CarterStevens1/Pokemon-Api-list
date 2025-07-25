
import { useEffect, useState } from "react";
import Pokemons from "./pokemons";


const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=151";


function getPokemon({ url }) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    })
}

async function getAllPokemon(url) {
    return new Promise((resolve, reject) => {
        fetch(url).then(res => res.json())
            .then(data => {
                resolve(data)
            })
    })
}


function filterPokemons(pokemons, selectedType) {
    return pokemons.filter(pokemon => pokemon.types.some(type => type.type.name === selectedType));
}



export default function PokemonList() {
    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonGet = await getPokemon(pokemon)
            return pokemonGet
        }))
        setPokemonData(_pokemonData)
    }



    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(apiURL)
            await loadPokemon(response.results)

            setIsLoading(false)
        }
        fetchData()
    }, [])

    if (isLoading) {
        return (
            <div>
                Loading pokemon...
            </div>
        )
    }

    return (
        <section>

            <div className="flex flex-wrap gap-2 items-center">
                {/* Use pokeColor instead */}
                {[...new Set(pokemonData.map(pokemon => pokemon.types[0].type.name))].map(type => (
                    <span onClick={() => setPokemonData(filterPokemons(pokemonData, type))} className="rounded-2xl px-3 py-1 cursor-pointer" key={type}>{type}</span>
                ))}
            </div>

            <div id="pokemonList" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-12">
                {pokemonData.map((pokemon, index) => (
                    <Pokemons key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </section >
    );
};
