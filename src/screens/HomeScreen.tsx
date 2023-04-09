import { NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export const HomeScreen = ({ navigation }: NativeStackScreenProps<any, any>) => {
  return (
    <View>
        <Text>Home Screen</Text>
        <Icon
          name="add-outline"
          size={50}
        />
        <Button
          title="Ir a pokemon"
          onPress={ () =>  navigation.navigate('PokemonScreen')}
        />
    </View>
  );
};
