import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  inner: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
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
  optionsContainer: {
    marginBottom: 40,
    marginTop: 20,
  },
  optionItem: {
    marginVertical: 10,
    backgroundColor: 'rgba(10,97,121,0.2)',
    borderRadius: 10,
  },
  optionText: {
    fontFamily: FONT_FAMILIES.TTNormsPro.medium,
    fontSize: 17,
    paddingLeft: 16,
    paddingVertical: 10,
    color: COLORS.mainText,
  },
});
