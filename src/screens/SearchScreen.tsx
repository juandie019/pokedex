import React from 'react';
import { Platform, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { gstyles } from '../theme/appTheme';

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{
        flex: 1,
        top: (Platform.OS === 'ios') ? top : top + 10,
        ...gstyles.globalMargin,
      }}
    >
      <SearchInput />
    </View>
  );
};

