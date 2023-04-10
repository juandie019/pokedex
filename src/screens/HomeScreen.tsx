import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { gstyles } from '../theme/appTheme';

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  return (
    <>
      <Image
        source={ require('../assets/pokebola.png')}
        style={ gstyles.pokeBolaBg }
      />
      <FlatList
        data={ simplePokemonList }
        keyExtractor={ (pokemon) => pokemon.id }
        showsVerticalScrollIndicator={ false }
        renderItem={ ({item}) => (
          <FadeInImage
            uri={ item.picture }
            style={{
              width: 100,
              height: 100,
            }}
          />
        )}

        //infinite scroll
        onEndReached={ () => loadPokemons() }
        onEndReachedThreshold={ 0.4 }

        ListFooterComponent={(
          <ActivityIndicator
            style={{ height: 100 }}
            size={ 20 }
            color="grey"
          />
        )}
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
