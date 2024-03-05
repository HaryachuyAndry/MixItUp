import {View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {LayoutKeyboardProps} from './type';
import {styles} from './style';

const KeyboardLayout: FC<LayoutKeyboardProps> = ({children, customStyles}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.keyboard}
      keyboardVerticalOffset={120}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={[styles.scrollContainer, customStyles]}>
        <View>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardLayout;
