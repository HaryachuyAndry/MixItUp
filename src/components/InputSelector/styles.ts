import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';
import {FONT_FAMILIES} from '../../assets/fonts';

export const styles = StyleSheet.create({
  inner: {
    minHeight: 54,
  },
  container: {
    alignSelf: 'stretch',
    minHeight: 50,
    marginHorizontal: 2,
    backgroundColor: COLORS.whiteGray,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  placeholder: {
    top: 14,
    position: 'absolute',
    color: COLORS.placeHolderText,
    marginLeft: 20,
    fontSize: 18,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
  },
  inputValueContainer: {
    backgroundColor: 'rgba(10,97,121,0.2)',
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  inputValue: {
    fontSize: 14,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    color: COLORS.black,
  },
  containerInModal: {
    marginTop: 12,
  },
  blockValues: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 8,
    flexWrap: 'wrap',
    gap: 10,
  },
  blockValue: {
    backgroundColor: 'rgba(10,97,121,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textValue: {
    marginRight: 6,
    fontSize: 14,
    color: COLORS.mainText,
  },
  scrollOptionsContainer: {
    paddingBottom: 200,
  },
  optionContainer: {
    marginVertical: 8,
    backgroundColor: 'rgba(10,97,121,0.2)',
    borderRadius: 10,
  },
  textOption: {
    fontFamily: FONT_FAMILIES.TTNormsPro.medium,
    fontSize: 17,
    paddingLeft: 16,
    paddingVertical: 10,
    color: COLORS.mainText,
  },
  customTextStyles: {
    color: COLORS.mainText,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontFamily: FONT_FAMILIES.SFProDisplay.regular,
    color: COLORS.black,
  },
});
