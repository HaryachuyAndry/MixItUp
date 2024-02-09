import {View, Text} from 'react-native';
import React from 'react';
import {BottomStackScreenParamList} from '../../navigation/BottomNavigation/bottomNavigatioType';
import {SCREENS} from '../../navigation/screens';

const FavoritesDrink: BottomStackScreenParamList<
  SCREENS.favoritesDrink
> = () => {
  return (
    <View>
      <Text>FavoritesDrink</Text>
    </View>
  );
};

export default FavoritesDrink;
