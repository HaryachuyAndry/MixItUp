import {View, Text} from 'react-native';
import React, {FC, useEffect} from 'react';
import {RootStackScreenType} from '../../navigation/RootNavigation/navigationTypes';
import {SCREENS} from '../../navigation/screens';

const PreAuth: FC<RootStackScreenType<SCREENS.preAuth>> = ({navigation}) => {
  useEffect(() => {
    navigation.navigate(SCREENS.auth);
  }, []);
  return (
    <View>
      <Text>PreAuth</Text>
    </View>
  );
};

export default PreAuth;
