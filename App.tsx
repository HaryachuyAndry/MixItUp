import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
