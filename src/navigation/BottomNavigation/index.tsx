import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SCREENS} from '../screens';
import HomeScreen from '../../screens/HomeScreen';
import FavoritesDrink from '../../screens/FavoritesDrink';
import {BottomStackParamList} from './bottomNavigatioType';
import {FC} from 'react';
import {RootStackScreenType} from '../RootNavigation/navigationTypes';
import User from '../../screens/User';

const Tab = createBottomTabNavigator<BottomStackParamList>();

export const BottomNavigation: FC<RootStackScreenType<SCREENS.bottom>> = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={SCREENS.favoritesDrink} component={FavoritesDrink} />
      <Tab.Screen name={SCREENS.home} component={HomeScreen} />
      <Tab.Screen name={SCREENS.user} component={User} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
