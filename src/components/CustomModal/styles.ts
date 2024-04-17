import {StyleSheet} from 'react-native';
import {FONT_FAMILIES} from '../../assets/fonts';
import {COLORS} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeBtn: {
    position: 'absolute',
    right: 0,
  },
  title: {
    fontFamily: FONT_FAMILIES.TTNormsPro.medium,
    fontSize: 24,
    color: COLORS.mainText,
  },
  actionSheet: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: 'rgba(2,27,35,0.9)',
  },
});
