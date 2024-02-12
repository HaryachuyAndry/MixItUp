import {FC} from 'react';

import {SCREENS} from '../screens';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  [SCREENS.bottom]: undefined;
  [SCREENS.auth]: undefined;
  [SCREENS.regFirst]: undefined;
  [SCREENS.regSecond]: undefined;
  [SCREENS.preAuth]: undefined;
};

export type RootStackScreenType<SCREENS extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, SCREENS>;
