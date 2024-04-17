import {ViewStyle} from 'react-native';

export type PropsSelector = {
  listProperties: Array<{label: string; value: any}>;
  error?: string;
  customStyles?: ViewStyle | Array<ViewStyle>;
  placeholder?: string;
  value: {label: string; value: any} | null;
  onChange: (value: {label: string; value: any}) => void;
};
