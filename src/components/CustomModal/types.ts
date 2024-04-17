import {ViewStyle} from 'react-native';
import {ActionSheetProps, ActionSheetRef} from 'react-native-actions-sheet';

export type CustomModalProps = Omit<ActionSheetProps, 'onChange'> & {
  title?: string;
  customStyles?: ViewStyle | Array<ViewStyle>;
  actionSheetRef: React.RefObject<ActionSheetRef>;
  onClose?: (v?: boolean) => void;
  fullHeight: boolean;
};
