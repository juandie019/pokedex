import { useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { FullPokemon } from '../interfaces/pokeapiInterface';

export const usePokemon = (id: string) => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemon, setPokemon] = useState<FullPokemon>({} as FullPokemon);

    const fetchPokemon = async () => {
        const resp = await pokemonApi.get<FullPokemon>(`https://pokeapi.co/api/v2/pokemon/${ id }`);
        setPokemon(resp.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    return {
        isLoading,
        pokemon,
    };

};
