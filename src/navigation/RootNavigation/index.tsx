import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigationTypes';

import {SCREENS} from '../screens';
import BottomNavigation from '../BottomNavigation';
import PreAuth from '../../screens/preAuthScreen';
import Auth from '../../screens/authScreens/authScreen';
import RegFirst from '../../screens/authScreens/regFirstScreen';
import RegSecond from '../../screens/authScreens/regSecondScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SCREENS.preAuth}>
      <Stack.Screen name={SCREENS.bottom} component={BottomNavigation} />
      <Stack.Screen name={SCREENS.preAuth} component={PreAuth} />
      <Stack.Screen name={SCREENS.auth} component={Auth} />
      <Stack.Screen name={SCREENS.regFirst} component={RegFirst} />
      <Stack.Screen name={SCREENS.regSecond} component={RegSecond} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
