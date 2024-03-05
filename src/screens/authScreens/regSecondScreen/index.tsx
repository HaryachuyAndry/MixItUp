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
import {Formik} from 'formik';
import KeyboardLayout from '../../../layouts/KeyboardLayout';
import {IInitialValues, PropsHandleTextChange} from './types';
import {regSecondScreenSchema} from '../../../validations/schemas';
import Selector from '../../../components/Selector';
import {listGenders} from '../../../constants/global';

const RegSecond: FC<RootStackScreenType<SCREENS.regSecond>> = ({
  navigation,
}) => {
  const initialValues: IInitialValues = {
    dob: null,
    gender: null,
    preferences: [],
    allergies: [],
  };

  return (
    <LayoutAuth>
      <View style={styles.container}>
        <Image source={ICONS.avatar} style={styles.logo} />
        <View style={styles.formContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={regSecondScreenSchema}
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
                    onChange={() => {}}
                    placeholder="Вік"
                    customStyles={styles.stylesInput}
                  />
                  <Selector
                    listProperties={listGenders}
                    placeholder="Стать"
                    error={errors.gender}
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
                </KeyboardLayout>
              );
            }}
          </Formik>
        </View>
      </View>
    </LayoutAuth>
  );
};

export default RegSecond;
