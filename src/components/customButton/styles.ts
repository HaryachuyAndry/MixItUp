import {StyleSheet} from 'react-native';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  btn: {
    height: 47,
    width: '100%',
    borderRadius: 24,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
  },
});
