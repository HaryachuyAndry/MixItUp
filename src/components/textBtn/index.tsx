import {Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {TextButtonProps} from './types';
import {styles} from './styles';

const TextButton: FC<TextButtonProps> = ({
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

export default TextButton;
