import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  inner: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignSelf: 'stretch',
    height: 50,
    marginHorizontal: 2,
    backgroundColor: COLORS.whiteGray,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  border: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.error,
    borderRadius: 13,
  },
  placeholder: {
    position: 'absolute',
    color: COLORS.placeHolderText,
    marginLeft: 20,
    fontSize: 18,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    color: COLORS.black,
  },
  errorMessage: {
    position: 'absolute',
    bottom: 0,
    color: COLORS.error,
    fontSize: 8,
    padding: 0,
    marginLeft: 20,
  },
  containerErrorMessage: {
    position: 'absolute',
    backgroundColor: COLORS.whiteGray,
    top: -11,
    right: 12,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 10,
    borderColor: COLORS.error,
    borderWidth: 1,
  },
});
