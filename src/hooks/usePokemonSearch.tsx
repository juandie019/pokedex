import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Pokemon, PokemonPaginatedResponse, SimplePokemon } from '../interfaces/pokeapiInterface';

export const usePokemonSearch = () => {
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    const loadPokemons = async () => {
        const response = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1300');
        mapPokemonList(response.data.results);
        setIsFetching(false);
    };

    const mapPokemonList = (pokemonList: Pokemon[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;

            return { picture, name, id };
        });

        setSimplePokemonList(newPokemonList);
    };

    useEffect( () => {
        loadPokemons();
    }, []);

    return {
        simplePokemonList,
        isFetching,
    };
};
