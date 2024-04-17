import {View, Text, Pressable} from 'react-native';
import React, {FC} from 'react';
import ActionSheet from 'react-native-actions-sheet';
import {CustomModalProps} from './types';
import {styles} from './styles';
import {SvgXml} from 'react-native-svg';
import {ICONS} from '../../assets/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomModal: FC<CustomModalProps> = ({
  title,
  customStyles,
  actionSheetRef,
  onClose,
  fullHeight = false,
  ...props
}) => {
  const ass = useSafeAreaInsets();

  return (
    <ActionSheet
      containerStyle={{...styles.actionSheet, flex: fullHeight ? 1 : undefined}}
      ref={actionSheetRef}
      gestureEnabled={true}
      safeAreaInsets={ass}
      onClose={onClose}>
      <View style={[styles.container, customStyles]}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Pressable
            style={styles.closeBtn}
            hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
            onPress={() => {
              actionSheetRef?.current?.hide();
            }}>
            <SvgXml xml={ICONS.cross} />
          </Pressable>
        </View>
        {props.children}
      </View>
    </ActionSheet>
  );
};

export default CustomModal;
