import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams } from './Tab1';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonScreen } from '../screens/PokemonScreen';


const Tab2 = createNativeStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}>
        <Tab2.Screen name="Home" component={ SearchScreen } />
        <Tab2.Screen name="PokemonScreen" component={ PokemonScreen } />
    </Tab2.Navigator>
  );
};
