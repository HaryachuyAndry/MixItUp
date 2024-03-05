import {Button, View} from 'react-native';
import React, {FC} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {styles} from './styles';

interface ITestCOmponent {
  test?: string;
}

const TestComponent: FC<ITestCOmponent> = ({}) => {
  const translateX = useSharedValue(50); // початкові значення для анімації працює як юзРеф
  const width = useSharedValue(100);

  const handlePress = () => {
    // будьяка функція просто зміна даних як в рефі за якими буде слідкувати useAnimatedStyle
    translateX.value = translateX.value === 50 ? 100 : 50;
    width.value = width.value === 100 ? 50 : 100;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    //створення анімованого обєкта стилів
    transform: [{translateX: withSpring(translateX.value)}], // передаємо просто спільні значення
    width: withSpring(width.value),
  }));

  return (
    <View>
      <Animated.View style={[styles.main, animatedStyles]} />
      <Button onPress={handlePress} title="test" />
    </View>
  );
};

export default TestComponent;
