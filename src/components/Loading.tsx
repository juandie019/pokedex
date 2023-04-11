import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { gstyles } from '../theme/appTheme';

export const Loading = () => {
  return (
    <View style={ gstyles.activityContainer }>
        <ActivityIndicator
            size={ 50 }
            color="grey"
        />
        <Text>Cargando...</Text>
      </View>
    );
};
