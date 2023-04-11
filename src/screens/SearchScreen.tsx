import React, { useState, useEffect } from 'react';
import { Dimensions, FlatList, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokeapiInterface';
import { gstyles } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isFetching, simplePokemonList } = usePokemonSearch();

  const [term, setTerm] = useState('');
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

  useEffect(() => {
    if (term.length === 0){
      return setPokemonFiltered([]);
    }

    setPokemonFiltered(
      simplePokemonList.filter(({ name, id }) => {
        const lowerTerm = term.toLocaleLowerCase();
        return name.toLocaleLowerCase().includes(lowerTerm) || id.toLocaleLowerCase().includes(lowerTerm);
      })
    );

  }, [term]);


  if (isFetching){
    return <Loading />;
  }

  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      {/* search input */}
      <SearchInput
        onDebounce={ (value) => setTerm(value)}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: ( Platform.OS === 'ios') ? top : top + 20,
        }}
      />

      {/* results */}

      <FlatList
        data={ pokemonFiltered }
        keyExtractor={ (pokemon) => pokemon.id }
        showsVerticalScrollIndicator={ false }
        numColumns={2}

        //header
        ListHeaderComponent = {(
          <Text style={{
            marginTop: top + 70,
            ...gstyles.title,
            ...gstyles.globalMargin,
            marginBottom: 10,
          }}>
            { term }
          </Text>
        )}
        // renderItem
        renderItem={ ({item}) => <PokemonCard pokemon={ item } />}
      />
    </View>
  );
};

