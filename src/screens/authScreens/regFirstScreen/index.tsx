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
import {Formik} from 'formik';
import {IInitialValues, PropsHandleTextChange} from './types';
import {regFirstScreenSchema} from '../../../validations/schemas';
import KeyboardLayout from '../../../layouts/KeyboardLayout';

const RegFirst: FC<RootStackScreenType<SCREENS.regFirst>> = ({navigation}) => {
  const initialValues: IInitialValues = {
    name: '',
    nik: '',
    password: '',
  };

  return (
    <LayoutAuth>
      <View style={styles.container}>
        <Image source={ICONS.camera} style={styles.logo} />
        <View style={styles.formContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={regFirstScreenSchema}
            validateOnMount={false}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={v => {
              navigation.navigate(SCREENS.regSecond);
            }}>
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
                    value={values.name}
                    error={errors.name}
                    onChange={value => {
                      handleTextChange({fieldName: 'name', value});
                    }}
                    placeholder="Імя"
                    customStyles={styles.stylesInput}
                  />
                  <CustomTextInput
                    value={values.nik}
                    onChange={value => {
                      handleTextChange({fieldName: 'nik', value});
                    }}
                    error={errors.nik}
                    placeholder="Нік"
                    customStyles={styles.stylesInput}
                  />
                  <CustomTextInput
                    value={values.password}
                    error={errors.password}
                    textContentType="password"
                    onChange={value => {
                      handleTextChange({fieldName: 'password', value});
                    }}
                    placeholder="Пароль"
                    customStyles={styles.stylesInput}
                    secureTextEntry={true}
                  />
                  <CustomButton
                    onPress={handleSubmit}
                    errors={errors}
                    textButton="далі"
                    customButtonStyles={styles.stylesBtn}
                    loading={false}
                  />
                  <TextButton
                    textButton="назад"
                    onPress={() => {
                      navigation.goBack();
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

export default RegFirst;
