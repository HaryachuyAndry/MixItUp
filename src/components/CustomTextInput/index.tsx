import {
  View,
  Text,
  TextInput,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {CustomTextInputProps} from './types';
import {style} from './styles';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const CustomTextInput: FC<CustomTextInputProps> = ({
  customStyles,
  onChange,
  error,
  ...props
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setErrorMessage(error);
  }, [error]);

  return (
    <View style={[style.container, customStyles]}>
      <TextInput
        {...props}
        onChangeText={onChange}
        placeholderTextColor={'#7a8385'}
        style={style.input}
      />
      {!!error && (
        <Text style={[style.errorMessage, style.errorMessageActive]}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default CustomTextInput;
