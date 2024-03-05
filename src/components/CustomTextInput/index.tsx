import {View, Text, TextInput, Image} from 'react-native';
import React, {FC, useEffect, useRef} from 'react';
import {CustomTextInputProps} from './types';
import {styles} from './styles';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {ICONS} from '../../assets/icons';

const CustomTextInput: FC<CustomTextInputProps> = ({
  customStyles,
  onChange,
  error,
  ...props
}) => {
  const inputValue = useRef<string>('');
  const placeholderPositionY = useSharedValue(0);
  const placeholderSize = useSharedValue(18);
  const borderErrorOpacity = useSharedValue(0);
  const inputPositionY = useSharedValue(0);

  useEffect(() => {
    handleError(error);
  }, [error]);

  const handleFocus = (focus: boolean) => {
    const active = focus || inputValue.current.length;
    placeholderPositionY.value = active ? -14 : 0;
    placeholderSize.value = active ? 12 : 18;
    inputPositionY.value = active ? 6 : 0;
  };

  const handleError = (errorMessage: string | undefined) => {
    borderErrorOpacity.value = !!errorMessage ? 1 : 0;
  };

  const animatedStylesPlaceholder = useAnimatedStyle(() => ({
    transform: [{translateY: withSpring(placeholderPositionY.value)}],
    fontSize: withSpring(placeholderSize.value),
  }));

  const animatedStylesInput = useAnimatedStyle(() => ({
    transform: [{translateY: withSpring(inputPositionY.value)}],
  }));

  const animatedStylesErrorBorder = useAnimatedStyle(() => ({
    opacity: withTiming(borderErrorOpacity.value, {
      duration: 1000,
      easing: Easing.linear,
      reduceMotion: ReduceMotion.System,
    }),
  }));

  return (
    <View style={[styles.inner, customStyles]}>
      <Animated.View style={[styles.border, animatedStylesErrorBorder]} />
      <View style={[styles.container]}>
        <Animated.Text style={[styles.placeholder, animatedStylesPlaceholder]}>
          {props.placeholder}
        </Animated.Text>
        <Animated.View
          style={[
            {flex: 1, flexDirection: 'row', alignItems: 'center'},
            animatedStylesInput,
          ]}>
          <TextInput
            {...props}
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            placeholder=""
            cursorColor="#304f48"
            selectionColor="#304f48"
            onChangeText={v => {
              onChange(v);
              inputValue.current = v;
            }}
            onFocus={() => handleFocus(true)}
            onBlur={() => handleFocus(false)}
            style={styles.input}
          />
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
  );
};

export default CustomTextInput;
