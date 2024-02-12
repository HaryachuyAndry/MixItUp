import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export type LayoutKeyboardProps = {
  children: ReactNode;
  customStyles?: ViewStyle | Array<ViewStyle>;
};
