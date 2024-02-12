import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {CustomButtonProps} from './types';
import {styles} from './styles';

const CustomButton: FC<CustomButtonProps> = ({
  textButton,
  onPress,
  customButtonStyles,
  customTextStyles,
  loading,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, customButtonStyles]}
      onPress={onPress}>
      <Text style={[styles.text, customTextStyles]}>{textButton}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
