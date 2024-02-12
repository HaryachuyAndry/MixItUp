import {TextInputProps, ViewStyle} from 'react-native';

export type CustomTextInputProps = Omit<TextInputProps, 'onChange'> & {
  onChange: (v: string) => void;
  customStyles?: ViewStyle | Array<ViewStyle>;
  error?: string;
};
