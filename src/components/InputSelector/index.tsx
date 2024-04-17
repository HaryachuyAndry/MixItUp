import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import {styles} from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {ICONS} from '../../assets/icons';
import {CustomInputSelectorProps} from './types';
import CustomModal from '../CustomModal';
import {ActionSheetRef} from 'react-native-actions-sheet';
import {SvgXml} from 'react-native-svg';
import TextButton from '../textBtn';
import {ProductType} from '../../models/generalModels';

const InputSelector: FC<CustomInputSelectorProps> = ({
  placeholder,
  onChange,
  error,
  customStyles,
  value,
  arrayOptions,
}) => {
  const modalRef = useRef<ActionSheetRef>(null);
  const placeholderPositionY = useSharedValue(value.length ? -8 : 0);
  const placeholderSize = useSharedValue(value.length ? 12 : 18);
  const inputPositionY = useSharedValue(value.length ? 6 : 0);

  const [textValue, setTextValue] = useState<string>('');

  const handleFocus = (focus: boolean) => {
    const active = focus || value.length;
    placeholderPositionY.value = active ? -8 : 0;
    placeholderSize.value = active ? 12 : 18;
    inputPositionY.value = active ? 6 : 0;
  };

  const animatedStylesPlaceholder = useAnimatedStyle(() => ({
    transform: [{translateY: withSpring(placeholderPositionY.value)}],
    fontSize: withSpring(placeholderSize.value),
  }));

  const animatedStylesInput = useAnimatedStyle(() => ({
    transform: [{translateY: withSpring(inputPositionY.value)}],
  }));

  const onAddOption = (id: string) => {
    onChange([
      ...value,
      arrayOptions.find(item => item.id === id) as ProductType,
    ]);
  };

  const onRemoveOption = (id: string) => {
    const newArrOptions = value.filter(item => id !== item.id);
    onChange(newArrOptions);
  };

  const filteredLIstOptions = arrayOptions.filter(
    item => !value.map(item => item.id).includes(item.id),
  );

  return (
    <>
      <View style={[styles.inner, customStyles]}>
        <Animated.View style={styles.container}>
          <Animated.Text
            style={[styles.placeholder, animatedStylesPlaceholder]}>
            {placeholder}
          </Animated.Text>
          <Animated.View
            style={[
              {
                flex: 1,
                marginTop: 20,
                marginBottom: 20,
              },
              animatedStylesInput,
            ]}>
            <Pressable
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
              onPress={() => {
                handleFocus(true);
                modalRef.current?.show();
              }}
              style={{
                width: '100%',
                flexDirection: 'row',
                flex: 1,
                gap: 8,
                flexWrap: 'wrap',
              }}>
              {value.map(item => (
                <View style={styles.inputValueContainer}>
                  <Text id={item.id} style={styles.inputValue}>
                    {item.label}
                  </Text>
                </View>
              ))}
            </Pressable>
            {!!error && (
              <Image source={ICONS.error} style={{width: 26, height: 26}} />
            )}
          </Animated.View>
        </Animated.View>
      </View>
      <CustomModal
        isModal={true}
        title={placeholder}
        fullHeight
        enableGesturesInScrollView
        actionSheetRef={modalRef}
        onClose={v => {
          setTextValue('');
          handleFocus(false);
        }}>
        <>
          <View style={[styles.container, styles.containerInModal]}>
            <TextInput
              style={styles.input}
              onBlur={() => console.log('textValue', textValue)}
              onChangeText={v => {
                setTextValue(v);
              }}
              autoFocus
            />
          </View>
          <View style={styles.blockValues}>
            {value.map(item => (
              <Pressable
                key={item.id}
                style={styles.blockValue}
                onPress={() => onRemoveOption(item.id)}>
                <Text style={styles.textValue}>{item.label}</Text>
                <SvgXml xml={ICONS.smallCross} />
              </Pressable>
            ))}
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollOptionsContainer}>
            {filteredLIstOptions.map(item => (
              <Pressable
                key={item.id}
                style={styles.optionContainer}
                onPress={() => onAddOption(item.id)}>
                <Text style={styles.textOption}>{item.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
          {!filteredLIstOptions.length && !!textValue.length && (
            <TextButton
              onPress={() => {}}
              textButton="додати інградієнт"
              customTextStyles={styles.customTextStyles}
            />
          )}
        </>
      </CustomModal>
    </>
  );
};

export default InputSelector;
