import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {RootStackScreenType} from '../../../navigation/RootNavigation/navigationTypes';
import {SCREENS} from '../../../navigation/screens';
import LayoutAuth from '../../../layouts/AuthLayaout';
import {styles} from './styles';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/customButton';
import TextButton from '../../../components/textBtn';
import {ICONS} from '../../../assets/icons';

const RegFirst: FC<RootStackScreenType<SCREENS.regFirst>> = ({navigation}) => {
  return (
    <LayoutAuth>
      <View style={styles.container}>
        <Image source={ICONS.camera} style={styles.logo} />
        <View>
          <CustomTextInput
            onChange={() => {}}
            placeholder="Імя"
            customStyles={styles.stylesInput}
          />
          <CustomTextInput
            onChange={() => {}}
            placeholder="Нік"
            customStyles={styles.stylesInput}
          />
          <CustomTextInput
            onChange={() => {}}
            placeholder="Пароль"
            customStyles={styles.stylesInput}
          />
          <CustomButton
            onPress={() => {
              navigation.navigate(SCREENS.regSecond);
            }}
            textButton="далі"
            customButtonStyles={styles.stylesBtn}
          />
          <TextButton
            textButton="назад"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </LayoutAuth>
  );
};

export default RegFirst;
