import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PokemonCard } from '../components/PokemonCard';
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
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <FlatList
          data={ simplePokemonList }
          keyExtractor={ (pokemon) => pokemon.id }
          showsVerticalScrollIndicator={ false }
          numColumns={2}

          //header
          ListHeaderComponent = {(
            <Text style={{
              ...gstyles.title,
              marginTop: top + 20,
              ...gstyles.globalMargin,
            }}>
              Pokedex
            </Text>
          )}

          // renderItem
          renderItem={ ({item}) => <PokemonCard pokemon={ item } />}

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
      </View>
    </>
  );
};
