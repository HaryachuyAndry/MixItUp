import {View, Image} from 'react-native';
import React, {FC} from 'react';
import {RootStackScreenType} from '../../../navigation/RootNavigation/navigationTypes';
import {SCREENS} from '../../../navigation/screens';
import LayoutAuth from '../../../layouts/AuthLayaout';
import {ICONS} from '../../../assets/icons';
import {styles} from './styles';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/customButton';
import TextButton from '../../../components/textBtn';
import {Formik} from 'formik';
import KeyboardLayout from '../../../layouts/KeyboardLayout';
import {authSchema} from '../../../validations/schemas';

const Auth: FC<RootStackScreenType<SCREENS.auth>> = ({navigation}) => {
  return (
    <LayoutAuth>
      <View style={styles.container}>
        <Image source={ICONS.logo} style={styles.logo} />
        <View style={styles.formContainer}>
          <Formik
            initialValues={{
              nik: '',
              password: '',
            }}
            validationSchema={authSchema}
            validateOnChange={false}
            onSubmit={v => {}}>
            {({values, errors, setFieldValue, handleSubmit, setErrors}) => (
              <KeyboardLayout>
                <CustomTextInput
                  value={values.nik}
                  onChange={v => setFieldValue('nik', v)}
                  placeholder="Нік"
                  customStyles={styles.stylesInput}
                  error={errors.nik}
                />
                <CustomTextInput
                  value={values.password}
                  onChange={v => setFieldValue('password', v)}
                  placeholder="Пароль"
                  customStyles={styles.stylesInput}
                  error={errors.password}
                />
                <CustomButton
                  onPress={handleSubmit}
                  textButton="Війти"
                  customButtonStyles={styles.stylesBtn}
                />
                <TextButton
                  textButton="Зареєструватись"
                  onPress={() => {
                    navigation.navigate(SCREENS.regFirst);
                  }}
                />
              </KeyboardLayout>
            )}
          </Formik>
        </View>
      </View>
    </LayoutAuth>
  );
};

export default Auth;
