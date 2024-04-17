import {ViewStyle} from 'react-native';
import {ProductType} from '../../models/generalModels';

export type CustomInputSelectorProps = {
  placeholder: string;
  onChange: (v: Array<ProductType>) => void;
  onChangeText: (v: string) => void;
  customStyles?: ViewStyle | Array<ViewStyle>;
  error?: string;
  value: Array<{label: string; id: string}>;
  arrayOptions: Array<{label: string; id: string}>;
};
