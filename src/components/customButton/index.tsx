import {Text, TouchableOpacity} from 'react-native';
import React, {FC, useEffect, useRef, useState} from 'react';
import LoaderKit from 'react-native-loader-kit';
import {CustomButtonProps} from './types';
import {styles} from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {COLORS} from '../../assets/colors';

const CustomButton: FC<CustomButtonProps> = ({
  textButton,
  onPress,
  customButtonStyles,
  customTextStyles,
  loading,
  disabled,
  errors,
}) => {
  const buttonPositionY = useSharedValue(0);
  const buttonWidth = useSharedValue(200);

  const OFFSET = 4;
  const TIME = 70;

  const buttonRef = useRef<boolean>(false);

  const animatedStylesButton = useAnimatedStyle(() => ({
    transform: [{translateX: buttonPositionY.value}],
    width: buttonWidth.value,
  }));

  const handleError = () => {
    if (
      !!errors &&
      Object.values(errors).filter(i => i).length &&
      buttonRef.current
    ) {
      buttonRef.current = false;
      buttonPositionY.value = withSequence(
        withTiming(-OFFSET / 2, {duration: TIME}),
        withRepeat(withTiming(OFFSET, {duration: TIME}), 5, true),
        withTiming(0, {duration: TIME}),
      );
    }
  };

  const handleLoading = () => {
    buttonWidth.value = loading
      ? withTiming(100, {duration: 500})
      : withTiming(200, {duration: 500});
  };

  useEffect(() => {
    handleError();
  }, [errors]);

  useEffect(() => {
    handleLoading();
  }, [loading]);

  return (
    <Animated.View style={[animatedStylesButton, customButtonStyles]}>
      <TouchableOpacity
        style={[styles.btn]}
        onPress={() => {
          onPress();
          buttonRef.current = true;
          handleError();
        }}>
        {loading ? (
          <LoaderKit
            style={{width: 50, height: 50}}
            name={'BallPulse'}
            size={50}
            color={COLORS.cursor}
          />
        ) : (
          <Text style={[styles.text, customTextStyles]}>{textButton}</Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CustomButton;
