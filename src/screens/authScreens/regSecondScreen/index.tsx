import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {RootStackScreenType} from '../../../navigation/RootNavigation/navigationTypes';
import {SCREENS} from '../../../navigation/screens';
import LayoutAuth from '../../../layouts/AuthLayaout';
import CustomTextInput from '../../../components/CustomTextInput';
import {styles} from './styles';
import {ICONS} from '../../../assets/icons';
import CustomButton from '../../../components/customButton';
import TextButton from '../../../components/textBtn';

const RegSecond: FC<RootStackScreenType<SCREENS.regSecond>> = ({
  navigation,
}) => {
  return (
    <LayoutAuth>
      <View style={styles.container}>
        <Image source={ICONS.avatar} style={styles.logo} />
        <View>
          <CustomTextInput
            onChange={() => {}}
            placeholder="Вік"
            customStyles={styles.stylesInput}
          />
          <CustomTextInput
            onChange={() => {}}
            placeholder="Стать"
            customStyles={styles.stylesInput}
          />
          <CustomTextInput
            onChange={() => {}}
            placeholder="Вподобання"
            customStyles={styles.stylesInput}
          />
          <CustomTextInput
            onChange={() => {}}
            placeholder="Алергії"
            customStyles={styles.stylesInput}
          />
          <CustomButton
            onPress={() => {}}
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

export default RegSecond;
