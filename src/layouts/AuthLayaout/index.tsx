import {ImageBackground, SafeAreaView} from 'react-native';
import React, {FC} from 'react';
import {IAuthLayout} from './types';
import {IMAGES} from '../../assets/images';
import {styles} from './styles';

const LayoutAuth: FC<IAuthLayout> = ({children}) => {
  return (
    <ImageBackground source={IMAGES.bgImage} style={styles.bgImage}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default LayoutAuth;
