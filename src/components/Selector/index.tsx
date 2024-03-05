import {View, Text, Image, TextInput, Keyboard} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {PropsSelector} from './types';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {ICONS} from '../../assets/icons';
import {styles} from './styles';

const Selector: FC<PropsSelector> = ({
  listProperties,
  error,
  customStyles,
  placeholder,
}) => {
  const borderErrorOpacity = useSharedValue(0);
  const placeholderPositionY = useSharedValue(0);
  const placeholderSize = useSharedValue(18);
  const heightContainerList = useSharedValue(0);

  const [value, setValue] = useState<{label: string; value: any} | null>(null);

  const handleError = (errorMessage: string | undefined) => {
    borderErrorOpacity.value = !!errorMessage ? 1 : 0;
  };

  const handleFocus = (focus: boolean) => {
    const active = focus;
    placeholderPositionY.value = active ? -14 : 0;
    placeholderSize.value = active ? 12 : 18;
    heightContainerList.value = active ? 100 : 0;
  };

  const animatedStylesErrorBorder = useAnimatedStyle(() => ({
    opacity: withTiming(borderErrorOpacity.value, {duration: 1000}),
  }));

  const animatedStylesPlaceholder = useAnimatedStyle(() => ({
    transform: [{translateY: withSpring(placeholderPositionY.value)}],
    fontSize: withSpring(placeholderSize.value),
  }));

  const animatedStylesContainerList = useAnimatedStyle(() => ({
    height: withTiming(heightContainerList.value, {duration: 1000}),
  }));

  return (
    <View style={[styles.inner, customStyles]}>
      <Animated.View style={[styles.border, animatedStylesErrorBorder]} />
      <View style={[styles.container]}>
        <Animated.Text style={[styles.placeholder, animatedStylesPlaceholder]}>
          {placeholder}
        </Animated.Text>
        <Animated.View
          style={[{flex: 1, flexDirection: 'row', alignItems: 'center'}]}>
          <TextInput
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            placeholder=""
            cursorColor="rgba(255,255,255,0)"
            selectionColor="rgba(255,255,255,0)"
            inputMode="url"
            onFocus={() => {
              handleFocus(true);
            }}
            onBlur={() => handleFocus(false)}
            // showSoftInputOnFocus={false}
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
      <Animated.View
        style={[
          {
            top: 54,
            position: 'absolute',
            backgroundColor: 'green',
            height: 100,
            width: '100%',
            borderRadius: 13,
          },
          animatedStylesContainerList,
        ]}></Animated.View>
    </View>
  );
};

export default Selector;
