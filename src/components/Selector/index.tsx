import {View, Text, Image, Keyboard, Pressable, Dimensions} from 'react-native';
import React, {FC, useRef} from 'react';
import {PropsSelector} from './types';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {ICONS} from '../../assets/icons';
import {styles} from './styles';
import {ActionSheetRef} from 'react-native-actions-sheet';
import CustomModal from '../CustomModal';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Selector: FC<PropsSelector> = ({
  listProperties,
  error,
  customStyles,
  placeholder,
  value,
  onChange,
}) => {
  const borderErrorOpacity = useSharedValue(0);
  const placeholderPositionY = useSharedValue(0);
  const placeholderSize = useSharedValue(18);
  const inputPositionY = useSharedValue(0);

  const actionSheetRef = useRef<ActionSheetRef>(null);

  const handleError = (errorMessage: string | undefined) => {
    borderErrorOpacity.value = !!errorMessage ? 1 : 0;
  };

  const handleFocus = (focus: boolean) => {
    const active = focus || !!value;
    placeholderPositionY.value = active ? -14 : 0;
    placeholderSize.value = active ? 12 : 18;
    inputPositionY.value = active ? 6 : 0;
    Keyboard.dismiss();
  };

  const animatedStylesErrorBorder = useAnimatedStyle(() => ({
    opacity: withTiming(borderErrorOpacity.value, {duration: 1000}),
  }));

  const animatedStylesPlaceholder = useAnimatedStyle(() => ({
    transform: [{translateY: withSpring(placeholderPositionY.value)}],
    fontSize: withSpring(placeholderSize.value),
  }));

  const animatedStylesInput = useAnimatedStyle(() => ({
    transform: [{translateY: withSpring(inputPositionY.value)}],
  }));

  return (
    <>
      <View style={[styles.inner, customStyles]} onTouchStart={e => {}}>
        <Animated.View style={[styles.border, animatedStylesErrorBorder]} />
        <View style={[styles.container]}>
          <Animated.Text
            style={[styles.placeholder, animatedStylesPlaceholder]}>
            {placeholder}
          </Animated.Text>
          <Animated.View
            style={[
              {flex: 1, flexDirection: 'row', alignItems: 'center'},
              animatedStylesInput,
            ]}>
            <Pressable
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
              onPress={() => {
                handleFocus(true);
                actionSheetRef.current?.show();
              }}
              style={{
                width: '100%',
                height: 20,
              }}>
              <Text style={styles.input}>{value?.label}</Text>
            </Pressable>

            {!!error && (
              <Image source={ICONS.error} style={{width: 26, height: 26}} />
            )}
          </Animated.View>
        </View>
        {!!error && (
          <View style={styles.containerErrorMessage}>
            <Text>{error}</Text>
          </View>
        )}
      </View>
      <CustomModal
        isModal={true}
        title={placeholder}
        actionSheetRef={actionSheetRef}
        onClose={v => {
          handleFocus(!!v);
        }}>
        <View style={styles.optionsContainer}>
          {listProperties.map(item => (
            <TouchableOpacity
              key={item.value}
              style={styles.optionItem}
              onPress={() => {
                onChange(item);
                handleFocus(true);
                actionSheetRef.current?.hide(true);
              }}>
              <Text style={styles.optionText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </CustomModal>
    </>
  );
};

export default Selector;
