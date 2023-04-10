import React from 'react';
import { FlatList, Text } from 'react-native';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { gstyles } from '../theme/appTheme';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { simplePokemonList } = usePokemonPaginated();

  return (
    <>
      <Image
        source={ require('../assets/pokebola.png')}
        style={ gstyles.pokeBolaBg }
      />
      <FlatList 
        data={ simplePokemonList }
        keyExtractor={ (pokemon) => pokemon.id }
        renderItem={ ({item}) => <Text>{item.name}</Text>}
      />
      {/* <Text style={{
        ...gstyles.title,
        top: top + 20,
        ...gstyles.globalMargin,
      }}>
        Pokedex
      </Text> */}
    </>
  );
};
