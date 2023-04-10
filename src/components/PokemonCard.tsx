import React, { useState, useEffect, useRef } from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getImagePrimaryColor } from '../helpers/getImageColors';
import {SimplePokemon} from '../interfaces/pokeapiInterface';
import {FadeInImage} from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {

  const navigator = useNavigation();

  const [bgColor, setBgColor] = useState('grey');

  const isMounted = useRef(true);

  useEffect(() => {
    if (!isMounted.current){
      return;
    }

    getPokemonColor();

    return () => {
      isMounted.current = false;
    };
  }, []);

  const getPokemonColor = async () => {
    const primaryColor = await getImagePrimaryColor(pokemon.picture);
    setBgColor(primaryColor!);
  };

  return (
    <TouchableOpacity
      onPress={ () => navigator.navigate('PokemonScreen', { simplePokemon: pokemon, color: bgColor })}
      activeOpacity={ 0.9 }
    >
      <View style={{
        ...styles.cardContainer,
        width: windowWidth * 0.4,
        backgroundColor: bgColor,
      }}>
        {/* nombre pokemon */}
        <View>
          <Text style={styles.name}>
            { pokemon.name }
            { '\n#' + pokemon.id }
          </Text>
        </View>
        <View style={styles.pokeBolaContainer}>
          <Image
            style={ styles.pokeBola }
            source={ require('../assets/pokebola-blanca.png') }
          />
        </View>
        <FadeInImage
          uri={pokemon.picture}
          style={ styles.pokemonImage}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      marginHorizontal: 10,
      backgroundColor: 'grey',
      height: 120,
      width: 160,
      marginBottom: 25,
      borderRadius: 10,

      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },

    name: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      top: 20,
      left: 10,
    },

    pokeBolaContainer: {
      width: 100,
      height: 100,
      position: 'absolute',
      bottom: 0,
      right: 0,
      opacity: 0.5,
      overflow: 'hidden',
    },

    pokeBola: {
      width: 100,
      height: 100,
      bottom: -25,
      right: -25,

    },

    pokemonImage: {
      width: 120,
      height: 120,
      position: 'absolute',
      right: -8,
      bottom: -5,
    },
});
