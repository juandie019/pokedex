import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokeapiInterface';

export type RootStackParams = {
  Home: undefined,
  PokemonScreen: {
    simplePokemon: SimplePokemon,
    color: string,
  }
}

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}>
        <Stack.Screen name="Home" component={ HomeScreen } />
        <Stack.Screen name="PokemonScreen" component={ PokemonScreen } />
    </Stack.Navigator>
  );
};
