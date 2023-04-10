import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/Navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'>{}

export const PokemonScreen = ({ navigation, route }: Props) => {
  const { simplePokemon, color } = route.params;
  return (
    <View>
        <Text>{ simplePokemon.name } - { color }</Text>
    </View>
  );
};
