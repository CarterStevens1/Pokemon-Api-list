import pokeColor from "@/components/pokeColors";

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Pokemons({ pokemon }) {
    return (
        <Card style={{ backgroundColor: pokeColor[pokemon.name] }} key={pokemon.id} className="relative overflow-hidden pb-0">
            <img src="../src/assets/images/pokeball.png" alt="Pokeball" className="absolute -bottom-20 -right-20 -z-0 opacity-50" />
            <CardHeader className="z-1">
                <CardTitle>#{pokemon.id} | {pokemon.name}</CardTitle>
                <img width={150} height={150} src={pokemon.sprites.front_default} alt={pokemon.name} />
            </CardHeader>
            <CardFooter className="mt-auto bg-white/70 min-h-20">
                <div className="flex gap-2 items-center flex-wrap">
                    {pokemon.types.map((type, index) => <span style={{ backgroundColor: pokeColor[type.type.name] }} className="rounded-2xl px-3 py-1" key={index}>{type.type.name}</span>)}
                </div>
            </CardFooter>

        </Card>

    );
}
