import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RootStackParams } from '../navigator/Tab1';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'>{}

export const PokemonScreen = ({ navigation, route }: Props) => {

  const { simplePokemon, color } = route.params;
  const { top } = useSafeAreaInsets();

  const { pokemon, isLoading } = usePokemon(simplePokemon.id);

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{
        ...styles.headerContainer,
        backgroundColor: color,
      }}>
        <TouchableOpacity
          onPress={ () => navigation.goBack() }
          activeOpacity={ 0.8 }
          style={{
            ...styles.backButton,
            top: top + 5,
          }}
        >
          <Icon
            name="arrow-back-outline"
            color="white"
            size={ 35 }
          />
        </TouchableOpacity>

        <Text
          style = {{
            ...styles.pokemonName,
            top: top + 40,
          }}
        >
          { simplePokemon.name + '\n' } #{ simplePokemon.id }
        </Text>

        {/* Pokebola blanca */}

        <Image
          source={ require('../assets/pokebola-blanca.png') }
          style={ styles.pokebola }
        />

        <FadeInImage
          uri={ simplePokemon.picture }
          style={ styles.pokemonImage }
        />
      </View>

      {/* Detalles y loading */}
      {
        isLoading ?
        <View style={ styles.activityIndicator }>
          <ActivityIndicator
            color = { color }
            size = { 50 }
          />
        </View>
        :
        <PokemonDetails fullPokemon={ pokemon }/>
      }
    </View>
  );
};


const styles = StyleSheet.create({
    headerContainer: {
      height: 370,
      zIndex: 999,
      alignItems: 'center',
      borderBottomRightRadius: 1000,
      borderBottomLeftRadius: 1000,
    },

    backButton: {
      position: 'absolute',
      left: 20,
    },

    pokemonName: {
      color: 'white',
      fontSize: 40,
      alignSelf: 'flex-start',
      left: 20,
    },

    pokebola: {
      width: 250,
      height: 250,
      bottom: -10,
      opacity: 0.7,
    },

    pokemonImage: {
      width: 250,
      height: 250,
      position: 'absolute',
      bottom: -15,
    },

    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});
