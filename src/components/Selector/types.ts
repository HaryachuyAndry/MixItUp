import {ViewStyle} from 'react-native';

export type PropsSelector = {
  listProperties: Array<{label: string; value: any}>;
  error?: string;
  customStyles?: ViewStyle | Array<ViewStyle>;
  placeholder?: string;
};
