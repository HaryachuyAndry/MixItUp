import {View, Image} from 'react-native';
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
import InputSelector from '../../../components/InputSelector';
import {arrayMocOptions, arrayMocValues} from './mocData';

const RegSecond: FC<RootStackScreenType<SCREENS.regSecond>> = (
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
                    keyboardType="number-pad"
                    placeholder="Вік"
                    customStyles={styles.stylesInput}
                  />
                  <Selector
                    value={values.gender}
                    onChange={value => {
                      handleTextChange({fieldName: 'gender', value});
                    }}
                    listProperties={listGenders}
                    placeholder="Стать"
                    error={errors.gender}
                    customStyles={styles.stylesInput}
                  />
                  <InputSelector
                    onChange={value => {
                      handleTextChange({fieldName: 'preferences', value});
                    }}
                    onChangeText={v => {}}
                    placeholder="Вподобання"
                    customStyles={styles.stylesInput}
                    value={values.preferences}
                    arrayOptions={arrayMocOptions}
                  />
                  <InputSelector
                    onChange={value => {
                      handleTextChange({fieldName: 'allergies', value});
                    }}
                    onChangeText={v => {}}
                    placeholder="Алергії"
                    customStyles={styles.stylesInput}
                    value={values.allergies}
                    arrayOptions={arrayMocOptions}
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
