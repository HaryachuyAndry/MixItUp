import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigationTypes';

import {SCREENS} from '../screens';
import BottomNavigation from '../BottomNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREENS.bottom}>
      <Stack.Screen name={SCREENS.bottom} component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
