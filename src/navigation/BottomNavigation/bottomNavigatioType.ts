import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FC} from 'react';
import {SCREENS} from '../screens';
import {RootStackParamList} from '../rootNavigation/navigationTypes';

export type BottomStackParamList = {
  [SCREENS.home]: undefined;
  [SCREENS.favoritesDrink]: undefined;
  [SCREENS.user]: undefined;
};

export type BottomStackScreenParamList<T extends keyof BottomStackParamList> =
  FC<
    CompositeScreenProps<
      BottomTabScreenProps<BottomStackParamList, T>,
      NativeStackScreenProps<RootStackParamList>
    >
  >;
