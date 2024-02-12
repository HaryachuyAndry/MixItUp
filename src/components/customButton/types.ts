import {TextStyle, ViewStyle} from 'react-native';

export type CustomButtonProps = {
  textButton: string;
  onPress: () => void;
  customButtonStyles?: ViewStyle | Array<ViewStyle>;
  customTextStyles?: TextStyle | Array<TextStyle>;
  loading?: boolean;
  disabled?: boolean;
};
