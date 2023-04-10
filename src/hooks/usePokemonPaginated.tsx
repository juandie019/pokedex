import { useEffect, useRef, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { Pokemon, PokemonPaginatedResponse, SimplePokemon } from '../interfaces/pokeapiInterface';

export const usePokemonPaginated = () => {

    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const loadPokemons = async () => {
        const response = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
        nextPageUrl.current = response.data.next;
        mapPokemonList(response.data.results);
        setIsLoading(false);
    };

    const mapPokemonList = (pokemonList: Pokemon[]) => {
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url }) => {
            const urlParts = url.split('/');
            const id = urlParts[urlParts.length - 2];
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;
            return {
                picture,
                name,
                id,
            };
        });

        setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    };

    useEffect( () => {
        loadPokemons();
    }, []);

    return {
        simplePokemonList,
        isLoading,
    };
};
