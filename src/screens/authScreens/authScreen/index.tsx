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
import {IInitialValues, PropsHandleTextChange} from './types';

const Auth: FC<RootStackScreenType<SCREENS.auth>> = ({navigation}) => {
  const initialValues: IInitialValues = {
    nik: '',
    password: '',
  };

  return (
    <LayoutAuth>
      <View style={styles.container}>
        <Image source={ICONS.logo} style={styles.logo} />
        <View style={styles.formContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={authSchema}
            validateOnMount={false}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={v => {}}>
            {({values, errors, setFieldValue, handleSubmit, setFieldError}) => {
              const handleTextChange = ({
                fieldName,
                value,
              }: PropsHandleTextChange) => {
                setFieldValue(fieldName, value);
                setFieldError(fieldName, '');
              };

              return (
                <KeyboardLayout>
                  <CustomTextInput
                    value={values.nik}
                    onChange={value =>
                      handleTextChange({fieldName: 'nik', value})
                    }
                    placeholder="Нік"
                    customStyles={styles.stylesInput}
                    error={errors.nik}
                  />
                  <CustomTextInput
                    value={values.password}
                    onChange={value =>
                      handleTextChange({fieldName: 'password', value})
                    }
                    placeholder="Пароль"
                    customStyles={styles.stylesInput}
                    error={errors.password}
                    secureTextEntry={true}
                  />
                  <CustomButton
                    onPress={handleSubmit}
                    errors={errors}
                    textButton="Війти"
                    customButtonStyles={styles.stylesBtn}
                    loading={false}
                  />
                  <TextButton
                    textButton="Зареєструватись"
                    onPress={() => {
                      navigation.navigate(SCREENS.regFirst);
                    }}
                  />
                </KeyboardLayout>
              );
            }}
          </Formik>
        </View>
      </View>
    </LayoutAuth>
  );
};

export default Auth;
